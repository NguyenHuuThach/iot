require('dotenv/config')
const PORT = process.env.PORT || 3001

const express = require("./expressBin.js")
const app = express.init()

const mongoose = require('mongoose')

const http = require('http')
const server = http.createServer(app);
const io = require('socket.io')(server);


io.of('/tracking').on("connection", (socket) => {
    console.log("socket.io: User connected: ", socket.id);

    socket.on("disconnect", () => {
        console.log("socket.io: User disconnected: ", socket.id);
    });
});


//start the server
server.listen(PORT, () => console.log(`Server now running on http://localhost:${PORT}`));



//connect to db
mongoose.connect(process.env.CONNECTION_DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
});

const connection = mongoose.connection;

connection.once("open", () => {
    console.log("MongoDB database connected");

    const ChangeStream = connection.collection("set datas").watch();

    ChangeStream.on("change", (change) => {

        switch (change.operationType) {
            case "insert":
                const data = {
                    topic: change.fullDocument.topic,
                    user: change.fullDocument.user,
                    isStart: change.fullDocument.isStart,
                    date: change.fullDocument.date
                };
                io.of('/tracking').emit("newAction", data);
                console.log("================ Day la du lieu real time ================")
                console.log(data)
                console.log("==========================================================")
                break;

            case "delete":
                io.of('/tracking').emit("deletedData", change.documentKey._id);
                break;
        }
    });
});


connection.on("error", (error) => console.log("Error: " + error));






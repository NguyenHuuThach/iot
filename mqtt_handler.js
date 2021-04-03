const mqtt = require('mqtt');
const Data = require('./Schema/data');


class MqttHandler {
    constructor() {
        this.mqttClient = null;
        this.host = 'mqtt://localhost:1883';
    }

    connect() {
        // Connect mqtt 
        this.mqttClient = mqtt.connect(this.host);

        // Mqtt error calback
        this.mqttClient.on('error', (err) => {
            console.log(err);
            this.mqttClient.end();
        });

        // Connection callback
        this.mqttClient.on('connect', () => {
            console.log(`mqtt client connected`)
        });

        // mqtt subscriptions
        this.mqttClient.subscribe('air-conditioner', { qos: 0 })

        // When a message arrives, console.log it
        this.mqttClient.on('message', async (topic, message) => {
            try {
                const data = new Data({
                    topic: topic,
                    user: JSON.parse(message).user,
                    isStart: JSON.parse(message).isStart
                })
                this.sendMessage(message)
                await data.save()
            } catch {
                console.log("Loi roi Thach oi !!! ")
            }
        });

        this.mqttClient.on('close', () => {
            console.log(`mqtt client disconnected`);
        });
    }

    // Sends a mqtt message to topic: air-conditioner-respond
    sendMessage(message) {
        this.mqttClient.publish('air-conditioner-respond', message)
    }
}

module.exports = MqttHandler;

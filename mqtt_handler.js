const mqtt = require('mqtt');
const Data = require('./Schema/data');


class MqttHandler {
    constructor() {
        this.mqttClient = null;
        this.host = 'http://broker.hivemq.com/';
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
        // this.mqttClient.subscribe('air-conditioner', { qos: 0 })
        // this.mqttClient.subscribe('fan', { qos: 0 })
        // this.mqttClient.subscribe('incandescent-bulbs', { qos: 0 })
        // this.mqttClient.subscribe('fountain', { qos: 0 })
        // this.mqttClient.subscribe('test', { qos: 0 })
        // this.mqttClient.subscribe('thermometer', { qos: 0 })
        this.mqttClient.subscribe('iot', { qos: 0 })

        // When a message arrives, console.log it
        this.mqttClient.on('message', async (topic, message) => {
            try {
                if (JSON.parse(message).sensorType == 1) {
                    const data = new Data({
                        topic: topic,
                        sensorID: JSON.parse(message).sensorID,
                        sensorName: JSON.parse(message).sensorName,
                        sensorType: JSON.parse(message).sensorType,
                        isSchedule: JSON.parse(message).isSchedule,
                        duration: JSON.parse(message).duration,
                        user: JSON.parse(message).user,
                        isStart: JSON.parse(message).isStart
                    })
                    await data.save()
                }
                this.sendMessage(message)
            } catch (error) {
                console.error(error)
            }
        });

        this.mqttClient.on('close', () => {
            console.log(`mqtt client disconnected`);
        });
    }

    // Sends a mqtt message to topic: air-conditioner-respond
    sendMessage(topic) {
        this.mqttClient.publish(topic)
    }
}

module.exports = MqttHandler;

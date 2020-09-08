var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://localhost:1883');

client.on('connect', function() {
    console.log('opa')
    client.subscribe('test', function(err){
        if(!err){
            client.publish('test', 'opaaaa fion')
        }
    })
})

client.on('message', function(topic, message) {
    console.log(message.toString());
    client.end();
})
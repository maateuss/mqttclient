var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://*URL')

client.on('connect', function(){
    client.subscribe('topicoTeste')
})

client.on('message', function(topic, message){
    context = message.toString();
    console.log(context);
})
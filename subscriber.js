var mqtt = require('mqtt')
var client = mqtt.connect('ws://ienvironmentbroker.azurewebsites.net:8080')

client.on('connect', function(){
    client.subscribe('topicoTeste')
})

client.on('message', function(topic, message){
    context = message.toString();
    console.log(context);
})
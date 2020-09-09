var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://URL:1883')
const { Question } = require('./util')

client.on('connect', function(){
    askForTopic();
})

async function askForTopic(){
    const topico = await Question("informe o topico:");
    client.subscribe(topico)
}

client.on('message', function(topic, message){
    context = message.toString();
    console.log(context);
})

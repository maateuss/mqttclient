var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://191.235.240.36:1883')
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
    console.log('topico: ' + topic + '\n mensagem: ' +  context);
})

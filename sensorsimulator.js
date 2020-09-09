var mqtt = require('mqtt');
var client  = mqtt.connect('mqtt://191.235.240.36:1883');
const { Question } = require('./util');
var running = true;
var topico = "";
var sensorName;
var ambienteName;
var unidade;

client.on('connect', async function () {
    sensorName = await Question('insira o id do sensor:');
    ambienteName = await Question('insira o id do ambiente:');
    unidade = await Question('insira o nome do parametro:')
    topico = await Question('insira o topico: ')
    gerarDados();
});


function gerarDados(){
    setInterval(() => {
        client.publish(`${topico}/${ambienteName}/${sensorName}/${unidade}` , (Math.random()*100.0).toString())
    }, 1000);
}
var mqtt = require('mqtt');
var client  = mqtt.connect('mqtt://191.235.240.36:1883');
const { Question } = require('./util');
var running = true;
var topico = "";

client.on('connect', async function () {

    await askForTopic();
    await awaitForEntries();
});

async function askForTopic(){
    topico = await Question('informe o topico a enviar a mensagem:')
}

async function awaitForEntries(){

    while(running){
        var text = await Question('informe a mensagem a ser enviada:');

        client.publish(topico, text);
        if(text === "exit"){
            running = false
            process.exit();
        }
    }
}
// function readEntry(message){
//     const rl = readline.createInterface({
//         input: process.stdin,
//         output: process.stdout
//     });

//     return new Promise(resolve => rl.question(message, ans =>{
//         rl.close();
//         resolve(ans);
//     }))
// }
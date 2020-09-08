var mqtt = require('mqtt');
var client  = mqtt.connect('mqtt://*URL');
var readline = require('readline');
var running = true;


client.on('connect', function () {

    client.publish('topicoTeste', 'Connected!');
    console.log('Connected!');
    awaitForEntries();
});

async function awaitForEntries(){

    while(running){
        const text = await readEntry();
        client.publish('topicoTeste', text);
    }
}
function readEntry(){
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise(resolve => rl.question('informe a mensagem a ser enviada:', ans =>{
        rl.close();
        resolve(ans);
    }))
}
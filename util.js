var readline = require('readline');
exports.Question = function readEntry(message){
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise(resolve => rl.question(message, ans =>{
        rl.close();
        resolve(ans);
    }))
}

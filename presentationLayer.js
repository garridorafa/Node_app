const businessLayer = require('./businessLayer.js');

function run() {
    if (process.argv.length < 3) {
        help();
        process.exit(1);
    };
    businessLayer.executeCommand();
}

function help() {
    console.log(`
    add [name] [phone]
    find [id]
    list
    edit [id] [name] [phone]
    delete [id]
    reset
    `);
}

module.exports = {
    run,
}
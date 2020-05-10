const persistenceLayer = require('./persistenceLayer.js')

function executeCommand() {

    const command = process.argv[2];

    switch (command) {
        case 'add':
            addHandle();
            break;
        case 'find':
            findHandle();
            break;
        case 'list':
            listHandle();
            break;
        case 'edit':
            editHandle();
            break;
        case 'delete':
            deleteHandle();
            break;
        case 'reset':
            resetHandle();
            break;
        default:
            console.log('Comando ' + command + ' invalido')
            break;
    };
}

function addHandle() {
    const name = process.argv[3];
    const phone = process.argv[4];
    persistenceLayer.addContact(name, phone);
}

function findHandle() {
    const id = Number.parseInt(process.argv[3])
    printContact(persistenceLayer.findContact(id));
}

function listHandle() {
    printAllContacts();
}

function editHandle() {
    const id = Number.parseInt(process.argv[3]);
    const name = process.argv[4];
    const phone = process.argv[5];
    persistenceLayer.edit(id, name, phone);
}

function deleteHandle() {
    const id = Number.parseInt(process.argv[3]);
    persistenceLayer.deleteContact(id);
}

function resetHandle() {
    persistenceLayer.reset();
}

//Move printContac and printAll to presentationLayer

function printContact(contact) {
    console.log('Name: ', contact.name);
    console.log('Phone Number: ', contact.phone);
}

function printAllContacts() {
    console.table(persistenceLayer.list);
}
//--------------------------------------------------

module.exports = {
    executeCommand,
};
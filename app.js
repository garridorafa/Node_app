module.exports = {
    executeCommand
};

function executeCommand(db, templates) {

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

    function addHandle() {
        const name = process.argv[3];
        const phone = process.argv[4];
        db.addContact(name, phone);
    }

    function findHandle() {
        const id = Number.parseInt(process.argv[3])
        db.findContact(id, (contacts) => printEach(contacts));
    }

    function printEach(contacts) {
        contacts.map((contact) => templates.printContact(contact));
    }

    function listHandle() {
        db.printAll(result => templates.printAllContacts(result));
    }

    function editHandle() {
        const id = Number.parseInt(process.argv[3]);
        const name = process.argv[4];
        const phone = process.argv[5];
        db.edit(id, name, phone);
    }

    function deleteHandle() {
        const id = Number.parseInt(process.argv[3]);
        db.deleteContact(id);
    }

    function resetHandle() {
        db.reset();
    }
}

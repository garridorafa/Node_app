module.exports = {
    help,
    printContact,
    printAllContacts
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

function printContact(contact) {
    console.log('Name: ', contact.name);
    console.log('Phone Number: ', contact.phone);
}

function printAllContacts(list) {
    console.table(list);
}

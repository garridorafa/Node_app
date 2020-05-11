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
    console.log(JSON.stringify({
        name: contact.name,
        pone: contact.phone
    }, null, 2));
}

function printAllContacts(list) {
    console.log(JSON.stringify(list, null, 2));
}

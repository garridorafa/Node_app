const fs = require('fs');

let list = [];
const contactsPath = './contacts.json';

module.exports = {
  addContact,
  edit,
  deleteContact,
  findContact,
  findContactIndex,
  reset,
  printAll
}

dataconfirm();

function dataconfirm() {
  if (!fs.existsSync(contactsPath)) {
    fs.writeFileSync(contactsPath, "[]");
  } else {
    list = JSON.parse(fs.readFileSync(contactsPath, 'utf8'));
  };
}

function printAll(cb) {
  cb(list);
}

function addContact(name, phone) {
  list.push({ id: list.length, name, phone })
  saveData();
}

function edit(id, name, phone) {
  const index = findContactIndex(id);
  list[index] = { id, name, phone };
  saveData();
}

function deleteContact(id) {
  let index = findContactIndex(id);
  list.splice(index, 1);
  saveData();
};

function findContactIndex(id) {
  return list.findIndex(contact => contact.id === id);
}

function findContact(id, cb) {
  contact = list.find(contact => contact.id === id);  
  cb(contact);
}

function saveData() {
  fs.writeFileSync(contactsPath, JSON.stringify(list));
}

function reset() {
  fs.unlinkSync(contactsPath);
}

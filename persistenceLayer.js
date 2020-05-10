const fs = require('fs');

let list = [];
const contactsPath = './contacts.json';

dataConfirm(); // wtf?


function dataConfirm() {
  if (!fs.existsSync(contactsPath)) {
    fs.writeFileSync(contactsPath, "[]");
  } else {
    list = JSON.parse(fs.readFileSync(contactsPath, 'utf8'));
  };
}

function addContact(name, phone) {
  list.push({ id: list.length, name, phone })
  saveData();
}
function edit(id, name, phone) {
  const index = findContactIndex(id);
  list[index] = {id, name, phone};
  saveData();
}

function deleteContact(id) {
  let index = findContactIndex(id);
  list.splice(index, 1);
  saveData();
};

function findContact(id) {
  return list.find(contact => contact.id === id);
}

function findContactIndex(id) {
  return list.findIndex(contact => contact.id === id);
}

function saveData() {
  fs.writeFileSync(contactsPath, JSON.stringify(list));
}

function reset () {
  fs.unlinkSync(contactsPath);
}

module.exports = {
  dataConfirm,
  addContact,
  edit,
  deleteContact,
  findContact,
  findContactIndex,
  reset,
  list
}
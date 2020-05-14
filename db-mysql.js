const mysql = require('mysql');

let con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'contactsdb'
});

module.exports = {
  addContact,
  edit,
  deleteContact,
  findContact,
  reset,
  printAll
}

function dbConnect() {
  con.connect(function(err) {
    if (err) throw err;
  });
}

function dbDesconnect() {
  con.end();
}

function printAll(cb) {
  dbConnect();
  let sql = "SELECT * FROM contacts";
  con.query(sql, (err, result, fields) => {
    if (err) throw err;
    cb(result);
  })
  dbDesconnect();
}

function addContact(name, phone) {
  let sql = "INSERT INTO contacts ( name, phone ) VALUES( '"+ name + "', '"+ phone +"')";
  dbConnect();
  con.query(sql, (err, result) => {
    if (err) throw err;
    console.log("Contact added!");
  })
  dbDesconnect();
}

function edit(id, name, phone) {
  let sql = "UPDATE contacts SET name= '"+ name +"', phone='" + phone + "' WHERE id='" + id + "'";
  dbConnect();
  con.query(sql, (err, result) => {
    if (err) throw err;
    console.log("Contact edited!");
  })
  dbDesconnect();
}

function deleteContact(id) {
  dbConnect();
  let sql = "DELETE FROM contacts WHERE id='" + id + "'";
  con.query(sql, (err, result) => {
    if (err) throw err;
  })
  dbDesconnect();
  console.log("contact deleted!");
};

function findContact(id, cb) {
  dbConnect();
  let sql = "SELECT * FROM contacts WHERE id='" + id + "'";
  con.query(sql, (err, result, fields) => {
    if (err) throw err;
    cb(result[0]);
  })
  dbDesconnect();  
};

function reset() {
  dbConnect();
  let sql = "TRUNCATE contacts";
  con.query(sql, (err, result) => {
    if (err) throw err;
    list = result;
  })
  dbDesconnect(); 
}

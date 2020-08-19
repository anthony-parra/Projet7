const sql = require("./db.js");

// constructor
const Customer = function(customer) {
  this.email = customer.email
  this.password = customer.password
};

Customer.create = (newCustomer, result) => {
  sql.query("INSERT INTO Inscription SET ?", newCustomer, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created customer: ", { id: res.insertId, ...newCustomer });
    result(null, { id: res.insertId, ...newCustomer });
  });
};

module.exports = Customer;
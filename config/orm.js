const connection = require("./connection");

const orm = {
  selectALL() {
    //SELECT * from burgers
  },
  insertOne() {
    // INSERT into burgers SET values
  },
  updateOne() {
    // Update burgers SETL VALUES WHERE id = targetid
  },
};

module.exports = orm;

const connection = require("./connection");

const orm = {
  selectALL(columns, tableName, cb) {
    //SELECT * from burgers
    //SELECTY columns FROM tableName
    connection.query("SELECT ?? FROM ??",[columns, tableName], (err, results) => {
        if (err) throw err;
        cb(results);
      });
  },
  insertOne(tableName, values, cb) {
    connection.query("INSERT INTO ?? SET ?",[tableName, values], (err, results) => {
        if (err) throw err;
        cb(results);
      });
    // INSERT into tableName SET values
  },
  updateOne(tableName, newValues, targetId, cb) {
    // Update tableName SET VALUES WHERE id = targetid
    connection.query(
      "UPDATE ?? SET ? WHERE id = ?",
      [tableName, newValues, targetId],
      (err, results) => {
        if (err) throw error;
        cb(results);
      }
    );
  },
};

module.exports = orm;

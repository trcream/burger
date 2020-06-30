const orm = require("../config/orm");

const burger = {
  all() {
    orm.selectALL("burgers");
  },
  insert() {
    orm.insertOne("burgers");
  },
  update() {
    orm.updateOne("burgers");
  },
};
module.exports = burger;

const sql = require("./db.js");

// constructor
const Foods = function(food) {
  this.fName = food.fName;
  this.fDescription = food.fDescription;
  this.fPrice = food.fPrice;
};

Foods.create = (newFoods, result) => {
  sql.query("INSERT INTO Food SET ?", newFoods, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created food: ", { id: res.insertId, ...newFoods });
    result(null, { id: res.insertId, ...newFoods });
  });
};

Foods.findById = (foodId, result) => {
  sql.query(`SELECT * FROM Food WHERE id = ${foodId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found food: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Foods with the id
    result({ kind: "not_found" }, null);
  });
};

Foods.getAll = result => {
  sql.query("SELECT * FROM Food", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("Food: ", res);
    result(null, res);
  });
};

Foods.updateById = (id, food, result) => {
  sql.query(
    "UPDATE Food SET fName = ?, fDescription = ?, fPrice = ? WHERE id = ?",
    [food.fName, food.fDescription, food.fPrice, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Foods with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated food: ", { id: id, ...food });
      result(null, { id: id, ...food });
    }
  );
};

Foods.remove = (id, result) => {
  sql.query("DELETE FROM Food WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Foods with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted food with id: ", id);
    result(null, res);
  });
};

Foods.removeAll = result => {
  sql.query("DELETE FROM Food", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} Food`);
    result(null, res);
  });
};

module.exports = Foods;
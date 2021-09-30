module.exports = app => {
    const Food = require("../controllers/food.controller.js");
  
    // Create a new Food
    app.post("/Food", Food.create);
  
    // Retrieve all Food
    app.get("/Food", Food.findAll);
  
    // Retrieve a single Food with customerId
    app.get("/Food/:foodId", Food.findOne);
  
    // Update a Food with foodId
    app.put("/Food/:foodId", Food.update);
  
    // Delete a Food with foodId
    app.delete("/Food/:foodId", Food.delete);
  
    // Create a new Food
    app.delete("/Food", Food.deleteAll);
  };
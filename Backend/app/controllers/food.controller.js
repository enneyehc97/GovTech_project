const Foods = require("../models/food.model.js");

// Create and Save a new Food
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    // Create a Food
    const food = new Foods({
      fName: req.body.fName,
      fDescription: req.body.fDescription,
      fPrice: req.body.fPrice
    });
  
    // Save Food in the database
    Foods.create(food, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Foods."
        });
      else res.send(data);
    });
  };

// Retrieve all Foods from the database.
exports.findAll = (req, res) => {
    Foods.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving food."
        });
      else res.send(data);
    });
  };

// Find a single Food with a customerId
exports.findOne = (req, res) => {
    Foods.findById(req.params.foodId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Foods with id ${req.params.foodId}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving Foods with id " + req.params.foodId
          });
        }
      } else res.send(data);
    });
  };

// Update a Food identified by the foodId in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    Foods.updateById(
      req.params.foodId,
      new Foods(req.body),
      (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Foods with id ${req.params.foodId}.`
            });
          } else {
            res.status(500).send({
              message: "Error updating Foods with id " + req.params.foodId
            });
          }
        } else res.send(data);
      }
    );
  };
// Delete a Food with the specified foodId in the request
exports.delete = (req, res) => {
    Foods.remove(req.params.foodId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Foods with id ${req.params.foodId}.`
          });
        } else {
          res.status(500).send({
            message: "Could not delete Foods with id " + req.params.foodId
          });
        }
      } else res.send({ message: `Foods was deleted successfully!` });
    });
  };

// Delete all Foods from the database.
exports.deleteAll = (req, res) => {
    Foods.removeAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all customers."
        });
      else res.send({ message: `All Foods were deleted successfully!` });
    });
  };
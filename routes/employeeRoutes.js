const express = require("express");
const router = express.Router();

const controller = require("../controllers/employeeController");

// Routes
router.get("/", controller.getAllEmployees);
router.post("/", controller.createEmployee);
router.get("/:id", controller.getEmployeeById);
router.put("/:id", controller.updateEmployee);
router.delete("/:id", controller.deleteEmployee);

module.exports = router;
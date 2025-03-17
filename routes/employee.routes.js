import express from "express";
import { getAllEmployees, getEmployeeByName, getEmployeeById } from "../controllers/employees/read.js";
import { createEmployee, createMultipleEmployees } from "../controllers/employees/create.js";
import searchLogger from "../middlewares/searchLogger.js"; 

const router = express.Router();

// Rutas de lectura GET 
router.get("/", getAllEmployees);
router.get("/name/:name", searchLogger, getEmployeeByName); 
router.get("/:id", getEmployeeById);

// Rutas de creación POST
router.post("/createEmployee", createEmployee);
router.post("/bulk", createMultipleEmployees);

export default router;

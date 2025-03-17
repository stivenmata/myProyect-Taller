import { request } from "express";
import Employee from "../../models/Employee.js";

// Obtener todos los empleados
export const getAllEmployees = async (req, res, next) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (error) {
   next(error);
  }
};

// Obtener empleado por nombre
export const getEmployeeByName = async (req, res, next) => {
  try {
    const employee = await Employee.findOne({ name: req.params.name });
    if (!employee) return res.status(404).json({ message: "Employee not found" });
    res.status(200).json(employee);
  } catch (error) {
    next(error);
  }
};

// Obtener empleado por ID
export const getEmployeeById = async (req, res, next) => {
    try {
      const employee = await Employee.findById(req.params.id);
      if (!employee) return res.status(404).json({ message: "Employee not found" });
      res.status(200).json(employee);
    } catch (error) {
      next(error);
    }
  };
  

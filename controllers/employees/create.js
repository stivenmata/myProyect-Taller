import Employee from "../../models/Employee.js";

const createEmployee = async (req, res, next) => {
  try {
    let employeeInfo = req.body;
    console.log("Creating employee:", employeeInfo);
    
    let createdEmployee = await Employee.create(employeeInfo);

    return res.status(201).json({
      message: "Employee created successfully",
      response: createdEmployee,
    });
  } catch (error) {
    next(error);
  }
};

const createMultipleEmployees = async (req, res, next) => {
  try {
    let employeesInfo = req.body;
    console.log("Creating multiple employees:", employeesInfo);
    
    let createdEmployees = await Employee.insertMany(employeesInfo);

    return res.status(201).json({
      message: "Employees created successfully",
      response: createdEmployees,
    });
  } catch (error) {
    next(error);
  }
};

export { createEmployee, createMultipleEmployees };

import "dotenv/config.js";
import "../../config/database.js";
import Employee from "../../models/Employee.js";

const employees = [
  { name: "Alice Johnson", role: "Manager", salary: 4500, email: "alice.johnson@company.com", phone: 1234567890, active: true },
  { name: "Bob Martinez", role: "Cashier", salary: 2200, email: "bob.martinez@company.com", phone: 9876543210, active: true },
  { name: "Charlie Lee", role: "Salesperson", salary: 2800, email: "charlie.lee@company.com", phone: 5551122334, active: false },
  { name: "David Kim", role: "Technician", salary: 3200, email: "david.kim@company.com", phone: 4445566778, active: true },
  { name: "Emma Brown", role: "Stock Clerk", salary: 2000, email: "emma.brown@company.com", phone: 6667788990, active: false },
  { name: "Frank Harris", role: "Manager", salary: 4600, email: "frank.harris@company.com", phone: 7778889991, active: true },
  { name: "Grace Wilson", role: "Cashier", salary: 2100, email: "grace.wilson@company.com", phone: 8889990002, active: true },
  { name: "Henry Adams", role: "Salesperson", salary: 2900, email: "henry.adams@company.com", phone: 9990001113, active: true },
  { name: "Ivy Thompson", role: "Technician", salary: 3300, email: "ivy.thompson@company.com", phone: 1112223334, active: false },
  { name: "Jack White", role: "Stock Clerk", salary: 2100, email: "jack.white@company.com", phone: 2223334445, active: true },
  { name: "Karen Scott", role: "Manager", salary: 4700, email: "karen.scott@company.com", phone: 3334445556, active: true },
  { name: "Liam Cooper", role: "Cashier", salary: 2300, email: "liam.cooper@company.com", phone: 4445556667, active: false },
  { name: "Mia Perez", role: "Salesperson", salary: 3000, email: "mia.perez@company.com", phone: 5556667778, active: true },
  { name: "Noah Evans", role: "Technician", salary: 3400, email: "noah.evans@company.com", phone: 6667778889, active: false },
  { name: "Olivia Murphy", role: "Stock Clerk", salary: 2200, email: "olivia.murphy@company.com", phone: 7778889990, active: true }
];

Employee.insertMany(employees)
  .then(() => {
    console.log("Employees inserted successfully!");
    process.exit();
  })
  .catch((error) => {
    console.error("Error inserting employees:", error);
    process.exit(1);
  });

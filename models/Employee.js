import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  salary: { type: Number, required: true },
  email: { type: String, required: true },
  phone: { type: Number, required: true },
  active: { type: Boolean, default: true }
});

const Employee = mongoose.model("Employee", employeeSchema);
export default Employee;

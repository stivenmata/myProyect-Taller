import mongoose from "mongoose";

const storeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: Number, required: true },
  schedule: { type: String, default: "Monday to Friday 9:00 AM - 6:00 PM" },
  active: { type: Boolean, default: true }
});

const Store = mongoose.model("Store", storeSchema);
export default Store;

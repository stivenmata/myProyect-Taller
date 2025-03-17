import "dotenv/config.js";
import "../../config/database.js";
import Store from "../Store.js";

const stores = [
  { name: "TechZone", address: "123 Main St", phone: 1234567890, schedule: "Monday to Friday 9:00 AM - 6:00 PM", active: true },
  { name: "GadgetWorld", address: "456 Market St", phone: 9876543210, schedule: "Monday to Saturday 10:00 AM - 8:00 PM", active: true },
  { name: "SuperStore", address: "789 Mall Rd", phone: 5551234567, schedule: "Everyday 8:00 AM - 10:00 PM", active: false },
  { name: "MegaElectronics", address: "111 Tech Ave", phone: 6667778888, schedule: "Monday to Sunday 9:00 AM - 9:00 PM", active: true },
  { name: "FutureShop", address: "222 Future St", phone: 3334445555, schedule: "Monday to Friday 10:00 AM - 6:00 PM", active: false }
];

Store.insertMany(stores)
  .then(() => {
    console.log("Stores inserted successfully!");
    process.exit();
  })
  .catch((error) => {
    console.error("Error inserting stores:", error);
    process.exit(1);
  });

import express from "express";
import storeRoutes from "./store.routes.js";
import productRoutes from "./product.routes.js";
import employeeRoutes from "./employee.routes.js";
import searchRoutes from "./search.routes.js";

const router = express.Router();

router.use("/stores", storeRoutes);
router.use("/products", productRoutes);
router.use("/employees", employeeRoutes);
router.use("/search", searchRoutes);

export default router;

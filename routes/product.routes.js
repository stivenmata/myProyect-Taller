import express from "express";
import { getAllProducts, getProductByName, getProductsByCategory } from "../controllers/products/read.js";
import { createProduct, createMultipleProducts } from "../controllers/products/create.js";
import searchLogger from "../middlewares/searchLogger.js"; 

const router = express.Router();

// Rutas de lectura GET 
router.get("/", getAllProducts);
router.get("/name/:name", searchLogger, getProductByName); 
router.get("/category/:category", searchLogger, getProductsByCategory);

// Rutas de creación POST
router.post("/createProduct", createProduct);
router.post("/bulk", createMultipleProducts);

export default router;

import express from "express";
import { getAllStores, getStoreByName, getStoreByAddress } from "../controllers/stores/read.js";
import { create, createMultipleStores } from "../controllers/stores/create.js";
import searchLogger from "../middlewares/searchLogger.js";  

const router = express.Router();

// Rutas de lectura GET 
router.get("/", getAllStores);
router.get("/name/:name", searchLogger, getStoreByName);  
router.get("/address/:address", searchLogger, getStoreByAddress);

// Rutas de creación POST
router.post("/storeCreate", create);
router.post("/bulk", createMultipleStores);

export default router;

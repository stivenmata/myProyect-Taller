import express from "express";
import { getSearchHistory } from "../controllers/search/read.js";
import { clearSearchHistory } from "../controllers/search/delete.js";

const router = express.Router();

router.get("/", getSearchHistory); 
router.delete("/", clearSearchHistory); 

export default router;

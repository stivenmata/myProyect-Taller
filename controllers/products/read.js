import { request } from "express";
import Product from "../../models/Product.js";

// Obtener todos los productos
export const getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};

// Obtener producto por nombre
export const getProductByName = async (req, res, next) => {
  try {
    const product = await Product.findOne({ name: req.params.name });
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};

// Obtener productos por categoria
export const getProductsByCategory = async (req, res, next) => {
  try {
    const products = await Product.find({ category: req.params.category });
    
    if (!products.length) return res.status(404).json({ message: "No products found in this category" });

    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};

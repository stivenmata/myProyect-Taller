import { request } from "express";
import Store from "../../models/Store.js";

// Obtener todas las tiendas
export const getAllStores = async (req, res, next) => {
  try {
    const stores = await Store.find();
    res.status(200).json(stores);
  } catch (error) {
    next(error);
  }
};

// Obtener una tienda por nombre
export const getStoreByName = async (req, res, next) => {
  try {
    const store = await Store.findOne({ name: req.params.name });
    if (!store) return res.status(404).json({ message: "Store not found" });
    res.status(200).json(store);
  } catch (error) {
    next(error);
  }
};

// Obtener una tienda por dirección
export const getStoreByAddress = async (req, res, next) => {
  try {
    const store = await Store.findOne({ address: req.params.address });
    if (!store) return res.status(404).json({ message: "Store not found" });
    res.status(200).json(store);
  } catch (error) {
    next(error);
  }
};

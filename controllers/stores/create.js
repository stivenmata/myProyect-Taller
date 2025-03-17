import Store from "../../models/Store.js";

const create = async (req, res, next) => {
    try {
      let storeInfo = req.body;
      console.log("Creating store:", storeInfo);
      let createStore = await Store.create(storeInfo);
      return res.status(201).json({
        message: "Store created successfully",
        response: createStore,
    });
    } catch (error) {
        next(error);
    }

};


  const createMultipleStores = async (req, res, next) => {
    try {
        let storesInfo = req.body;
        console.log("Creating multiple stores:", storesInfo);
        let createdStores = await Store.insertMany(storesInfo);
        return res.status(201).json({
        message: "Stores created successfully",
        response: createdStores,
    });
    } catch (error) {
        next(error);
    }
  };

export { create, createMultipleStores };

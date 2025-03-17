import Product from "../../models/Product.js";

const createProduct = async (req, res, next) => {
  try {
    let productInfo = req.body;
    console.log("Creating product:", productInfo);
    
    let createdProduct = await Product.create(productInfo);

    return res.status(201).json({
      message: "Product created successfully",
      response: createdProduct,
    });
  } catch (error) {
    next(error);
  }
};

const createMultipleProducts = async (req, res, next) => {
  try {
    let productsInfo = req.body;
    console.log("Creating multiple products:", productsInfo);
    
    let createdProducts = await Product.insertMany(productsInfo);

    return res.status(201).json({
      message: "Products created successfully",
      response: createdProducts,
    });
  } catch (error) {
    next(error);
  }
};

export { createProduct, createMultipleProducts };

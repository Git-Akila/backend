
const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

//Add a new Product

router.post("/", async (req, res) => {
  const { name, description, price, imageUrl } = req.body;

  try {
    const newProduct = new Product({ name, description, price, imageUrl });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(500).json({ message: "Error adding product" });
  }
});

router.get("/all-products", async (req, res) => {
  try {
    const product = await Product.find();
    console.log(product)
    if (!product) {
        return res.status(404).json({ message: "Product not found" });    
}
  return  res.json(product);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

//Get product by ID
router.get("/all-products/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) 
        {
            return res.status(404).json({ message: "Product not found" });
        }
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: "Error fetching product" });
  }
});

module.exports = router;

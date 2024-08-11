const ProductData = require('../Models/ProductModel'); // Adjust the path to your Product model

exports.addProduct = async (req, res) => {
    const { Product_name, Type, Quantity, PricePerKG, OwnerID } = req.body;
    try {
        // Create a new product instance with the provided data
        const newProduct = new ProductData({
            Product_name,
            Type,
            Quantity,
            PricePerKG,
            OwnerID
        });

        // Save the product to the database
        await newProduct.save();

        // Respond with success message and product details
        res.status(201).json({ message: 'Product added successfully', product: newProduct });
    } catch (err) {
        // Handle errors and respond with error message
        res.status(500).json({ message: 'Error adding product', error: err.message });
    }
};

exports.getProductByID = async (req, res) => {
    const { OwnerID } = req.body;
    try {
        const Product = await ProductData.findOne({"OwnerID" : OwnerID });
        if (!Product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(Product);
    } catch (err) {
        res.status(500).json({ message: 'Error retrieving Product', error: err.message });
    }
};
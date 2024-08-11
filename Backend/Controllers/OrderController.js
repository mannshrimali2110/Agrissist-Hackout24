const OrderData = require('../Models/OrderModel'); // Adjust the path to your Order model

// Function to insert an order
exports.addOrder = async (req, res) => {
    const { BuyerID, SellerID, ProductID,TotalPrice } = req.body;

    try {
        // Create a new order instance with the provided data
        const newOrder = new OrderData({
            BuyerID,
            SellerID,
            ProductID,
            TotalPrice,
            // OrderStatus and OrderDate will automatically be set to their default values
        });

        // Save the order to the database
        await newOrder.save();

        // Respond with success message and order details
        res.status(201).json({ message: 'Order placed successfully', order: newOrder });
    } catch (err) {
        // Handle errors and respond with error message
        res.status(500).json({ message: 'Error placing order', error: err.message });
    }
};

exports.getOrderByID = async (req, res) => {
    const { BuyerID } = req.body;
    try {
        const Order = await OrderData.findOne({ "BuyerID": BuyerID });
        if (!Order) {
            return res.status(404).json({ message: 'Order not found' });
        }
        res.status(200).json(Order);
    } catch (err) {
        res.status(500).json({ message: 'Error retrieving Order', error: err.message });
    }
};
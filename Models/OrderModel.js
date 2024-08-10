const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    "BuyerID": {
        type: String,
        ref: 'Users',
        required: true
    },
    "SellerID": {
        type: String,
        ref: 'Users',
        required: true
    },
    "ProductID": {
        type: String,
        ref: 'Products',
        required: true
    },
    "TotalPrice": {
        type: Number,
        required: true
    },
    "OrderStatus": {
        type: String,
        default: 'Pending' // Set a default value for OrderStatus
    },
    "OrderDate": {
        type: Date,
        default: Date.now // Automatically set the current date and time
    }
});


const OrderData = mongoose.model('Orders', OrderSchema);
module.exports = OrderData;

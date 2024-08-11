const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    "_ID": {
        type: String,
        ref: 'Users',
    },
    "Product_name": {
        type: String,
        required: true
    },
    "Type": {
        type: String,
        required: true
    },
    "PricePerKG": {
        type: Number,
        required: true
    },
    "Quantity": {
        type: Number,
        required: true
    },
    "OwnerID": {
        type: String, // Should match the type of _ID in UserSchema
        ref: 'Users', // Reference to the User model
        required: true
    }
});

// Pre-save hook to set the ID starting from "001"
ProductSchema.pre('save', async function (next) {
    if (this.isNew) {
        // Incremental ID logic
        const lastProduct = await this.constructor.findOne().sort({ _ID: -1 });
        if (lastProduct) {
            const lastID = parseInt(lastProduct._ID, 10);
            this._ID = String(lastID + 1).padStart(3, '0'); // Increment and pad with zeros
        } else {
            this._ID = "001"; // Start with "001" if no Products exist
        }
    }
    next();
});

const ProductData = mongoose.model('Products', ProductSchema);
module.exports = ProductData;

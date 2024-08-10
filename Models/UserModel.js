const mongoose = require('mongoose');
const bcrypt = require('bcrypt'); // Make sure to install this package

const UserSchema = new mongoose.Schema({
    "_ID": {
        type: String,
        unique: true
    },
    "name": {
        type: String,
        required: true
    },
    "email": {
        type: String,
        required: true,
        unique: true // Ensure email uniqueness
    },
    "Password": {
        type: String,
        required: true
    },
    "Type": {
        type: String,
        required: true
    },
    "Location": {
        District: {
            type: String,
            required: true
        },
        City: {
            type: String,
            required: true
        },
        Pincode: {
            type: String,
            required: true
        }
    }
});

// Pre-save hook to hash the password and set the ID starting from "001"
UserSchema.pre('save', async function (next) {
    if (this.isNew) {
        // Incremental ID logic
        const lastUser = await this.constructor.findOne().sort({ _ID: -1 });
        if (lastUser) {
            const lastID = parseInt(lastUser._ID, 10);
            this._ID = String(lastID + 1).padStart(3, '0'); // Increment and pad with zeros
        } else {
            this._ID = "001"; // Start with "001" if no users exist
        }
    }
    next();
});

const UserData = mongoose.model('Users', UserSchema);
module.exports = UserData;

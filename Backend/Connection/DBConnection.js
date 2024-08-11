const mongoose = require('mongoose');

const DB_CON = async () => {
    try {
        await mongoose.connect(process.env.mongoURL);
        console.log('MongoDB connected Successfully');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
    }
};

module.exports = DB_CON;

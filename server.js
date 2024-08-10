const express = require('express');
const cors = require('cors');
const DB_Connection = require('./Connection/DBConnection');
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const UserRoutes = require('./Routes/UserRoutes');
const ProductRoutes = require('./Routes/ProductRoutes');
const OrderRoutes = require('./Routes/OrderRoutes');

const app = express();
DB_Connection();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(UserRoutes);
app.use(ProductRoutes);
app.use(OrderRoutes);

app.get('/', (req, res) => {
    res.send('Server is running');
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
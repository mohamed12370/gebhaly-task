const express = require('express');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');
dotenv.config({ path: 'config.env' });
app.use(express.json());
app.use(cors());

const productRoute = require('./routes/products');
app.use('/api/product', productRoute);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`server running on port: ${port}`);
});

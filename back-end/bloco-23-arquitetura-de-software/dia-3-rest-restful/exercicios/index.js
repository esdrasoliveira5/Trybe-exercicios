const express = require('express');
const bodyParser = require('body-parser');

const productController = require('./controllers/productController');

const app = express();
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/products', productController.getAll);

app.get('/products/:id', productController.getById);

app.post('/products', productController.createProduct);

app.delete('/products/:id', productController.deleteProduct);

app.put('/products/:id', productController.updateProduct);

app.listen(3000, () => {
  console.log("App listening on port 3000!");
});


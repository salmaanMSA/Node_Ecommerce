const express = require('express');
const productController = require('../controllers/productController');

const router = express.Router();


router.post('/create', productController.createProduct); // route for creating a new product
router.get('/', productController.viewProducts); // route for listing all products
router.delete('/:id', productController.deleteProduct); // route for deleting a product using id


module.exports = router;
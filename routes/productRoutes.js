const express = require('express');
const productController = require('../controllers/productController');

const router = express.Router();


router.post('/create', productController.createProduct); // route for creating a new product
router.get('/', productController.viewProducts); // route for listing all products
router.delete('/:id', productController.deleteProduct); // route for deleting a product using id
router.post('/:id/update_quantity', productController.updateProduct); // route for updating product

module.exports = router;
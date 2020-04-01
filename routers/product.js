//importing library
const express = require('express');
const router = express.Router();

const productController = require('../controllers/productController');

router.post('/create/', productController.create);
router.get('/', productController.allProducts);
router.delete('/:id', productController.delete);
router.post("/:id/update_quantity/", productController.update);

//exporting module
module.exports = router;

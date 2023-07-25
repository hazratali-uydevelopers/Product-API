const express = require('express');
const router = express.Router();

const {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    replaceProduct,
    deleteProduct
} = require('./controller')

router.post('/', createProduct);

router.get('/', getAllProducts);

router.get('/:id', getProductById);

router.patch('/:id', updateProduct);

router.put('/:id', replaceProduct);

router.delete('/:id', deleteProduct);

module.exports = router;
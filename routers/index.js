//importing library
const express = require('express');
const router = express.Router();
const product = require('./product');

router.use('/products/', product);

router.get('/*', (req, res)=>{
    res.send({
        status : 404,
        message: "Bad request!"
    });
});

//exporting module
module.exports = router;
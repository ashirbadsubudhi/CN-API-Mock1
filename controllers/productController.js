// importing required libraries.
const Product = require('../models/products_model');

//create module
module.exports.create = async function(req, res){
    try{
        let product = await Product.create(req.body);
        return res.json(200,{
            data: product
        });
    }
    catch(err){
        return res.json(500,{
            message: "Some error occured!!"
        });
    }
}

//findall module
module.exports.allProducts = async function(req, res){
    try{
        let products = await Product.find({});
        return res.json(200,{
            data: products
        });
    }
    catch(err){
        return res.json(400,{
            message: "DB error!!"
        });
    }
}

//delete module
module.exports.delete = async function(req, res){
    try{
        let product = await Product.findByIdAndDelete(req.params.id);
        return res.json(200, {
            data: {
                message: "product deleted"
            }
        });
    }
    catch(err){
        return res.json(400,{
            message: "DB error!!"
        });
    }
}

//update module
module.exports.update = async function(req, res){
    try {
        let id = req.params.id;
        let number = req.query.number;
        let product = await Product.findById(id);
        if (number >= 0) {
          product.quantity = number;
          product.save();
        }
        return res.json(200, {
          data: {
            product: product,
            message: "updated successfully"
          }
        });
    } 
    catch(err){
        return res.json(400,{
                message: "DB error!!"
        });
    }
}

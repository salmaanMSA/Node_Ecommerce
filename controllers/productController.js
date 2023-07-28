const Product = require('../models/productModel');

// Logic for creating new product
module.exports.createProduct = async function(req, res){
    try{
        let product = await Product.findOne({name: req.body.name});
        // check if the product already exists in db
        if (product){
            return res.json(500, {
                message: `Product ${req.body.name} already exists` // throw error msg
            });
        }
        else{
            // create new product
            await Product.create({
                name: req.body.name,
                quantity: req.body.quantity
            });
            // return response construct
            res.json(201, {
                message: "Product Added Successfully",
                data: {
                    product:{
                        name: req.body.name,
                        quantity: req.body.quantity
                    }
                }
            })
        }
    }
    catch(err){
        return res.json(500, {
            message: `Internal Server Error\n Error: ${err}`
        });
    }
}

// Log
module.exports.viewProducts = async function(req, res){
    try{
        let products = await Product.find({});
        return res.json(200, {
            message: "List of Product",
            data: {
                products: products
            }
        });
    }
    catch(err){
        return res.json(500, {
            message: `Internal Server Error \n Error: ${err}`,

        })
    }
}
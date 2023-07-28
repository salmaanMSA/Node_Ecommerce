const Product = require('../models/productModel');

// Logic for creating new product
module.exports.createProduct = async function(req, res){
    try{
        console.log(req.body)
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

// Logic for viewing all products
module.exports.viewProducts = async function(req, res){
    try{
        let products = await Product.find({}); // fetch all products
        return res.json(200, {
            message: "List of Products",
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

// Logic for Deleting a product using id
module.exports.deleteProduct = async function(req, res){
    try{
        let product = await Product.deleteOne({_id: req.params.id}); // delete product with id
        if (product){
            return res.json(200, {
                message: "Selected Product deleted successfully"
            });
        }
        else{
            return res.json(404, {
                message: "Product with id not found"
            });
        }
    }
    catch(err){
        return res.json(500, {
            message: `Internal Server Error \n Error: ${err}`
        });
    }
}

// Logic for updating product quantity
module.exports.updateProduct = async function(req, res){
    try{
        let product = await Product.findById(req.params.id);
        if (product){
            product.quantity = Number(product.quantity) + Number(req.query.number)
            product.save();
            return res.json(200, {
                message: "Product details Updated Successfully",
                data: {
                    id: product._id,
                    name: product.name,
                    quantity: product.quantity
                }
            });
        }
        else{
            return res.json(404, {
                message: "Product doesn't exists"
            });
        }
    }
    catch(err){
        return res.json(500, {
            message: `Internal Server Error \n Error: ${err}`
        });
    }
}
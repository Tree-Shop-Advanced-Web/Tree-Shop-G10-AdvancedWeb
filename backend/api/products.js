var expressFunction = require('express')
const router = expressFunction.Router()
const authorization = require('../config/authorize')
const mongoose = require('mongoose')

var Schema = require("mongoose").Schema
const productSchema = Schema({
    type:String,    
    id:String,
    name:String,
    detail:String,
    quantity:Number,
    price:Number,
    img:String

},{
    coolection:'products'
})
let Product
try{
    Product=mongoose.model('products')
}catch(error){
    Product=mongoose.model('products',productSchema)
}

const insertProduct = (dataProduct)=>{
    return new Promise((resolve, reject) => {
        var new_product = new Product(
            dataProduct
        )
        new_product.save((err,data)=>{
            if(err){
                reject(new Error('Cannot insert product to DB!!!'))
            }else{
                resolve({message:'Product added successfully'})
            }
        })
    })
}

router.route('/add').post((req,res)=>{
    console.log('add');
    insertProduct(req.body).then(result =>{
        console.log(result);
        res.status(200).json(result)
    }).catch(err=>{
        console.log(err);
    })
})

module.exports = router
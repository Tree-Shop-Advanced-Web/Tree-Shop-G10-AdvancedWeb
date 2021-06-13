var expressFunction = require('express')
const router = expressFunction.Router()
const authorization = require('../config/authorize')
const mongoose = require('mongoose')

var Schema = require("mongoose").Schema
const productSchema = Schema({
    name: String,
    price: Number,
    detail: String,
    quantity: Number,
    type: String
})
const cartSchema = Schema({
    userId: String,
    product: [productSchema],
}, {
    coolection: 'cart'
})
let Cart
try {
    Cart = mongoose.model('cart')
} catch (error) {
    Cart = mongoose.model('cart', cartSchema)
}
const insertCart = (dataCart) => {
    return new Promise((resolve, reject) => {
        var new_cart = new Cart(
            dataCart
        )
        new_cart.save((err, data) => {
            if (err) {
                reject(new Error('Cannot insert cart to DB!!!'))
            } else {
                resolve({ message: 'Cart added successfully' })
            }
        })
    })
}
const pushCart = (cartData,id) => {
    console.log("this " + id);
    return new Promise((resolve, reject) => {
        Cart.updateOne({ userId: id }, { $push: { product: cartData.product } }, (err, data) => {
            if (err) {
                reject(new Error('Cannot push data cart to DB!!!'))
            } else {
                resolve({ message: 'Cart push successfully' }, data)
            }
        })
    })
}

const getCartById = (id) => {
    return new Promise((resolve, reject) => {
        Cart.find({ userId: id }, (err, data) => {
            if (err) {
                reject(new Error('Cannot delete order !!!'))
            } else {
                if (data) {
                    resolve(data)
                } else {
                    reject(new Error('Cannot delete order !!!'))
                }
            }
        })
    })
}

const delteProductInCart = (userid,productid) =>{
    console.log();
    return new  Promise((resolve, reject)=>{
        Cart.updateOne({ userId: userid} ,{ $pull: { 'product': { '_id': ''+productid+'' } } } ,(err,data)=>{
            if(err){
                reject(new Error('Cannot Delete product !!!'))
            }else{
               if(data){
                   resolve(data)
               }else{
                reject(new Error('Cannot Delete product !!!'))
               }
            }
        })
    })
}

router.route('/delete').post((req, res) => {
    console.log(req.body);
    delteProductInCart(req.body.userId,req.body.productId).then(result =>{
        console.log(result);
        res.status(200).json(result)
    }).catch(err=>{
        console.log(err);
    })
})

router.route('/add/:id').get((req, res) => {
    console.log(req.params.id);
    const playload = {
        userId: req.params.id
    }
    insertCart(playload).then(result => {
        console.log(result);
        res.status(200).json(result)
    }).catch(err => {
        console.log(err);
    })
})

router.route('/put').put(authorization,(req, res) => {
        let playload = {
            product: {
                name: req.body.product.name,
                price: req.body.product.price,
                detail: req.body.product.detail,
                quantity: req.body.product.quantity,
                type: req.body.product.type
            }
        }
        console.log(playload);
        pushCart(playload,req.body.userId).then(result => {
            console.log(result);
            res.status(200).json(result)
        }).catch(err => {
            console.log(err);
        })

})


router.route('/get/:id').get(authorization,(req, res) => {
    console.log(req.params.id);
    getCartById(req.params.id).then(result => {
        console.log(result);
        res.status(200).json(result)
    }).catch(err => {
        console.log(err);
    })
})



module.exports = router
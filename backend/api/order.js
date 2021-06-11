var expressFunction = require('express')
const router = expressFunction.Router()
//const authorization = require('../config/authorize')
const mongoose = require('mongoose')

var Schema = require("mongoose").Schema
const orderSchema = Schema({
    userid:String,
    detail:String,
    price:Number,
    img:String,
    status:String,
},{
    coolection:'orders'
})
let Orders
try{
    Orders=mongoose.model('orders')
}catch(error){
    Orders=mongoose.model('orders',orderSchema)
}
mongoose.set('useFindAndModify', false);

const getOrders = () =>{
    return new  Promise((resolve, reject)=>{
        Orders.find({},(err,data)=>{
            if(err){
                reject(new Error('Cannot get order !!!'))
            }else{
               if(data){
                   resolve(data)
               }else{
                reject(new Error('Cannot get order !!!'))
               }
            }
        })
    })
}
const getOrdersById = (id) =>{
    return new  Promise((resolve, reject)=>{
        Orders.find({userid:id},(err,data)=>{
            if(err){
                reject(new Error('Cannot get order !!!'))
            }else{
               if(data){
                   resolve(data)
               }else{
                reject(new Error('Cannot get order !!!'))
               }
            }
        })
    })
}

const pushOderById = (orderData) =>{
    console.log(orderData);
    return new  Promise((resolve, reject)=>{
        Orders.findOneAndUpdate({_id:orderData._id},{ img:orderData.img , status:orderData.status},(err,data)=>{
            if(err){
                reject(new Error('Cannot get products !!!'))
            }else{
               if(data){
                   resolve(data)
               }else{
                reject(new Error('Cannot get products !!!'))
               }
            }
        })
    })
}
const insertOder = (dataOrder) =>{
    return new Promise((resolve, reject) => {
        var new_product = new Orders(
            dataOrder
        )
        new_product.save((err,data)=>{
            if(err){
                reject(new Error('Cannot insert order to DB!!!'))
            }else{
                resolve({message:'Order added successfully'})
            }
        })
    })
}
router.route('/get/:id').get((req,res)=>{
    getOrdersById(req.params.id).then(result =>{
        console.log(result);
        res.status(200).json(result)
    }).catch(err=>{
        console.log(err);
    }) 
})
router.route('/get').get((req,res)=>{
    getOrders(req.body).then(result =>{
        console.log(result);
        res.status(200).json(result)
    }).catch(err=>{
        console.log(err);
    }) 
})
router.route('/post').post((req,res)=>{
    console.log('add');
    insertOder(req.body).then(result =>{
        console.log(result);
        res.status(200).json(result)
    }).catch(err=>{
        console.log(err);
    })
})
router.route('/put').put((req,res)=>{
    console.log(req.body);
    console.log("put");
    pushOderById(req.body).then(result =>{
        console.log(result);
        res.status(200).json(result)
    }).catch(err=>{
        console.log(err);
    })
})

module.exports = router
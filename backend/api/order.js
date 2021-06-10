var expressFunction = require('express')
const router = expressFunction.Router()
//const authorization = require('../config/authorize')
const mongoose = require('mongoose')

var Schema = require("mongoose").Schema
const orderSchema = Schema({
    id:String,
    detail:String,
    price:Number,
    img:String,
    status:String,
    statusbutton:Boolean,
},{
    coolection:'orders'
})
let Orders
try{
    Orders=mongoose.model('orders')
}catch(error){
    Orders=mongoose.model('orders',orderSchema)
}


const getOrders = () =>{
    return new  Promise((resolve, reject)=>{
        Orders.find({},(err,data)=>{
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
const getOrdersById = (id) =>{
    return new  Promise((resolve, reject)=>{
        Orders.find({id:id},(err,data)=>{
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

const pushOderById = (order) =>{
    return new  Promise((resolve, reject)=>{
        Orders.findOneAndUpdate({id:order.id},{ $push: {  } },(err,data)=>{
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
const insertOder = (order) =>{
    return new Promise ((resolve , reject)=>{
        var new_order = new Orders({
            order
        })
        new_order.save((err,data)=>{
            if(err){
                reject(new Error('Cannot insert product to DB!'))
            }
            else{
                resolve({message:'Sing up successfully'})
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
router.route('/post').get((req,res)=>{
    insertOder(req.body).then(result=>{
        console.log(result);
        res.status(200).json(result)
    }).catch(err=>{
        console.log(err);
    })
})
router.route('/put').get((req,res)=>{
    
})

module.exports = router
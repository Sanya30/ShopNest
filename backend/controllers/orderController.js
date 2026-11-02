const Orders = require('../model/order.js'); 
const sendEmail = require('../utils/sendEmail.js'); 

const CreateOrder = async (req,res)=>{
    try{
    const {items, totalAmount, address, paymentId } = req.body; 
    if(!items || items.length===0 || !totalAmount || !address)
    {
        return res.status(400).json("Invalid order data"); 
    }
    else{
    const order = new Orders({
        user : req.user._id, 
        items,
        totalAmount,
        address,
        paymentId
    }); 
    await order.save(); 
    const message = `Dear ${req.user.name},\n\nThank you for your order! Your order has been successfully created with the following details:\n\nOrder ID: ${order._id}\nTotal Amount: $${totalAmount}\nShipping Address: ${address}\n\nWe will notify you once your order is shipped.\n\nBest regards,\nShopNest Team`;

    await sendEmail(req.user.email, 'Order created', message); 
    return res.status(201).json({message : 'Order has been confirmed', order}); 
    }
    }
    catch(error){
    console.error('Order creation failed:', error);

    return res.status(500).json({message: 'Order creation failed'});
    }
}

const myOrders = async(req,res) =>{
    try{
    const orders = await Orders.findOne({user : req.user._id}).populate('items','paymentId','name price'); 
    res.json(orders); 
    }
    catch{
        res.status(400).json({message : 'Error fetching orders', error}); 
    }

};

const getOrders = async(req,res)=>{
    try{
    const orders = await Orders.find({}).populate('user', 'id name'); 
    res.json(orders); 
    }
    catch(error){
        res.status(400).json({message : "ADMIN - Can't get orders", error}); 
    }
}; 

const updateOrderStatus = async(req,res) =>{
    const {status} = req.body; 
    const order = await Orders.findById(req.params.id);

try {
    if(order)
    {
        order.status = status;
        await order.save(); 
        res.json({message : "Order status updated", order});
    }
    else{
        res.status(404).json({message : "Order not found"}); 
    }
}
catch{
    res.status(500).json({message : "Order Status updation failed", error});
}}; 


module.exports = {CreateOrder, myOrders, getOrders, updateOrderStatus}; 





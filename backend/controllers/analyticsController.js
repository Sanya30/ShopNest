const Orders = require("../model/order.js"); 
const Products = require("../model/product.js"); 
const Users = require("../model/User.js"); 

const getAdminStats = async(req,res)=>{
    try{
    const totalUsers = await Users.countDocuments({role : 'user'}); 
    const totalProducts = await Products.countDocuments({}); 
    const totalOrders = await Orders.countDocuments({}); 

    const orders = await Orders.find({}); 
    const totalRevenueData = orders.reduce((acc, order) =>  acc+order.totalAmount,0); 

    return res.status(200).json({
        totalUsers,
        totalProducts, 
        totalOrders, 
        totalRevenue : totalRevenueData
    }); 
   }
   catch(error){
    console.error(error);
    return res.status(500).json({message : "Server error"}); 
   }
}

module.exports = {getAdminStats}; 


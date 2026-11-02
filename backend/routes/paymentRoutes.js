const express =require('express'); 
const {CreatedOrder, VerifyPayment} = require("../controllers/paymentController"); 
const router = express.Router(); 

router.route('/order').post(CreatedOrder);
router.route('/verify').post(VerifyPayment); 

module.exports = router; 

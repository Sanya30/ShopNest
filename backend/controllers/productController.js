const Products = require('../model/product.js'); 
const cloudinary = require('../config/cloudinary.js'); 


const getProducts = async(req,res)=>{

    try{
        const products = await Products.find({});
        res.json(products); 
    }
    catch{
        res.status(400).json('Server error occured'); 
    }
};

const getProductById = async(req,res)=>{
    try{
        const product =await Products.findById(req.params.id); 
        if(product)
        {
            res.json(product); 
        }
        else
        {
            res.status(404).json({message : 'Product not found'}); 
        }

    }
    catch {
        res.status(500).json({message : 'Server error'}); 
    }
}; 

const createProduct = async(req,res)=>{
    try{
        const {name, description, price, category, stock} = req.body; 
        let imageUrl = ''; 
        console.log(req.file);

        if(req.file)
        {
            const result = await cloudinary.uploader.upload(req.file.path);
            console.log(result); 
            imageUrl = result.secure_url; 
        }
        if(!imageUrl)
        {
            res.json({message : "product image required"}); 
        }

        const product = await Products.create({name, description, price, category, stock, imageUrl}); 
        res.status(201).json(product); 
    }
    catch(error) {
        console.error("Product creation error", error); 
        res.status(500).json({message : 'Server Error'}); 
    }
}; 

const updateProduct = async(req,res)=>{
try{
    const {name, description, price, category, stock} = req.body; 
    const product = await Products.findById(req.params.id); 

    if(product){
        product.name = name || product.name; 
        product.description = description || product.description;
        product.price = price || product.price;
        product.category = category || product.category; 
        product.stock = stock || product.stock;

        if(req.imageUrl)
        {
            const result = await cloudinary.uploader.upload(req.file.path); 
            console.log(result); 
            product.imageUrl = result.secure_url; 
        }
        const updatedProduct = await product.save(); 
        res.json(updatedProduct); 
    }
    else{
        res.status(404).json("Product not found");
    }
}
catch(error){
    res.status(500).json({message : 'Server error'}); 
}}; 

const deleteProduct = async(req,res)=>{
    try{
        const product = await Products.findById(req.params.id); 
        if(product)
        {
            await product.deleteOne(); 
            res.json({message : 'Product removed'}); 
        }
        else{
            res.status(404).json({message : 'Product not found'}); 
        }}
    catch(error){
        res.status(500).json({message : 'Server error'}); 
    }
};


module.exports = {getProducts, getProductById, createProduct, updateProduct, deleteProduct}; 

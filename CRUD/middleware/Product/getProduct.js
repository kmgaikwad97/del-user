const express = require('express');
const productData = require('../../models/product')

const getProduct = async(req,res)=>{
    try{
        const getUser = await productData.find({})
        res.send(getUser);
    }
    catch(err){
        res.status(400).send(err)
    }
}

module.exports = { getProduct }


const express = require('express');
const transaction = require('../../models/transaction')

const getTrans = async(req,res)=>{
    try{
        const getUser = await transaction.find({})
        res.send(getUser);
    }
    catch(err){
        res.status(400).send(err)
    }
}

module.exports = { getTrans }


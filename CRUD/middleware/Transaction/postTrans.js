const express = require('express');
const transaction = require('../Transaction/getTrans')

const postTrans = async(req,res)=>{
    try{
        const addUser = new transaction(req.body)
        console.log("data",req.body);
        const inserUser = await addUser.save({});
        res.status(201).send(inserUser)
    }
    catch(err){
        res.status(409).send(err)
        console.log("Email already exist");
    }
}

module.exports = { postTrans }


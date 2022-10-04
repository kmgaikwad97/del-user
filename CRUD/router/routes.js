// require express 
const express = require("express");
// express router
const router = new express.Router();

// functions for User
const getUser = require("../middleware/User/getUser");
const postUser = require("../middleware/User/postUser");
const getParticularUser = require("../middleware/User/getParticularUser");
const updateUser = require("../middleware/User/updateUser");
const deleteUser = require("../middleware/User/deleteUser");

//functions for Product
const getProduct = require("../middleware/Product/getProduct");
const postProduct = require("../middleware/Product/postProduct");

// functions for Transaction
const getUser = require("../middleware/getUser");
const postUser = require("../middleware/postUser");
const { getTrans } = require("../middleware/Transaction/getTrans");
const { postTrans } = require("../middleware/Transaction/postTrans");


// routes for User 
router.get("/user", getUser.getUser);
router.get("/user/:id", getParticularUser.getParticularUser);
router.post("/user", postUser.postUser);
router.patch("/:id", updateUser.updateUser);
router.delete("/:id", deleteUser.deleteUser);

// routes for Product
router.get("/getProduct", getProduct.getProduct);
router.post("/postProduct", postProduct.postProduct);


// routes
router.get("/getTransactionData", getTrans.getTrans);
router.post("/postTransactionData", postTrans.postTrans);


// export
module.exports = { router }
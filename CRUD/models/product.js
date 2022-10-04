const express = require("express");
const mongoose = require("mongoose");

// ObjectId = mongoose.Schema.ObjectId;

const product = new mongoose.Schema({
  title: {
    // type:mongoose.Schema.Types.ObjectId,
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "active",
  },
});

const productData = new mongoose.model("productData", product);
module.exports = productData;

const express = require('express');
const ProductModel = require('../models/productModel');

const router = express.Router();

const getAll = async ( _req, res) => {
  try {
    const products = await ProductModel.getAll();
    return res.status(200).json(products);
  } catch(error) {
    return res.status(400).json({ message: 'Falha em recuperar todos os produtos' });
  }
}

const getById = async ( req, res) => {
  const { id } = req.params;
  try {
    const product = await ProductModel.getById(id);

    return res.status(200).json(product);
  } catch(error) {

    return res.status(400).json({ message: 'Falha em recuperar o produto' });
  }

}

const createProduct = async (req, res) => {
  const { name, brand } = req.body;

  try {
    const newProduct = await ProductModel.create(name, brand);
    console.log(newProduct);

    return res.status(201).json(newProduct);
  } catch(error) {
    
    return res.status(400).json({ message: 'Nao foi possivel adicionar o produto' })
  }

}

const deleteProduct = async ( req, res) => {
  const { id } = req.params;
  try {
    const products = await ProductModel.exclude(id);

    return req.status(204).json(products)

  } catch(error) {

    return res.status(400).json({ message: 'Nao foi possivel deletar o produto' }) 
  }
}

const updateProduct = async (req, res) => {
  const { name, brand } = req.body;
  const { id } = req.params;

  const products = await ProductModel.update(id, name, brand);
  
  return res.status(200).json(products);
}


module.exports = {
  getAll,
  getById,
  createProduct,
  deleteProduct,
  updateProduct,
};
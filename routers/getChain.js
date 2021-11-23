const express = require('express');
const getChainRouter = express.Router();
const { blockchain } = require('../index');

const chain = blockchain.getChain();

getChainRouter.get('/',(req,res)=>{
    res.status(200).json(chain);
})

module.exports=getChainRouter;
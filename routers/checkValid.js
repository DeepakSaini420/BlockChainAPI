const express = require('express');
const checkValidRouter = express.Router();
const { blockchain } = require('../index');

checkValidRouter.get('/',(req,res)=>{
    if(blockchain.getChain().length===1){
        return res.status(404).json({
            Message:"Please Add A Block"
        })
    }

    if(blockchain.checkValid()){
        return res.status(200).json({
            Message:"BlockChain is Valid"
        })
    }else{
        return res.status(404).json({
            Message:"BlockChain is not valid"
        })
    }

})

module.exports= checkValidRouter;
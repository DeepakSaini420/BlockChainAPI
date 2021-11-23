const express = require('express');
const addBlockRouter = express.Router();
const { blockchain,block } = require('../index');



addBlockRouter.post('/',(req,res)=>{
    const {info } = req.body;
    
    let index = blockchain.getIndex();

    if(!info) return res.status(404).json({
        Message : "error"
    })


    let ind = index+1; 

    blockchain.addNewBlock(new block(ind,info));

    res.status(201).json({
        Message:"Congratulations Block Added"
    })

})


module.exports=addBlockRouter;
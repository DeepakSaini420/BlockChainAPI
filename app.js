const express = require('express');
const app = express();
const getChainRouter = require('./routers/getChain');
const addBlockRouter = require('./routers/addBlock');
const checkValidRouter = require('./routers/checkValid');

app.use(express.json());

app.use('/getChain',getChainRouter);

app.use('/addBlock',addBlockRouter);

app.use('/check',checkValidRouter);

module.exports = app;
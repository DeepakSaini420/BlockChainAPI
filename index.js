const crypto = require('crypto-js');

class Block{
    computeHash(){
        return crypto.SHA512(this.index+this.info+this.time+this.prevHash+JSON.stringify(this.index)).toString();
    }
    
    constructor(index,info,prevHash=""){
        this.index=index;
        this.time=new Date().toString();
        this.info=info;
        this.prevHash=prevHash;
        this.hash=this.computeHash()
    }

    
}

class BlockCahin{
    constructor(){
        this.blockchain = [this.startChain()];
    }
    startChain(){
        return new Block(0,"","0");
    }
    latestBlock(){
        return this.blockchain[this.blockchain.length-1];
    }
    addNewBlock(block){
        block.prevHash=this.latestBlock().hash;
        block.hash = block.computeHash();
        this.blockchain.push(block);
    }

    getIndex(){
        return this.blockchain[this.blockchain.length-1].index;
    }

    getChain(){
        return this.blockchain;
    }

    checkValid(){
        if(this.blockchain.length===1){
            return "Please Add a Block";
        }
        let x=0;
        for(let i=1;i<this.blockchain.length;i++){
            const currentBlock = this.blockchain[i];
            const prevBlock = this.blockchain[i-1];

            if(currentBlock.prevHash==prevBlock.hash){
                x++;
            }
        }
        if(this.blockchain.length-1===x){
            return true;
        }else{
            return false;
        }
    }
}

const blockchain = new BlockCahin();

module.exports={
    blockchain,
    block:Block
}
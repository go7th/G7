const BigNumber = require('bignumber.js');
const Web3 = require('web3');
module.exports = {
    toBigNumber:function(Decimal){
        return new BigNumber(Decimal*Math.pow(10,18));
    },
};

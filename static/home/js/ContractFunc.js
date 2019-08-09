var g7Address = "0x85bdc19cacfeeac1e4da5aa0c50d0ff0172b7484";
var MyContract = web3.eth.contract(g7ABI);
var g7 = MyContract.at(g7Address);
var ContractFunc = {
    sendTo:function(address,coins){
        return new Promise(function (reslove, reject) {
          g7.transfer(address,coins,function(error,result){
              if(!error){
                  return reslove(result);
              }else{
                  return reject(error);
              }
          })
        })
    },
    balanceOf:function(address) {
        return new Promise(function (reslove, reject) {
          g7.balanceOf(address,function(error,result){
              if(!error){
                  return reslove(result);
              }else{
                  return reject(error);
              }
          })
        })
    }
}

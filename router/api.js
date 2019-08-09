const express = require('express'),
  config = require('config-lite')(__dirname),
  async = require('async'),
  ethFunc = require('../ethfunc/ethfunc'),
  Common = require('../ethfunc/common'),
const Router = express.Router();

Router.get('/test',function(req,res){
    async function main(){
        try {
            // let bs = await ethFunc.getBalance(['0x31114A7d6E98486FCb0b3a342b15D7E7A2A0e092']).catch(e=>{console.log(e);});
            // let nbs = await ethFunc.toDecimal(bs).catch(e=>{console.log(e);});
            // let test = await ethFunc.test(['0x31114A7d6E98486FCb0b3a342b15D7E7A2A0e092']).catch(e=>{console.log(e);});
            // let getCoinsType1 = await ethFunc.getName().catch(e=>{console.log(e);});
            // let getCoinsType2 = await ethFunc.getCoinsType().catch(e=>{console.log(e);});
            // let getCoinsType3 = await ethFunc.getTotal().catch(e=>{console.log(e);});
            // let getCoinsType4 = await ethFunc.getAllowance(['0x85bdc19cacfeeac1e4da5aa0c50d0ff0172b7484','0x31114A7d6E98486FCb0b3a342b15D7E7A2A0e092']).catch(e=>{console.log(e);});
            let getCoinsType5 = await ethFunc.sendTo('0x31114A7d6E98486FCb0b3a342b15D7E7A2A0e092',50).catch(e=>{console.log(e);});
            // console.log(getCoinsType1);
            // console.log(getCoinsType2);
            // console.log(getCoinsType3);
            // console.log(getCoinsType4);
            console.log(getCoinsType5);
        } catch (e) {
            console.log(e);
            // res.send(e);
        } finally {

        }

    }
    main();


})
//GET  /api/getCoinsInfo
Router.post('/getCoinsInfo', function(req,res){
    async function main(){
        try {
            let coinsName = await ethFunc.getName().catch(e=>{console.log(e);});
            let coinsType = await ethFunc.getCoinsType().catch(e=>{console.log(e);});
            let coinsTotal = await ethFunc.getTotal().catch(e=>{console.log(e);});
            let coinsAllowance = await ethFunc.getAllowance(['0x85bdc19cacfeeac1e4da5aa0c50d0ff0172b7484','0x31114A7d6E98486FCb0b3a342b15D7E7A2A0e092']).catch(e=>{console.log(e);});
            let data={
                name:coinsName,
                type:coinsType,
                total:ethFunc.toDecimal(coinsTotal),
                allowance:coinsAllowance,
            }
            return res.send({success:true,data:data});

        } catch (e) {
            console.log(e);
        } finally {

        }

    }
    main();
})

module.exports = Router;

Web3 = require('web3')
web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));


//Gascoin

abi = JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"GS_Active","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOfCoin","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"priceGas","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"value256","outputs":[{"name":"","type":"int256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"GasCoins","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"GSnetwork_names","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"IssueCard","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"standard","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"numberOfUsers","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"CreditIssued","outputs":[{"name":"","type":"int256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"newGSAddress_","type":"address"},{"name":"GASname","type":"string"}],"name":"new_GS","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"User_addresses","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"i","type":"uint256"}],"name":"userAddress","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_value","type":"uint256"}],"name":"BuyGascoin","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"numberOfGS","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"GasSold","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"i","type":"uint256"}],"name":"GSAddress","outputs":[{"name":"","type":"address"},{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"myArray","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"GSname","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_value","type":"uint256"},{"name":"_priceGas","type":"uint256"},{"name":"_fromGS","type":"address"}],"name":"buyGas","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_value","type":"uint256"},{"name":"_toSettle","type":"address"}],"name":"Settlement","outputs":[],"payable":false,"type":"function"},{"inputs":[{"name":"initialSupply","type":"uint256"},{"name":"tokenName","type":"string"},{"name":"decimalUnits","type":"uint8"},{"name":"tokenSymbol","type":"string"}],"payable":false,"type":"constructor"}]')

gascoin = web3.eth.contract(abi);
gascoin = gascoin.at('0xee2caa5ea0643386c53eb831f8e71a0d89173fbc');


function RegisterNGS() {
  address = $("#NGS_address").val();
  address = $("#NGS_name").val();
  password="";
  var password = prompt("Please enter your password");
  if (password == null || password == "") {
      txt = "User cancelled the prompt.";
  } 
  web3.personal.unlockAccount(web3.eth.accounts[0],password,10)
  gascoin.new_GS(address,name_GS,{from: web3.eth.accounts[0],gas:300000});
  password="";
    }

function IssueCredit() {
  
  password="";
  var password = prompt("Please enter your password");
  if (password == null || password == "") {
      txt = "User cancelled the prompt.";
  } 

  from_GS=$("#Issuer_address_form").val();
  User_credit=$("#User_address_form").val();
  Credit_amount=$("#Amount_credit_form").val();
  web3.personal.unlockAccount(from_GS,password,1);
  gascoin.IssueCard(User_credit,Credit_amount, {from:from_GS,gas:300000});
  password="";   
}
function TradeGasCoin() {
  
  password="";
  var password = prompt("Please enter your password");
  if (password == null || password == "") {
      txt = "User cancelled the prompt.";
  } 

  Buyer_address=$("#Buyer_address_form").val();

  GasCoin_amount=$("#gascoin_amount_form").val();
  web3.personal.unlockAccount(Buyer_address,password,1);
  gascoin.BuyGascoin(GasCoin_amount, {from:Buyer_address,gas:300000});
  password="";   
}


function BuyGas(){
  password="";
  
  var password =$( "#dialog" ).dialog();
  gas_amount= $("#Gas_amount_form").val();
  price_gas= $("#Price_form").val();
  from_GS= $("#Address_form").val();
  from_User=$("#Address_fromUser_form").val()
  web3.personal.unlockAccount(from_User,"lagruesa",1);
  gascoin.buyGas(gas_amount,price_gas,from_GS,{from:from_User,gas:300000});
password="";
}

$(document).ready(function() {
 
  for (var i = 0; i < gascoin.numberOfGS(); i++) {
    GS=gascoin.GSAddress(i);
    let GScredit = gascoin.CreditIssued.call(GS[0]).toString()
    let val = gascoin.GSnetwork_names.call(i).toString()
    

    $("#" + "GS_name-"+i).html(GS[1]);
    $("#" + "GS_Address-"+i).html(GS[0]);
    $("#" + "GS_Credit-"+i).html(GScredit);
    $("#" + "GS_gasSold-"+i).html(gascoin.GasSold(GS[0]).toString());
    $("#" + "GS_gascoin-"+i).html(gascoin.GasCoins(GS[0]).toString());
  }
  for (var j = 0; j < gascoin.numberOfUsers(); j++) {
    let userAddress=gascoin.User_addresses(j).toString()
    $("#" + "User_Address-"+j).html(gascoin.User_addresses(j));
    $("#" + "User_Credit-"+j).html(gascoin.balanceOfCoin(userAddress).toString());
    //$("#" + "User_gas-"+i).html(gascoin.balanceOfCoin(gascoin.User_addresses(i)));
    
}
});
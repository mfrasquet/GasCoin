Web3 = require('web3')
web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
abi = JSON.parse('[{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"totalVotesFor","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"validCandidate","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"votesReceived","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"x","type":"bytes32"}],"name":"bytes32ToString","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"candidateList","outputs":[{"name":"","type":"bytes32"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"voteForCandidate","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"contractOwner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"inputs":[{"name":"candidateNames","type":"bytes32[]"}],"payable":false,"type":"constructor"}]')
VotingContract = web3.eth.contract(abi);
// In your nodejs console, execute contractInstance.address to get the address at which the contract is deployed and change the line below to use your deployed address
contractInstance = VotingContract.at('0xf39a257ff7084025b20df8537c52bec11deb4395');
candidates = {"miguel": "candidate-1", "zaira": "candidate-2"}

//Gascoin

abi = JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"GS_Active","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOfCoin","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"priceGas","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"value256","outputs":[{"name":"","type":"int256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"GasCoins","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"GSnetwork_names","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"IssueCard","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"standard","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"numberOfUsers","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"CreditIssued","outputs":[{"name":"","type":"int256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"newGSAddress_","type":"address"},{"name":"GASname","type":"string"}],"name":"new_GS","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"User_addresses","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"i","type":"uint256"}],"name":"userAddress","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_value","type":"uint256"}],"name":"BuyGascoin","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"numberOfGS","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"GasSold","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"i","type":"uint256"}],"name":"GSAddress","outputs":[{"name":"","type":"address"},{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"myArray","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"GSname","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_value","type":"uint256"},{"name":"_priceGas","type":"uint256"},{"name":"_fromGS","type":"address"}],"name":"buyGas","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_value","type":"uint256"},{"name":"_toSettle","type":"address"}],"name":"Settlement","outputs":[],"payable":false,"type":"function"},{"inputs":[{"name":"initialSupply","type":"uint256"},{"name":"tokenName","type":"string"},{"name":"decimalUnits","type":"uint8"},{"name":"tokenSymbol","type":"string"}],"payable":false,"type":"constructor"}]')

gascoin = web3.eth.contract(abi);
gascoin = gascoin.at('0xee2caa5ea0643386c53eb831f8e71a0d89173fbc');


function RegisterNGS() {
  address = $("#NGS_address").val();
  name_GS="Gas Station 3"
  web3.personal.unlockAccount(web3.eth.accounts[0],"TMw7jIob",10)
  gascoin.new_GS(address,name_GS,{from: web3.eth.accounts[0],gas:300000});
    }

function IssueCredit() {

  from_GS=web3.eth.accounts[3];
  User_credit=$("#User_address_form").val();
  Credit_amount=$("#Amount_credit_form").val();
  web3.personal.unlockAccount(from_GS,"lagruesa",1);
  gascoin.IssueCard(User_credit,Credit_amount, {from:from_GS,gas:300000});
    }
function BuyGas(){
  gas_amount= $("#Gas_amount_form").val();
  price_gas= $("#Price_form").val();
  from_GS= $("#Address_form").val();
  from_User=web3.eth.accounts[2];
  web3.personal.unlockAccount(from_User,"lagruesa",1);
  gascoin.buyGas(gas_amount,price_gas,from_GS,{from:from_User,gas:300000});

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
    $("#" + "GS_gascoin-"+i).html(gascoin.GasCoins(i).toString());
  }
  for (var j = 0; j < gascoin.numberOfUsers(); j++) {
    let userAddress=gascoin.User_addresses(j).toString()
    $("#" + "User_Address-"+j).html(gascoin.User_addresses(j));
    $("#" + "User_Credit-"+j).html(gascoin.balanceOfCoin(userAddress).toString());
    //$("#" + "User_gas-"+i).html(gascoin.balanceOfCoin(gascoin.User_addresses(i)));
    
}
});
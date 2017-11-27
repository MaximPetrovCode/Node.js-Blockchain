const Web3 = require('web3');

if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider("http://172.26.25.46:8541/"));
}

web3.eth.defaultAccount = web3.eth.accounts[0];

var myContract = web3.eth.contract([{ "constant": false, "inputs": [{ "name": "_fName", "type": "string" }, { "name": "_age", "type": "uint256" }], "name": "setInstructor", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "getInstructor", "outputs": [{ "name": "", "type": "string" }, { "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }]);
// Contract Address 
// 0x04fe42094a783a87dc418df274e2cab2756c8aab
var contract = myContract.at('0x04fe42094a783a87dc418df274e2cab2756c8aab');


//Get transaction
contract.getInstructor(function (error, result) {
    if (!error) {
        console.log(result[0]);
        console.log(result[1]);
    }
    else {
        console.log('error');
    }
});

//Set transaction
//contract.setInstructor("Query", 77);
const assert = require("assert");
const ganache = require("ganache-cli");
//its with capital letter because its constructor
//when using Web3 we will need a provider like ganache for example
const Web3 = require("web3");
//lower case measn instance
const web3 = new Web3(ganache.provider());

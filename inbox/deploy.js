const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const { interface, bytecode } = require("./compile");

const provider = new HDWalletProvider(
  "silk weird birth member vocal bright process margin royal boat shrimp vibrant",
  "https://rinkeby.infura.io/v3/64a071496cda4e0697314b1b7f678b75"
);

const web3 = new Web3(provider);

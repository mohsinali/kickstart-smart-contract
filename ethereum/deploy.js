const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json')

const provider = new HDWalletProvider(
  'fiber olive region creek comic sketch enlist layer virus merry depend lounge',
  'https://rinkeby.infura.io/AYgkZX8d0vB6d0ZhHOB6'
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log('Attempting to access account: ', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({data: '0x' + compiledFactory.bytecode})
    .send({gas: '1000000', from: accounts[0]});

  
  console.log('Contract deployed at: ', result.options.address);
}

deploy();
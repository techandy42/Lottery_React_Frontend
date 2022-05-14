import Web3 from 'web3'

// taking the MetaMask injected web3 instance on the browser
// which has access to the Rinkeby Testnet
// and
const web3 = new Web3(window.ethereum)

export default web3

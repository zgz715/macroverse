var MRVToken = artifacts.require("./MRVToken.sol")

var MacroverseUniversalRegistry = artifacts.require("./MacroverseUniversalRegistry.sol")

module.exports = async function(deployer, network, accounts) {
  
  // Deploy the registry, using the existing token and a starting min star deposit.
  await deployer.deploy(MacroverseUniversalRegistry, MRVToken.address, web3.toWei(1000, "ether"))    
  
};

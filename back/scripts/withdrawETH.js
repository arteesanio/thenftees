const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });
const { NFT_CONTRACT_ADDRESS, METADATA_URL } = require("../constants");

async function main() {
  const signers = await ethers.getSigners();
  // const [deployer] = await ethers.getSigners();
  // console.log(signers)
  console.log(`${signers.length} signers`);
  let deployer = signers[0]
  console.log(`Deploying address: ${deployer.address}`);

  // Address of the whitelist contract that you deployed in the previous module
  const contractAddress = NFT_CONTRACT_ADDRESS;
  // URL from where we can extract the metadata for a Crypto Dev NFT
  const metadataURL = METADATA_URL;

  const Box = await ethers.getContractFactory('CryptoDevs');
  const box = await Box.attach(contractAddress);
  // Call the retrieve() function of the deployed Box contract
  const done = await box.withdraw();

  // print the address of the deployed contract
  console.log(
    "Crypto Devs Contract withdraw at:",
    contractAddress
  );
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

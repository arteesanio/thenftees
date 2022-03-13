require("@nomiclabs/hardhat-waffle");
require("dotenv").config({ path: ".env" });

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
const RINKEBY_PRIVATE_KEY = process.env.RINKEBY_PRIVATE_KEY;
const ALCHEMY_API_KEY_URL = process.env.ALCHEMY_API_KEY_URL;

const rinkeby = { url: ALCHEMY_API_KEY_URL, accounts: [RINKEBY_PRIVATE_KEY], timeout: 100000, }

module.exports = {
	solidity: "0.8.11",
	mocha: {
	  timeout: 60000
	},
	networks: {
	  rinkeby,
	}
};


require('@nomiclabs/hardhat-waffle');

const GOERLIURL = import.meta.env.GOERLI_URL;
const GOERLIACCOUNT = import.meta.env.GOERLI_ACCOUNT;

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: GOERLIURL,
      account: [GOERLIACCOUNT],
    },
  },
};

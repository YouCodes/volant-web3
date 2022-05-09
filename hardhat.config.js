require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/0a3ldC2TOg-mToRRxoBXX_qNh-VT52cN',
      accounts: ['30e75d1c8d64763e065eb9eeda674c43ca0337e56fc34434ede04208ef78d2bb'],
    },
  },
};
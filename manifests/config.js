module.exports.config = {
  mainnet: {
    dataSources: [],
    templates: [],
  },
  "arbitrum-one": {
    dataSources: [],
    templates: [],
  },
  xdai: {
    dataSources: [],
    templates: [],
  },
  goerli: {
    dataSources: [
      {
        name: "popcart",
        template: "popcart-ds.yaml",
        address: "0x34a90791b68C90Bbbf30C167cBbCdb8AC0D5B7Ea",
        startBlock: 9917780,
      },
    ],
    templates: [],
  },
  matic: {
    dataSources: [],
    templates: [],
  },
};

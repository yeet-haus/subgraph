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
        address: "0x7007b0e366436370FA27479Fe0D331a8C156222C",
        startBlock: 9901460,
      },
    ],
    templates: [],
  },
  matic: {
    dataSources: [],
    templates: [],
  },
};

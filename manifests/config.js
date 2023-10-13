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
        name: "peachdrop",
        template: "curve-ds.yaml",
        address: "0xf4834eC6AB1D846Aa3eF9F7063c9ac75EA18A9B9",
        startBlock: 9861555,
      },
    ],
    templates: [],
  },
  matic: {
    dataSources: [],
    templates: [],
  },
};

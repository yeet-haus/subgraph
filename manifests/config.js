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
        name: "summoner",
        template: "summoner-ds.yaml",
        address: "0x7e988A9db2F8597735fc68D21060Daed948a3e8C",
        startBlock: 10038193,
      },
    ],
    templates: [
      {
        name: "baalTemplate",
        template: "baal-template.yaml",
      },
      {
        name: "yeeterTemplate",
        template: "yeeterShaman-template.yaml",
      },
    ],
  },
  matic: {
    dataSources: [],
    templates: [],
  },
};

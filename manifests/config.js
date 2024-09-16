module.exports.config = {
  mainnet: {
    dataSources: [],
    templates: [],
  },
  "base-sepolia": {
    dataSources: [
      {
        name: "pod",
        template: "pod-ds.yaml",
        address: "0x2b530b015a096267d71ed54d797238479e817ab5",
        startBlock: 14175025,
      },
    ],
    templates: [],
  },

  base: {
    dataSources: [],
    templates: [],
  },
};

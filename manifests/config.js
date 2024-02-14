module.exports.config = {
  mainnet: {
    dataSources: [],
    templates: [],
  },
  "arbitrum-one": {
    dataSources: [
      {
        name: "summoner",
        template: "summoner-ds.yaml",
        address: "0x2875aEbb4472E5E579a2A5290c7B5A3C90484D5F",
        startBlock: 180807980,
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
  gnosis: {
    dataSources: [
      {
        name: "summoner",
        template: "summoner-ds.yaml",
        address: "0x313f9A3C9A5041e9be00cf88b18962581A4eFb35",
        startBlock: 32454579,
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
  sepolia: {
    dataSources: [
      {
        name: "summoner",
        template: "summoner-ds.yaml",
        address: "0xB2B3909661552942AE1115E9Fc99dF0BC93d71d0",
        startBlock: 5110553,
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
  optimism: {
    dataSources: [
      {
        name: "summoner",
        template: "summoner-ds.yaml",
        address: "0x2875aEbb4472E5E579a2A5290c7B5A3C90484D5F",
        startBlock: 116176243,
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
  base: {
    dataSources: [
      {
        name: "summoner",
        template: "summoner-ds.yaml",
        address: "0x2875aEbb4472E5E579a2A5290c7B5A3C90484D5F",
        startBlock: 10581133,
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
  polygon: {
    dataSources: [],
    templates: [],
  },
};

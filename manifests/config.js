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
        address: "0xb08Cc8C343cF6dC20d8cf51Fb2D6C436c6390dAa",
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
        address: "0x7e988A9db2F8597735fc68D21060Daed948a3e8C",
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
        address: "0x3E0eAdE343Ddc556a6Cf0f858e4f685ba303ce71",
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
        address: "0x22e0382194AC1e9929E023bBC2fD2BA6b778E098",
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

module.exports.config = {
  mainnet: {
    dataSources: [
      {
        name: "summoner",
        template: "summoner-ds.yaml",
        address: "0x7e988A9db2F8597735fc68D21060Daed948a3e8C",
        startBlock: 16028392,
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
  "arbitrum-one": {
    dataSources: [
      {
        name: "summoner",
        template: "summoner-ds.yaml",
        address: "0xb08Cc8C343cF6dC20d8cf51Fb2D6C436c6390dAa",
        startBlock: 180807980,
      },
      {
        name: "yeeterFactory",
        template: "yeeterFactory-ds.yaml",
        address: "0x62fF4Ca410E9e58f5ce8B2Ad03695EF0ad990381",
        startBlock: 314633128,
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
      {
        name: "erc20YeeterTemplate",
        template: "erc20YeeterShaman-template.yaml",
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
      {
        name: "yeeterFactory",
        template: "yeeterFactory-ds.yaml",
        address: "0xeCcb018e5aa81cb3Ffb175fD56f0a38b3CC4F6cf",
        startBlock: 38982639,
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
      {
        name: "erc20YeeterTemplate",
        template: "erc20YeeterShaman-template.yaml",
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
      {
        name: "yeeterFactory",
        template: "yeeterFactory-ds.yaml",
        address: "0xBbBb973B5f2E0E926CfB8a2E4fc8638C4ff41AC1",
        startBlock: 7881550,
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
      {
        name: "erc20YeeterTemplate",
        template: "erc20YeeterShaman-template.yaml",
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
      {
        name: "yeeterFactory",
        template: "yeeterFactory-ds.yaml",
        address: "0x62fF4Ca410E9e58f5ce8B2Ad03695EF0ad990381",
        startBlock: 133057103,
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
      {
        name: "erc20YeeterTemplate",
        template: "erc20YeeterShaman-template.yaml",
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
      {
        name: "yeeterFactory",
        template: "yeeterFactory-ds.yaml",
        address: "0x62fF4Ca410E9e58f5ce8B2Ad03695EF0ad990381",
        startBlock: 27461738,
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
      {
        name: "erc20YeeterTemplate",
        template: "erc20YeeterShaman-template.yaml",
      },
    ],
  },
  polygon: {
    dataSources: [],
    templates: [],
  },
};

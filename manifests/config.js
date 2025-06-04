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
        address: "0xbab498fb934fe1661bb707dff1730bae12a1a691",
        startBlock: 343891365,
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
        address: "0x4c5a8dd88e8E925330026014D0aB96926563f213",
        startBlock: 40414354,
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
        address: "0xddcef6B4b6861a617f89bd0917C9BcbCfe50F187",
        startBlock: 8476455,
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
        address: "0x97d7753882f8bAb3E96EFD9a8a17CA1C769Cd7cC",
        startBlock: 136729967,
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
        address: "0x313f9A3C9A5041e9be00cf88b18962581A4eFb35",
        startBlock: 31133882,
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

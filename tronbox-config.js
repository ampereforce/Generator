module.exports = {
  contracts_directory: './tron',
  networks: {
    mainnet: {
      // Don't put your private key here:
    },
    compilers: {
      solc: {
        version: '0.5.8',
		settings: {
			optimizer: {
				enabled: false,
				runs: 200
			}
		}
      }
    }
  }
}

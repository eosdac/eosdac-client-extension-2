export default {
  'dacId': 'eos.dac',

  'endpoints': [
    'https://jungle.eosdac.io',
    'https://api.jungle.alohaeos.com'
  ],

  /* 'pricefeed': {
    api: 'newdex',
    newdex: { symbol: 'eosdactokens-eosdac-eos', endpoint: 'https://api.newdex.io/v1/ticker' }
  }, */

  'network': {
    'name': 'jungle',
    'blockchain': 'eos',
    'chainId': 'e70aaab8997e1dfce58fbfac80cbbb8fecec7b99cf982a9444273cbc64c41473'
  },

  'accounts': {
    'directory': 'dacdirectory'
  },

  'system_token': {
    'contract': 'eosio.token',
    'symbol': 'EOS',
    'precision': 4
  },

  'contracts': {
    'system_msig': {
      'name': 'eosio.msig'
    }
  },

  'api': {
    'dac_api': 'http://127.0.0.1:8383/v1/eosdac',
    'dac_ws': 'ws://api-jungle.eosdac.io:3030'
  },

  'external': {
    'homepage': 'https://eosdac.io',
    'explorer_transaction': 'https://jungle.bloks.io/transaction/{transaction_id}',
    'explorer_msig': 'https://jungle.bloks.io/msig/{proposer}/{proposal_name}'
  }
}

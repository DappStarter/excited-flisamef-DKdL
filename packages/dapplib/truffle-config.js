require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace seek surge trip film birth often minor inflict arena flock sniff'; 
let testAccounts = [
"0xb93f53b7aabc6ca2564716a959061cda9bdd5169cd0e39fd79e508c1d2534373",
"0xac8eb547ea35d1e7105d032bf42341d0b26ad7ed897facd7495ca2851a18c28b",
"0xb30df916298500fb87668f97e11143dde6b95d478680184c8fb358f9f9d27205",
"0x09046fec690d651f8c34f393ce3da1bbfd135dff2dea6baf575aef920c08bdc8",
"0x56f371ccbcfe89282a4d062c237049da6d80014652292804736c1ff36fa10147",
"0x5cc5aa33e56776a8dec74a1c6c35735967b5c858af309bedabe552c6b9be8fc9",
"0x548ce8fc8335f4137f72db3cfa36ad92f2037e64527250bde794c88e240162c6",
"0x60e141ae4c4ddb7128d87b4e7486833bf1d5d26d0ac760c1bf7124344b80bf8c",
"0xb18fc6d798e3abb4dcb4464b73ec0d9cef20ca4745fce88c56fde76f6afa29e6",
"0x963983374a7eb92711078da3bedf3a40cca429f937559b2f81fd11b15b11cd72"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};


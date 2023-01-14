require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner arena bone table edge rare remain million hidden cloth fold spread'; 
let testAccounts = [
"0xf94f9ea13bbcd99cb37640c509ae8e8edf93ce38bf3895eae51e4c228f9aef8d",
"0xe406862a876d83162ec708247de99e3b03d50c926f3317b28ffeb6489e0987bc",
"0x67e171fbb1e19bee25222b365c14d24800fad1d3dff10e2484d13d11a6fa1845",
"0xff0b175151304cb2f28a7908ca986960150322be787b7a108e4c8f1b72ffed32",
"0x34678849bab0682c8d4704aa1cb44f3a03bceb625686d0be4fa91b367892d186",
"0xf1515203d0e495f21c3118dba3d96ece4f0687cc22608e717d2b359f1ca19306",
"0x4bfb6c0984ac5d2d7a17ac4ca3828cbe3326c7467d681e22466ecb2626696243",
"0x764c9c3775e8eb241006a8ff611316dd1c152c18978d81e467aa9245980eceda",
"0x51951dde1ff0a19ba2df8b4f0d1f4d10036cd2b8ec7b497d83ffcf8bc1bd0c33",
"0xf58e423088e42fe26b4b2c3904f0b9654d09eb6b7b36aa4521f11456662c6260"
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


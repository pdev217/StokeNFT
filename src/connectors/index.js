import { WalletLinkConnector } from "@web3-react/walletlink-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { InjectedConnector } from "@web3-react/injected-connector";

const coinbaseWallet = new WalletLinkConnector({
    url: `https://mainnet.infura.io/v3/${process.env.INFURA_ID}`,
    appName: "StokeNFT",
    supportedChainIds: [1, 3, 4, 5, 42, 137, 80001],
});

const walletConnect = new WalletConnectConnector({
    rpcUrl: `https://mainnet.infura.io/v3/${process.env.INFURA_ID}`,
    bridge: "https://bridge.walletconnect.org",
    qrcode: true,
});

const injected = new InjectedConnector({
    supportedChainIds: [1, 3, 4, 5, 42, 137, 80001]
});

//prevent coinbase wallet in click injected
function activateInjectedProvider(providerName) {
    if(typeof window !== "undefined") {
      var ethereum   = window.ethereum;
    }
    
    if (!ethereum?.providers) {
        return undefined;
    }

    let provider;
    switch (providerName) {
        case 'CoinBase':
            provider = ethereum.providers.find(({ isCoinbaseWallet }) => isCoinbaseWallet);
            break;
        case 'MetaMask':
            provider = ethereum.providers.find(({ isMetaMask }) => isMetaMask);
            break;
    }

    if (provider) {
        ethereum.setSelectedProvider(provider);
    }
}

activateInjectedProvider('MetaMask');

export {injected, coinbaseWallet, walletConnect}
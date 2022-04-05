import { Web3ReactProvider } from '@web3-react/core';
import { AuthProvider } from '../src/contexts/JWTContext';
import { ethers } from "ethers";
import "../styles/globals.css";

const getLibrary = (provider) => {
  const library = new ethers.providers.Web3Provider(provider);
  library.pollingInterval = 8000; // frequency provider is polling
  return library;
};

function MyApp({ Component, pageProps }) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </Web3ReactProvider>
    );
}

export default MyApp;
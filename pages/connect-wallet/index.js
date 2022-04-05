import { withLayout } from "../../layout/Layout";
import { ConnectWalletPage } from "../../src/page-components/ConnectWalletPage/ConnectWalletPage";

const ConnectWallet = () => {
  return (
    <>
      <ConnectWalletPage />
    </>
  );
};

export default withLayout(ConnectWallet);

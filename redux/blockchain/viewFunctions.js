import { useWeb3React } from "@web3-react/core";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentAccount } from "../slices/viewSlice";
const ViewFunctions = () => {
  const { connector, hooks } = useWeb3React();
  const { useSelectedAccount, useSelectedIsActive, useSelectedIsActivating } =
    hooks;
  const isActivating = useSelectedIsActivating(connector);
  const isActive = useSelectedIsActive(connector);
  const account = useSelectedAccount(connector);
  const dispatch = useDispatch();
  const currentAccount = useSelector((state) => state.viewSlice.currentAccount);
  const connectWallet = async () => {
    if (isActive) {
      if (connector?.deactivate) {
        void connector.deactivate();
      } else {
        void connector.resetState();
        dispatch(setCurrentAccount(account));
        // successNotification("You have successfully Connected your wallet!");
      }
    } else if (!isActivating) {
      try {
        await connector.activate();
      } catch (error) {
        console.error("Error activating connector:", error);
        connector.resetState();
        // errorNotification(
        //   error.message.slice(0, 300) ||
        //     "Something went wrong while connecting your wallet, please try again"
        // );
      }
    }
    dispatch(setCurrentAccount(account));
  };

  return {
    connectWallet,
    currentAccount,
  };
};

export default ViewFunctions;

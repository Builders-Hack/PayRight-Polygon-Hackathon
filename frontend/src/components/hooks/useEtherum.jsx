import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { abi } from "abi";
import { useAccount, useSigner } from "wagmi";
import useAlert from "./useAlert";
const CONTRACT_ADDRESS = "0xEF1ea81Bc1F49fD73F359DBfB59164bF461c622d";

const { ethereum } = window;

export const useEtherum = () => {
  const { data: signer } = useSigner();
  const { isConnected, address } = useAccount();
  const [contract, setState] = useState(undefined);
  const [error, setError] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const { displayAlert } = useAlert();
  // const { isConnected, address } = useAccount();
  useEffect(() => {
    const fecthData = async () => {
      try {
        if (ethereum) {
          setLoading(true);
          const connectedContract = await new ethers.Contract(
            CONTRACT_ADDRESS,
            abi,
            signer
          );
          setState(connectedContract);
          setLoading(false);
          setError(null);
        } else {
          displayAlert("error", "Ethereum object doesn't exist!");
          console.error("Ethereum object doesn't exist!");
        }
      } catch (error) {
        setError(error.message);
        console.log(error);
      }
    };
    fecthData();
    //eslint-disable-next-line
  }, []);
  return { isConnected, address, loading, error, contract };
};

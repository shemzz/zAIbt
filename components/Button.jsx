import React, { useState, useEffect } from "react";
import { useAccount, usePrepareSendTransaction, useSendTransaction } from "wagmi";
import { parseEther } from "viem";
import { useDebounce } from "use-debounce";

const Buttonn = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [amount, setAmount] = useState("");
  const [debouncedAmount] = useDebounce(amount, 500)
  const { config, error } = usePrepareSendTransaction({
    to: "0xEA972307F272dAb5899Bd4aAB27787EBD747017E",
    value: debouncedAmount ? parseEther(debouncedAmount) : 0.05, // Convert amount to Wei using parseEther
  });
  const { sendTransaction } = useSendTransaction(config);

  const account = useAccount({
    onConnect({ address, connector, isReconnected }) {
      console.log('Connected', { address, connector, isReconnected });
      setIsConnected(true);
    },
    onDisconnect() {
      console.log('Disconnected');
      setIsConnected(false);
    },
  });

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
    // Perform additional actions as needed when the amount changes
  };

  const handleBuyNowClick = () => {
    // Perform action with the stored amount
    console.log("Buying now with amount:", amount);
  };

  return (
    <>
      {isConnected && (
        <>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="amount"
            type="number"
            style={{ paddingLeft: '10px', borderRadius: '6px', lineHeight: '2' }}
            value={amount}
            onChange={handleAmountChange}
          />
          <button disabled={!sendTransaction && !amount} onClick={() => sendTransaction?.()} className="btnn">BUY NOW</button>
        </>
      )}

    </>
  );
};

export default Buttonn;

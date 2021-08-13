import "./App.css";
import Web3 from "web3";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [account, setAccount] = useState("");

  const loadBlockchainData = async () => {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");
    const network = await web3.eth.net.getNetworkType();
    console.log("network:", network);
    //fetch the account information
    const accountInfo = await web3.eth.getAccounts();
    console.log("accountInfo:", accountInfo);
    //set the account
    setAccount(accountInfo[0]);
  };

  useEffect(() => {
    loadBlockchainData();
  }, []);

  return (
    <div className="container">
      <h1>Hello,World!</h1>
      <p>Your account: {account}</p>
    </div>
  );
}

export default App;

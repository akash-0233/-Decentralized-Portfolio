import './Wallet.css';
import ABI from "./ABI.json";
import { useState } from 'react';
import Web3 from "web3";

const Wallet =()=>{

      const init = async()=>{
            try {
                  const web3 = new Web3(window.ethereum);
                  await window.ethereum.request({method:'eth_requestAccounts'});
                  const contract = new web3.eth.Contract(ABI,"0x176aee6c6Cc353448a9A5cBEfE4D1a2E2d2DD9be");
                  console.log(contract);
            } catch (error) {
                  alert("Install metaMask");
            }
      }
 
      return<>
      <div className="header">
      {false  && <button className="connectBTN">
         <a href="https://metamask.app.link/dapp/sriche.netlify.app/">Click For Mobile</a>
        </button>  } 
       <button className="connectBTN" onClick={init} >Connect Metamask</button>
      </div>
      </>
}
export default Wallet;
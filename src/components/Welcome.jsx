import React from 'react'
import { useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import { Loader } from ".";
import { TransactionContext } from "../context/TransactionContext";
import { shortenAddress } from "../utils/shortenAddress";



const commonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex text-sm font-bold text-black";
const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-1.5 outline-none bg-transparent text-black border-none text-sm white-glassmorphism"
  />
);
const Welcome = () => {
  const {currentAccount, connectWallet, handleChange, sendTransaction, formData, isLoading } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData;

    e.preventDefault();

    if (!addressTo || !amount || !keyword || !message) return;

    sendTransaction();
  };


  return (
    <div className="flex w-full justify-center items-center">
    <div className="flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
      <div className="flex flex-1 justify-start flex-col md:mr-10 md:mt-5">
        <h1 className="text-left  text-5xl text-black text-gradient py-1">
          Send Crypto <br /> around the world
        </h1>
        <p className="text-left mt-5 text-black font-light md:w-9/12 w-11/12 text-base"> Volant Allows You to Buy and Sell <br /> Crypto Easily and at Lightning Speed </p>
        <button type="button" onClick={connectWallet} className="flex mt-14 justify-center items-center my-5 bg-[#2952e3] p-3 mr-10 rounded-full cursor-pointer hover:bg-[#2546bd]"> 
       <p className="text-white text-base font-semibold"> Connect Metamask</p>
        </button> 
    <div className="py-2 grid sm:grid-cols-3 grid-cols-2 w-full mt-10"> 

      <div className={commonStyles}>
        Reliable
      </div>
        <div className={commonStyles}>
        Fast
      </div>
        <div className={commonStyles}>
        Accessible
      </div>
        <div className={commonStyles}>
        Low Fees
      </div>
        <div className={commonStyles}>
        Stable
      </div>
        <div className={commonStyles}>
        Immutable
      </div>
    </div> 
      </div>

      <div className="flex flex-col flex-1 items-center justify-start w-full md:mt-0 mt-10">
    <div className="p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card .white-glassmorphism">
      <div className="flex justify-between flex-col w-full h-full">
        <div className="flex justify-between items-start">
          <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
            <SiEthereum fontsize={21} color="#fff" />
          </div>
          <BsInfoCircle fontSize={17} color="#fff" />
        </div>
         <p className="mt-10 text-left text-white font-light text-sm">
               Address {shortenAddress(currentAccount)}
        </p>
        <p className="text-left text-white font-semibold text-lg mt-1">
                  Ethereum
                </p>

      </div>
    </div>    
 <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
     <Input placeholder="Address To" name="addressTo" type="text" handleChange={handleChange} />
     <Input placeholder="Amount (Eth)" name="amount" type="text" handleChange={handleChange} />
     <Input placeholder="Keyword (Gif)" name="keyword" type="text" handleChange={handleChange} />
     <Input placeholder="Message" name="message" type="text" handleChange={handleChange} />
<div className="h-[1px] w-full bg-gray-400 my-2" />
    
          
         {isLoading
              ? <Loader />
              : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
                >
                  Send now
                </button>
              )}
        
     </div>
</div> 

    </div>
    </div>
  )
}

export default Welcome
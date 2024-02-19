import React from "react";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import AddHeader from "../components/Layout/AddHeader";
const DemoVideoPage = () => {
    return (
      <div>
          <Header />
          <AddHeader/>
        <Demo />
        <Footer />
        
      </div>
    );
  };
const Demo = () => {
  return (
    
      <div >
        
          <h1 className="bg-dark p-2 text-white text-center">DEMO Explained </h1>
          <p className="text-justify mt-5 mx-10 text-bold text-gray-600 mb-5">
            We are currently working on it and will reach soon to it:))
          </p>
          <></>
        
      </div>
  
  );
};

export default DemoVideoPage;
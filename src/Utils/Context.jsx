import axios from "./axiosInstance";
import React, { createContext, useEffect, useState } from "react";

// to make data centralized -
export const ProductContext = createContext();

const Context = ({ children }) => {
  // we will create the context using the axios here for the centralaized data  fir main file ko context se wrap kr denge jisse app ko pta chale ki hume sab data wahin se chahiye fetch--
  //   ab fir props me children dia hai jisko fir div me show kia gya h

  const [products, setproducts] = useState(null);

  // add axios using async function it will Fetch the all products from the API URL--
  const getproducts = async () => {
    try {
      const { data } = await axios("/products");
      setproducts(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  // Now we using useeffect to call the getproducts fnc data--

  useEffect(
    () => {
      getproducts();
    },
    []
    //  When this array is empty ([]), it means the effect will only run once, after the initial render of the component.
    //   No Dependencies: The empty array indicates that the effect doesn't depend on any values from the component's props or state.
  );

  return (
    <>
      <ProductContext.Provider value={{ products, setproducts }}>
        {children}
      </ProductContext.Provider>
    </>
  );
};

export default Context;

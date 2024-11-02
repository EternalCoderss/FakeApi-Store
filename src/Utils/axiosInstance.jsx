import axios from "axios";
import React from "react";

// yaha instance create kr dia hai main url ka isse bar-bar axios call nahi krna pdega hume har comp me..

const instance = axios.create({
  baseURL: "https://fakestoreapi.com/",
  timeout: 5000,
});

export default instance;

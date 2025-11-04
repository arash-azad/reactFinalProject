import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import api from "./api/api";
import { BrowserRouter, Routes, Route, RouterProvider } from "react-router-dom";
import Footer from "./Components/Layout/Footer";
import Header from "./Components/Layout/Header";
import Layout from "./Components/Layout/Layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import router from "./router";
import About from "./Pages/About";
import ShopPage from "./Pages/Shop/Shoppage";
import SingleProductPage from "./Components/Shop/single-product/SingleProductPage";
import HomePage from "./Pages/HomePage"
import ShoppingCart from "./Components/Shop/ShoppingCart";
function App() {
  const queryClient=new QueryClient();

  return (
    <>
    <BrowserRouter>
          <QueryClientProvider client={queryClient} >
                <Layout>
                    <Routes>
                          <Route path="/" element={<HomePage/>}/>
                          <Route path="/shop" element={<ShopPage/>}/>
                          <Route path="/shop/:category" element={<ShopPage />} /> 
                          <Route path="about" element={<About/>}/>
                          <Route path="cart" element={<ShoppingCart/>}/>
                          <Route path="/products/:idNumber" element={<SingleProductPage/>} />
                    </Routes>
              </Layout>
          </QueryClientProvider>
    </BrowserRouter>
    </>

);
}

export default App;

{/* <QueryClientProvider client={queryClient} >
<RouterProvider router={router} >
</RouterProvider>
</QueryClientProvider> */}
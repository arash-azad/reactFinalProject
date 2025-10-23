import { BrowserRouter, createBrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Shop/Shoppage";
import Layout from "./Components/Layout/Layout";
import About from "./Pages/About";

const router =createBrowserRouter([
//     {
//         path:"/",
//         element:<Layout/>,
//         children:[
//             {
//                 index:true,
//                 element:<ShopPage/>
//             },
//             {
//                 path:"about",
//                 element:<About/>
//             }
//     ]
//     }

])
export default router;
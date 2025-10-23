import Header from "./Header";
import Footer from "./Footer";
import { Children } from "react";
import { Outlet } from "react-router-dom";

export default function Layout(
    {children}
){
    return(
        <>
        <div className="flex flex-col min-h-screen justify-between" >
            <div>
            <Header></Header>
            <main className="w-full h-full mx-auto" >
        {/* <Outlet/> */}
        {children}
            </main>
            </div>
            <Footer></Footer>
        </div>
        </>
    )
}
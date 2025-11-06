import ScrollingTicker from "../Components/Home/ScrollingTicker";
import "../Modules/HomePage.css"
import { Link, NavLink } from "react-router-dom";
import Navitems from "../Components/Home/Navitems";
import DiscountTime from "../Components/DiscountTime";
import DisabledAccordion from "../Components/Home/QuestionsaAccordion";
import LastNews from "../Components/Home/LastNews";
import DiscountCodeCard from "../Components/Shop/DiscountCode";


export default function HomePage(){
    return(
        <>
        
    <ScrollingTicker/>
    <DiscountTime/>
    <DiscountCodeCard/>
    <Navitems/>
    <DisabledAccordion/>
    <LastNews/>

        </>
    )
}
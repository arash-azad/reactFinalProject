import "../../Modules/Navitems.css"
import { Link, NavLink } from "react-router-dom";

export default function Navitems(){
    return(
        <>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] px-[5vw] my-[5vh]">
      <NavLink to="/shop/all"
      ><div><div className="linktoshop shopall " ><span>All</span></div></div></NavLink>
      <NavLink to="/shop/jewelery"
      ><div><div className="linktoshop jewelery" ><span>Jewelery</span></div></div></NavLink>
      <NavLink to="/shop/electronics"
      ><div><div className="linktoshop electronics " ><span>Electronics</span></div></div></NavLink>
      <NavLink to="/shop/men's clothing"
      ><div><div className="linktoshop manclothing " ><span>clothing</span></div></div></NavLink>
    </div>
        </>
    )
}
    
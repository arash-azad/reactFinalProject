import { Link, NavLink } from "react-router-dom";
import "../Modules/CategoryButton.CSS"

export default function CategoryButtons() {
  return (
    <div className="categoryButtons select-none">
      <NavLink to="/shop/all"
        className={({ isActive }) => isActive ? "activeButton" : ""}
      ><button>All</button></NavLink>
      <NavLink to="/shop/jewelery"
        className={({ isActive }) => isActive ? "activeButton" : ""}
      ><button>Jewelery</button></NavLink>
      <NavLink to="/shop/electronics"
        className={({ isActive }) => isActive ? "activeButton" : ""}
      ><button>Electronics</button></NavLink>
      <NavLink to="/shop/men's clothing"
        className={({ isActive }) => isActive ? "activeButton" : ""}
      ><button>Men's Clothing</button></NavLink>
    </div>
  );
}



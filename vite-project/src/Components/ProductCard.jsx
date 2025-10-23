import { useNavigate } from "react-router-dom"
import "../Modules/ProductCard.css"
export default function ProductCard({id,title,imageUrl,price,category,rate,count}){
  const navigate=useNavigate();
    return(
        <>
          <div  key={id}
          
          className="cardItem">
            <div style={{display:"flex", width:"100%",flexDirection:"row",justifyContent:"space-between"}} >
          <span ><u>{rate}/5  <i className="bi bi-star-fill"></i></u></span>
          <span><u>{count}  </u><i className="bi bi-chat-left-dots"></i></span>
            </div>
            <img 
            onClick={()=>navigate(`/products/${id}`)}
              src={imageUrl} alt={title} className="cardImage" />
            <p><b>ID:</b> {id}</p>
            <p className="cardTitle">{title}</p>
            <p>{category}</p>
            <p style={{border:"5px solid white",borderRadius:"15px",padding:"5px"}}>
            <i className="bi bi-tag-fill"></i> price : {price}$<br/>
            </p>
          {/* <Counter/> */}
            <button className="buyNowBtn">
            <i className="bi bi-cart-fill"></i>
            <span className="btnText">Buy Now</span>
            <span className="priceTag">${price}</span>
            </button>

          </div>
        </>
    )

}
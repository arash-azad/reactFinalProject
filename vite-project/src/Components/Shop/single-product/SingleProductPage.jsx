// @ts-nocheck

import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"
import api from "../../../api/api"
import "../../../Modules/SingleProductPage.css"
import Counter from "../../Shared/Counter";

const productReviews = [
  "Very good",
  "Excellent quality",
  "Poor quality",
  "Completely satisfied",
  "Not recommended at all",
  "Worth buying",
  "Cheap and weak",
  "I liked it",
  "Needs improvement",
  "Very bad",
  "Reasonable price",
  "Not worth it",
  "Absolutely satisfied",
  "Expected more",
  "Perfect and flawless",
  "Almost good",
  "Average quality",
  "Good for gift",
  "Good warranty and service",
  "Not good at all",
  "Will buy again",
  "Did not like it",
  "Exactly like the picture",
  "Very low quality",
  "Fast delivery",
  "Not happy with purchase",
  "Had a good experience",
  "Never recommend",
  "Worth the price",
  "Everything was perfect"
];


export default function SingleProductPage(){
    const {idNumber}=useParams();
    async function queryFn(){
        return await api.get(`products/${idNumber}`)
    }

    const {data,isLoading}=useQuery({
        queryKey:[`single-product-${idNumber}`],
        queryFn
    })

    const getRandomReview = () => {
    const randomIndex = Math.floor(Math.random() * productReviews.length);
    return productReviews[randomIndex];
    };

    if(isLoading){
        return(<div>is loading ...</div>)
    }
    return(
        <>
    <div className="biggestInSingle">
      <div className=" itemsSingle imgSingles">
        <img src={data.image} alt="" />
      </div>
      <div className=" itemsSingle titlesSingle" >
        <h2 style={{marginBottom:"3vh"}} >{data.title}</h2>
        <h1 style={{marginBottom:"3vh"}}>{data.category}</h1>
        <h3 style={{outline:"2px solid white",padding:"5px",borderRadius:"10px"}} >{data.price} $</h3>
        <Counter/>
            <button className="buyNowBtn">
            <i className="bi bi-cart-fill"></i>
            <span className="btnText">Buy Now</span>
            <span className="priceTag">${data.price}</span>
            </button>
      </div>
      <div className=" itemsSingle descriptionSingle" >
        <p>{data.description}</p>
      </div>
    </div>
    <div className="commentsInSingle" >
      
        <h1 style={{float:"left"}} ><span><u>{data.rating.count}  </u><i class="bi bi-chat-left-dots"></i></span></h1>
        <h1 style={{float:"right"}} ><span ><u>{data.rating.rate}/5  <i class="bi bi-star-fill"></i></u></span></h1>
    </div>

    <div style={{marginTop:"2vh"}}>
        {Array.from({ length: data.rating.count }, (_, i) => (
        <p className="commentsSingle" key={i}>
        {getRandomReview()}
        </p>))}
    </div>

        </>
    )
}
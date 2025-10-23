import { useQuery } from "@tanstack/react-query"
import api from "../../api/api"
import ProductCard from "../../Components/ProductCard";
import "../../Modules/ShopPage.css"
import CategoryButtons from "../../Components/CategoryButton";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

export default function ShopPage() {
  const { category } = useParams(); 

  async function queryFn() {
    if (category && category !== "all") {
      return await api.get(`products/category/${category}`);
    } else {
      return await api.get("products");
    }
  }
  const{ data, isLoading, isError, error, refetch, status }=useQuery({
    queryKey: ["all-products"],
    queryFn,
  });

    useEffect(() => {
    refetch();
    }, [category, refetch]);


  if(isLoading){
    return(
      <div className="w-screen h-screen flex justify-center items-center" >
        <div className="Loading" ></div>
      </div>
  )
  }
  if(isError){
    return(<div>Error</div>)
  }


  
    return(
        <>
        <CategoryButtons/>
        <div className="allCardsInIt"  >
        <div className="gridWrapper" >{data.map(item=>(<ProductCard
        key={item.id}
        id={item.id}
        title={item.title}
        imageUrl={item.image}
        price={item.price}
        category={item.category}
        rate={item.rating.rate}
        count={item.rating.count}
        />))}</div>
        </div>
        </>
    )
}
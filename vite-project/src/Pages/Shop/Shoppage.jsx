import { useQuery } from "@tanstack/react-query"
import api from "../../api/api"
import ProductCard from "../../Components/ProductCard";
import "../../Modules/ShopPage.css"
import CategoryButtons from "../../Components/CategoryButton";
import { useParams } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import debounce from "lodash/debounce";

export default function ShopPage() {
  const { category } = useParams(); 
  const [searchTerms, setSearchTerms] = useState({});
  const [filteredData, setFilteredData] = useState({});

  async function queryFn() {
    if (category && category !== "all") {
      return await api.get(`products/category/${category}`);
    } else {
      return await api.get("products");
    }
  }

  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["all-products", category],
    queryFn,
  });

  useEffect(() => {
    refetch();
  }, [category, refetch]);

  const handleSearch = useMemo(() => {
    return debounce((term, cat, data) => {
      if (data) {
        const filtered = data.filter((item) =>
          item.title.toLowerCase().includes(term.toLowerCase())
        );
        setFilteredData(prev => ({ ...prev, [cat]: filtered }));
      }
    }, 300);
  }, []);

  const onChangeSearch = (e) => {
    const term = e.target.value;
    setSearchTerms(prev => ({ ...prev, [category]: term }));
    handleSearch(term, category, data);
  };

  useEffect(() => {
    if (data) {
      setFilteredData(prev => ({ ...prev, [category]: data }));
      setSearchTerms(prev => ({ ...prev, [category]: "" }));
    }
  }, [data, category]);

  if (isLoading) {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <div className="Loading"></div>
      </div>
    );
  }

  if (isError) {
      <div className="w-screen h-screen flex justify-center items-center">
        <div className="error"></div>
      </div>  }

  return (
    <>
      <CategoryButtons />
        <div className="searchWrapper text-center my-5">
          <input
            type="text"
            value={searchTerms[category] || ""}
            onChange={onChangeSearch}
            placeholder="Search by title..."
            className="searchInput bg-white  placeholder-black placeholder:bold placeholder:[200px] px-3 py-2 w-[20vw] rounded-lg border-5 border-black"
          />
        </div>

      <div className="allCardsInIt">
        <div className="gridWrapper">
          {(filteredData[category] || []).map((item) => (
            <ProductCard
              key={item.id}
              id={item.id}
              title={item.title}
              imageUrl={item.image}
              price={item.price}
              category={item.category}
              rate={item.rating.rate}
              count={item.rating.count}
            />
          ))}
        </div>
      </div>
    </>
  );
}

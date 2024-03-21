import React, { useEffect, useState } from "react";
import "./CategoryPage.scss";
import ProductListSmall from "../ProductListSmall/ProductListSmall";
import TopNav from "../../components/TopNav/TopNav";
import Searchbar from "../../components/Searchbar/Searchbar";

import { useParams } from "react-router-dom"; // Importiere useParams, um den Parameter aus der URL zu erhalten
import { backendUrl } from "../../api/api";

const CategoryPage = () => {
    const { category } = useParams();
    const [selectedCategory, setSelectedCategory] = useState(category);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedSortBy, setSelectedSortBy] = useState(null);
    const [priceRange, setPriceRange] = useState({ min: 0, max: 999 });
    const [searchParams, setSearchParams] = useState(null);
    const [promotionProducts, setPromotionProducts] = useState();
    const { deal } = useParams();
  
  
    const [categories, setCategories] = useState([
        "All",
        "Vegetable",
        "Fruit",
        "Meat",
        "Seafood",
        "Bread"
    ]);
  
   const fetchProducts = async () => {
    try {
      const response = await fetch(backendUrl + `/api/v1/promotions/${deal}`);
      const { status, data, error } = await response.json();
      if (status !== "success") throw new Error(error);
      else console.log(data.promotions[0].products);
      setPromotionProducts(data.promotions[0].products);
    } catch (error) {
      console.log(error);
    }
  };

   useEffect(() => {
        const filteredParams = {
            category: selectedCategory,
            searchTerm,
            selectedSortBy,
            priceRange
        };
     fetchProducts();
        setSearchParams(filteredParams);
        console.log("Filtered parameters:", filteredParams);
    }, [selectedCategory, searchTerm, selectedSortBy, priceRange]);

    const handleResetSearch = () => {
        setSearchTerm('');
        setSelectedSortBy(null);
        setPriceRange({ min: 0, max: 999 });
        setSelectedCategory(category);
    };


  const handleSearchInitiated = (params) => {
    setSearchParams(params);
  };

 
    const handleCategorySelect = (category) => {
        if (category === "All"){
            setSelectedCategory(null)
            return
        }
        setSelectedCategory(category);
    };

    return ( 
        <section className="category-page">
            <TopNav location="All Products"/>
            <Searchbar 
                searchTerm={searchTerm} 
                setSearchTerm={setSearchTerm} 
                selectedSortBy={selectedSortBy} 
                setSelectedSortBy={setSelectedSortBy} 
                priceRange={priceRange} 
                setPriceRange={setPriceRange} 
                onResetSearch={handleResetSearch} 
            />
            <div className="category-select">
                {categories.map((category, index) => (
                     <button 
                         className={`category-select-button ${selectedCategory === category ? 'active' : ''}`} 
                         key={index}
                         onClick={() => handleCategorySelect(category)}
                     >
                         {category}
                     </button>
                ))}
            </div>
            <ProductListSmall
        deal={deal}
        endpoint="products"
        filters={searchParams}
        promotionProducts={promotionProducts}
      />
        </section> 
    );
}


export default CategoryPage;
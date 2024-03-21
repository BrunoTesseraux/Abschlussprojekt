import React, { useEffect, useState } from "react";
import "./CategoryPage.scss";
import ProductListSmall from "../ProductListSmall/ProductListSmall";
import TopNav from "../../components/TopNav/TopNav";
import Searchbar from "../../components/Searchbar/Searchbar";
import { useParams } from "react-router-dom";

const CategoryPage = () => {
    const { category } = useParams();
    const [selectedCategory, setSelectedCategory] = useState(category);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedSortBy, setSelectedSortBy] = useState(null);
    const [priceRange, setPriceRange] = useState({ min: 0, max: 999 });
    const [searchParams, setSearchParams] = useState(null);

    const [categories, setCategories] = useState([
        "All",
        "Vegetable",
        "Fruit",
        "Meat",
        "Seafood",
        "Bread"
    ]);

    useEffect(() => {
        const filteredParams = {
            category: selectedCategory,
            searchTerm,
            selectedSortBy,
            priceRange
        };
        setSearchParams(filteredParams);
        console.log("Filtered parameters:", filteredParams);
    }, [selectedCategory, searchTerm, selectedSortBy, priceRange]);

    const handleResetSearch = () => {
        setSearchTerm('');
        setSelectedSortBy(null);
        setPriceRange({ min: 0, max: 999 });
        setSelectedCategory(category);
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
            <ProductListSmall endpoint="products" filters={searchParams}/>
        </section> 
    );
}

export default CategoryPage;
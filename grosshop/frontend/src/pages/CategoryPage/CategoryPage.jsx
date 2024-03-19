import React, { useEffect, useState } from "react";
import "./CategoryPage.scss";
import ProductListSmall from "../ProductListSmall/ProductListSmall";
import TopNav from "../../components/TopNav/TopNav";
import Searchbar from "../../components/Searchbar/Searchbar";

const CategoryPage = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [searchParams, setSearchParams] = useState(null);

    // Verwenden Sie ein Array für die Kategorien
    const [categories, setCategories] = useState([
        "Obst und Gemüse",
        "Fleisch und Geflügel",
        "Milchprodukte",
        "Getränke",
        "Backwaren",
        "Tiefkühlkost",
        "Haushaltswaren",
        "Süßigkeiten und Snacks"
    ]);

    useEffect(() => {
        // Filterlogik hier implementieren, abhängig von selectedCategory und searchParams
        const filteredParams = {
            category: selectedCategory,
            ...searchParams
        };
        console.log("Filtered parameters:", filteredParams);
        // Hier könntest du den gefilterten Parameter an die ProductListSmall-Komponente weitergeben
    }, [selectedCategory, searchParams]);

    const handleResetSearch = () => {
        setSearchParams(null); // Suchparameter zurücksetzen
        setSelectedCategory(null); // Kategorie zurücksetzen
    };

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
    };

    const handleSearchInitiated = (params) => {
        setSearchParams(params);
    };

    return ( 
        <section className="category-page">
            <TopNav location="All Products"/>
            <Searchbar onSearchInitiated={handleSearchInitiated} onResetSearch={handleResetSearch}/>
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
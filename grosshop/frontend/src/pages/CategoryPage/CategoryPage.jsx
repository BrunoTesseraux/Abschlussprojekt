import React, { useEffect, useState } from "react";
import "./CategoryPage.scss";
import ProductListSmall from "../ProductListSmall/ProductListSmall";
import TopNav from "../../components/TopNav/TopNav";
import Searchbar from "../../components/Searchbar/Searchbar";
import { useParams } from "react-router-dom"; // Importiere useParams, um den Parameter aus der URL zu erhalten

const CategoryPage = () => {
    const { category } = useParams(); // Extrahiere den Parameter "category" aus der URL
    const [selectedCategory, setSelectedCategory] = useState(category);
    const [searchParams, setSearchParams] = useState(null);

    // Verwenden Sie ein Array für die Kategorien
    const [categories, setCategories] = useState([
        "All",
        "Vegetable",
        "Fruit",
        "Meat",
        "Seafood",
        "Bread"
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

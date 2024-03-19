import { useState } from "react";
import "./CategoryPage.scss"
import ProductListSmall from "../ProductListSmall/ProductListSmall";
import TopNav from "../../components/TopNav/TopNav";

const CategoryPage = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);

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

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
    };

    return ( 
        <section className="category-page">
            <TopNav location="searchbar"/>
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
            <ProductListSmall endpoint="products"/>
        </section> 
    );
}
 
export default CategoryPage;
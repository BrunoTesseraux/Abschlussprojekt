import React, { useState, useRef } from 'react';
import TopNav from '../TopNav/TopNav';
import MultiRangeSlider from './MultiRangeSlider';
import './Filter.scss';

const Filter = () => {
const [selectedSortBy, setSelectedSortBy] = useState(null);
const [selectedCategory, setSelectedCategory] = useState(null);
const [priceRange, setPriceRange] = useState({ min: 0, max: 999 });
  const [reloadKey, setReloadKey] = useState(0); // State to trigger component reload


const [products, setProducts] = useState([
    {
    _id: "60953e3b0b02ff3a44e96101",
    productName: "Bavarian Beer",
    productImage: "/bier.jpg",
    price: 11.00,
    rating: 6,
    ratio: [
        { amount: 500, unit: "ml" },
        { amount: 330, unit: "ml" }
    ],
    cuisine: "German",
    category: "Beer"
    },
    {
    _id: "60953e3b0b02ff3a44e96102",
    productName: "Italian Pizza",
    productImage: "/pizza.jpg",
    price: 15.00,
    rating: 8,
    ratio: [
        { amount: 1, unit: "piece" }
    ],
    cuisine: "Italian",
    category: "Food"
    },
    {
    _id: "60953e3b0b02ff3a44e96103",
    productName: "French Croissant",
    productImage: "/croissant.jpg",
    price: 5.00,
    rating: 7,
    ratio: [
        { amount: 1, unit: "piece" }
    ],
    cuisine: "French",
    category: "Bakery"
    }
]);

const uniqueCategories = Array.from(new Set(products.map((product) => product.category)));

const handleSortByClick = (option) => {
    setSelectedSortBy(option);
};

const handleCategoryClick = (option) => {
    setSelectedCategory(option);
};

const handleClearAll = () => {
    setSelectedSortBy(null);
    setSelectedCategory(null);
    setPriceRange({ min: 0, max: 999 });
    setReloadKey(prevKey => prevKey + 1);
};

const handlePriceChange = (priceRange) => {
    setPriceRange(priceRange);
};

const handleSearch = () => {
    const searchQuery = {
    sortBy: selectedSortBy,
    category: selectedCategory,
    minPrice: priceRange.min,
    maxPrice: priceRange.max,
    };
    console.log('Search query:', searchQuery);
    // Here you can perform any action with the search query, like filtering products
};

return (
    <section className="filter" key={reloadKey}>
    <TopNav location="Filters" />
    <div className="button-select">
        <legend>
        Sort by: <button onClick={handleClearAll}>Clear All</button>
        </legend>
        <div className="sort-options">
        <button
            className={selectedSortBy === 'lowest' ? 'active' : ''}
            onClick={() => handleSortByClick('lowest')}
        >
            Lowest
        </button>
        <button
            className={selectedSortBy === 'highest' ? 'active' : ''}
            onClick={() => handleSortByClick('highest')}
        >
            Highest
        </button>
        <button
            className={selectedSortBy === 'best' ? 'active' : ''}
            onClick={() => handleSortByClick('best')}
        >
            Best
        </button>
        <button
            className={selectedSortBy === 'newest' ? 'active' : ''}
            onClick={() => handleSortByClick('newest')}
        >
            Newest
        </button>
        </div>
    </div>
    <div className="price-slider">
        <legend>Price range</legend>
        <MultiRangeSlider
        min={0}
        max={999}
        onChange={handlePriceChange}
        />
    </div>
    <div className="button-select">
        <legend>Category</legend>
        <div className="sort-options">
        {uniqueCategories.map((category, index) => (
            <button
            key={index}
            className={selectedCategory === category ? 'active' : ''}
            onClick={() => handleCategoryClick(category)}
            >
            {category}
            </button>
        ))}
        </div>
    </div>
    <button className='search' onClick={handleSearch}>Search</button>
    </section>
);
};

export default Filter;
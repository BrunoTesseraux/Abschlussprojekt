import React, { useEffect, useState } from 'react';
import './Searchbar.scss';
import Filter from '../Filter/Filter';

const Searchbar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedSortBy, setSelectedSortBy] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [priceRange, setPriceRange] = useState({ min: 0, max: 999 });
    const [isSearchActive, setIsSearchActive] = useState(false);


    const onSearch = () => {
        setIsSearchActive(false);
        const searchParams = {
            searchTerm,
            selectedSortBy,
            selectedCategory,
            priceRange
        };
        // Hier die Logik für die Suchfunktion einfügen
        console.log('Search initiated with parameters:', searchParams);
    };

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            onSearch();
        }
    };

    const handleFocus = () => {
        setIsSearchActive(true);
    };

    const handleResetSearch = () => {
        setSearchTerm('');
        setSelectedSortBy(null);
        setSelectedCategory(null);
        setPriceRange({ min: 0, max: 999 });
    };

    return (
        <section className="searchbar">
            <div className="searchbar-container">
                <input
                    type="text"
                    name="search"
                    placeholder="Search for product"
                    value={searchTerm}
                    onChange={handleInputChange}
                    onFocus={handleFocus}
                    onKeyDown={handleKeyPress}
                />
                <img src="/search.svg" alt="" />
            </div>
            {isSearchActive && (
                <div className="filtercontainer">
                    <Filter
                        resetSearch={handleResetSearch}
                        searchTerm={searchTerm}
                        selectedSortBy={selectedSortBy}
                        setSelectedSortBy={setSelectedSortBy}
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                        priceRange={priceRange}
                        setPriceRange={setPriceRange}
                        onSearch={onSearch}
                    />
                </div>
            )}
        </section>
    );
};

export default Searchbar;
import React, { useState } from 'react';
import './Searchbar.scss';
import Filter from '../Filter/Filter';

const Searchbar = ({ onSearchInitiated, onResetSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedSortBy, setSelectedSortBy] = useState(null);
    const [priceRange, setPriceRange] = useState({ min: 0, max: 999 });
    const [isSearchActive, setIsSearchActive] = useState(false);

    const onSearch = () => {
        setIsSearchActive(false);
        const searchParams = {
            searchTerm,
            selectedSortBy,
            priceRange
        };
        // Call the function passed from CategoryPage to initiate search
        onSearchInitiated(searchParams);
    };

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };
    const handleResetSearch = () => {
        setSearchTerm('');
        setPriceRange({ min: 0, max: 999 });
        onResetSearch(); // Aufruf der Reset-Funktion
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            onSearch();
        }
    };

    const handleFocus = () => {
        setIsSearchActive(true);
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
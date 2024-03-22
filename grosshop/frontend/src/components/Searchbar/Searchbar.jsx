import React, { useState } from 'react';
import './Searchbar.scss';
import Filter from '../Filter/Filter';
import { useNavigate } from 'react-router-dom';

const Searchbar = ({ 
    searchTerm, 
    setSearchTerm, 
    selectedSortBy, 
    setSelectedSortBy, 
    priceRange, 
    setPriceRange, 
    onSearch, 
    onResetSearch 
}) => {
    const [isSearchActive, setIsSearchActive] = useState(false);
    const navigate = useNavigate();


    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleResetSearch = () => {
        setSearchTerm('');
        setPriceRange({ min: 0, max: 999 });
        setIsSearchActive(false);

        onResetSearch(); // Aufruf der Reset-Funktion
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            setIsSearchActive(false);
        }
    };

    const handleFocus = () => {
        navigate("/categorypage");
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
                        setIsSearchActive={setIsSearchActive} // Weitergabe des Setters für isSearchActive
                    />
                </div>
            )}
        </section>
    );
};

export default Searchbar;
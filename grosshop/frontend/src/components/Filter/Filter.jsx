import React, { useEffect, useState } from 'react';
import MultiRangeSlider from './MultiRangeSlider';
import './Filter.scss';

const Filter = ({ resetSearch, searchTerm, selectedSortBy, setSelectedSortBy, priceRange, setPriceRange, setIsSearchActive, isSearchActive }) => {
    const [formActive, setFormActive] = useState(false);

    useEffect(() => {
        setTimeout(() => {
          setFormActive(true);
        }, 50); 
      }, []);

    return (
        <section className={`filter ${formActive ? 'active' : ''}`}>
            <div className="button-select">
                <legend>
                    Sort by: <button onClick={resetSearch}>Clear All</button>
                </legend>
                <div className="sort-options">
                    <button
                        className={selectedSortBy === 'lowest' ? 'active' : ''}
                        onClick={() => setSelectedSortBy('lowest')}
                    >
                        Lowest
                    </button>
                    <button
                        className={selectedSortBy === 'highest' ? 'active' : ''}
                        onClick={() => setSelectedSortBy('highest')}
                    >
                        Highest
                    </button>
                    <button
                        className={selectedSortBy === 'best' ? 'active' : ''}
                        onClick={() => setSelectedSortBy('best')}
                    >
                        Best
                    </button>
                    <button
                        className={selectedSortBy === 'newest' ? 'active' : ''}
                        onClick={() => setSelectedSortBy('newest')}
                    >
                        Newest
                    </button>
                </div>
            </div>
            <div className="price-slider">
                <legend>Price range</legend>
                <MultiRangeSlider
                    min={0}
                    max={30}
                    value={priceRange}
                    onChange={setPriceRange}
                />
            </div>
            <button className='search' onClick={() => setIsSearchActive(false)}>Search</button>
        </section>
    );
};

export default Filter;
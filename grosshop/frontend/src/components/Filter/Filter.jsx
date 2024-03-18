import React, { useEffect, useState } from 'react';
import MultiRangeSlider from './MultiRangeSlider';
import './Filter.scss';

const Filter = ({ resetSearch, searchTerm, selectedSortBy, setSelectedSortBy, selectedCategory, setSelectedCategory, priceRange, setPriceRange, onSearch }) => {
    const [formActive, setFormActive] = useState(false);

    // const uniqueCategories = Array.from(new Set(products.map((product) => product.category)));
    
    
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
                    max={999}
                    value={priceRange}
                    onChange={setPriceRange}
                />
            </div>
            <div className="button-select">
                <legend>Category</legend>
                <div className="sort-options">
                    {/* {uniqueCategories.map((category, index) => (
                        <button
                            key={index}
                            className={selectedCategory === category ? 'active' : ''}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </button>
                    ))} */}
                </div>
            </div>
            <button className='search' onClick={onSearch} >Search</button>
        </section>
    );
};

export default Filter;
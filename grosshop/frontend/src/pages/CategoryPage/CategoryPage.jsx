import { useState } from "react";
import "./CategoryPage.scss"
import ProductListSmall from "../ProductListSmall/ProductListSmall";
import TopNav from "../../components/TopNav/TopNav";

const CategoryPage = () => {

    const [selectedCategory, setSelectedCategory] = useState(null);

    const [shops, setShops] = useState([
        {
        name: 'Shop 1',
        products: [
            {
            productName: 'Produkt 1',
            productImage: '/product1.jpg',
            price: 10.99,
            rating: 4.5,
            ratio: [{ amount: 500, unit: 'g' }],
            cuisine: 'Cuisine 1',
            category: 'Seafood',
            },
            {
            productName: 'Produkt 2',
            productImage: '/product2.jpg',
            price: 15.99,
            rating: 4.0,
            ratio: [{ amount: 250, unit: 'g' }],
            cuisine: 'Cuisine 2',
            category: 'Fruit',
            },
            {
            productName: 'Produkt 3',
            productImage: '/product3.jpg',
            price: 8.49,
            rating: 3.8,
            ratio: [{ amount: 100, unit: 'g' }],
            cuisine: 'Cuisine 3',
            category: 'Appliances',
            },
        ],
        },
        {
        name: 'Shop 2',
        products: [
            {
            productName: 'Produkt 4',
            productImage: '/product4.jpg',
            price: 12.99,
            rating: 4.2,
            ratio: [{ amount: 300, unit: 'ml' }],
            cuisine: 'Cuisine 4',
            category: 'Bread',
            },
            {
            productName: 'Produkt 5',
            productImage: '/product5.jpg',
            price: 9.99,
            rating: 4.6,
            ratio: [{ amount: 200, unit: 'g' }],
            cuisine: 'Cuisine 5',
            category: 'Tea',
            },
            {
            productName: 'Produkt 6',
            productImage: '/product6.jpg',
            price: 7.99,
            rating: 3.9,
            ratio: [{ amount: 150, unit: 'g' }],
            cuisine: 'Cuisine 6',
            category: 'Vegetables',
            },
        ],
        },
    ]);

    const categories = [...new Set(shops.flatMap(shop => shop.products.map(product => product.category)))];

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
             >{category}</button>
            ))}
        </div>
        <ProductListSmall/>
    </section> );
}
 
export default CategoryPage;
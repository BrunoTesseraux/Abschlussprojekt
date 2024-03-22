import { Link } from "react-router-dom";
import CategoryCard from "../CategoryCard/CategoryCard";
import "./CategoryList.scss"

const CategoryList = () => {
    return ( 
        <div className="category-list">
            <CategoryCard imageUrl="/vegetables.png" title="Vegetable" />
            <CategoryCard imageUrl="/fruit.png" title="Fruit" />
            <CategoryCard imageUrl="/meat.png" title="Meat" />
            <CategoryCard imageUrl="/seafood.png" title="Seafood" />
            <CategoryCard imageUrl="/bread.png" title="bread" />

        </div>
     );
}
 
export default CategoryList;
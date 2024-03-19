import { Link } from "react-router-dom";
import CategoryCard from "../CategoryCard/CategoryCard";
import "./CategoryList.scss"

const CategoryList = () => {
    return ( 
        <div className="category-list">
            <Link to="/categorypage">
            <CategoryCard imageUrl="/vegetables.png" title="Vegetables" />
            </Link>
            <CategoryCard imageUrl="/fruit.png" title="Fruit" />
            <CategoryCard imageUrl="/meat.png" title="Meat" />
            <CategoryCard imageUrl="/ArrowRight.png" title="All" />
        </div>
     );
}
 
export default CategoryList;
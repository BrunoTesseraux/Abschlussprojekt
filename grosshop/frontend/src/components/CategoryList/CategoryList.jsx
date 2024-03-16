import CategoryCard from "../CategoryCard/CategoryCard";
import "./CategoryList.scss"

const CategoryList = () => {
    return ( 
        <div className="category-list">
            <CategoryCard imageUrl="/bier.jpg" title="Bier" />
            <CategoryCard imageUrl="/bier.jpg" title="Bier" />
            <CategoryCard imageUrl="/bier.jpg" title="Bier" />
            <CategoryCard imageUrl="/ArrowRight.png" title="All" />
        </div>
     );
}
 
export default CategoryList;
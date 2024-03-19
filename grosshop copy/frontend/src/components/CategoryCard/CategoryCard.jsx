import "./CategoryCard.scss";

const CategoryCard = ({ imageUrl, title }) => {
    return (
        <article className="category-card">
            <img src={imageUrl} alt={title} />
            <div className="shadow"></div>
            <h1>{title}</h1>
        </article>
    );
}

export default CategoryCard;
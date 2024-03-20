import React from "react";
import { Link } from "react-router-dom";
import "./CategoryCard.scss";

const CategoryCard = ({ imageUrl, title }) => {
    return (
        <article className="category-card">
            <Link to={`/categorypage/${title}`}> {/* Hier wird der Kategorienname in die URL eingefügt */}
                <img src={imageUrl} alt={title} />
                <div className="shadow"></div>
                <h1>{title}</h1>
            </Link>
        </article>
    );
}

export default CategoryCard;

import { useEffect, useState } from "react";
import "./PromotionSlider.scss";
import { backendUrl } from "../../api/api";
import { Link } from "react-router-dom";

const PromotionSlider = () => {
  const [promotions, setPromotions] = useState([]);
  const deals = ["today", "member", "product"];

  useEffect(() => {
    const fetchPromotions = async () => {
      try {
        const response = await fetch(backendUrl + "/api/v1/promotions");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const responseData = await response.json();
        console.log("promotions!!!!!!!!!!!!!!!!!!!!!!", responseData);
        setPromotions(responseData.data.promotions);
      } catch (error) {
        console.error("Error fetching promotions:", error);
      }
    };

    fetchPromotions();
  }, []);

  const deal = promotions.find((promotion) => deals.includes(promotion.deal));
  console.log(deal);
  return (
    <section className="promotion-slider">
      {promotions.map((promotion) => (
        <Link to={`/${promotion.deal}Deals`}>
          <div className="promotion-img" key={promotion._id}>
            <img src={promotion.promotionPicture} alt={promotion.title} />
            <p>{promotion.title}</p>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default PromotionSlider;

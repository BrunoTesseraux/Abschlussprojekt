import { useEffect, useState } from "react";
import "./PromotionSlider.scss"
import { backendUrl } from "../../api/api";

const PromotionSlider = () => {

    const [promotions, setPromotions] = useState([]);

    useEffect(() => {
      const fetchPromotions = async () => {
          try {
              const response = await fetch(backendUrl + "/api/v1/promotions");
              if (!response.ok) {
                  throw new Error("Network response was not ok");
              }
              const responseData = await response.json();
              setPromotions(responseData.data.promotions); 
          } catch (error) {
              console.error("Error fetching promotions:", error);
          }
      };
  
      fetchPromotions();
  }, []);
console.log(promotions);

    return ( 
        <section className="promotion-slider">
        {promotions.map((promotion) => (
          <div className="promotion-img" key={promotion._id}>
            <img src={promotion.promotionPicture} alt={promotion.title} />
            <p>{promotion.title}</p>
          </div>
        ))}
      </section>
    );
}
 
export default PromotionSlider;
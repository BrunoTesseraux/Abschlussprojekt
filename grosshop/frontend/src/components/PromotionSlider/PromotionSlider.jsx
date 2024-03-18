import { useState } from "react";
import "./PromotionSlider.scss"

const PromotionSlider = () => {

    const [promotions, setPromotions] = useState([
        {
          _id: "60953e3b0b02ff3a44e96101",
          title: "Sommerangebot",
          description: "Sommerschlussverkauf mit großartigen Angeboten!",
          discount: 20,
          startDate: "2023-06-01T00:00:00.000Z",
          endDate: "2023-08-31T23:59:59.000Z",
          products: [],
          deal: "today",
          shopId: "60953e3b0b02ff3a44e96100",
          createdAt: "2023-05-01T12:00:00.000Z",
          updatedAt: "2023-05-01T12:00:00.000Z",
          imgPath: "/bier.jpg", // Beispiel für den Bildpfad

        },
        {
          _id: "60953e3b0b02ff3a44e96102",
          title: "Mitgliederrabatt",
          description: "Exklusiver Rabatt für Mitglieder!",
          discount: 15,
          startDate: "2023-01-01T00:00:00.000Z",
          endDate: "2023-12-31T23:59:59.000Z",
          products: [],
          deal: "member",
          shopId: "60953e3b0b02ff3a44e96100",
          createdAt: "2023-01-01T12:00:00.000Z",
          updatedAt: "2023-01-01T12:00:00.000Z",
          imgPath: "/bier.jpg", // Beispiel für den Bildpfad

        },
        {
          _id: "60953e3b0b02ff3a44e96103",
          title: "Produktrabatt",
          description: "Rabatt auf ausgewählte Produkte!",
          discount: 10,
          startDate: "2023-09-01T00:00:00.000Z",
          endDate: "2023-09-30T23:59:59.000Z",
          products: [
            { productId: "60953e3b0b02ff3a44e96104" }, // Annahme: Produkt-ID
            { productId: "60953e3b0b02ff3a44e96105" }, // Annahme: Produkt-ID
          ],
          deal: "product",
          shopId: "60953e3b0b02ff3a44e96100",
          createdAt: "2023-08-01T12:00:00.000Z",
          updatedAt: "2023-08-01T12:00:00.000Z",
          imgPath: "/bier.jpg", // Beispiel für den Bildpfad
        },
      ]);

    return ( 
        <section className="promotion-slider">
        {promotions.map((promotion) => (
          <div className="promotion-img" key={promotion._id}>
            <img src={promotion.imgPath} alt={promotion.title} />
            <p>{promotion.title}</p>
          </div>
        ))}
      </section>
    );
}
 
export default PromotionSlider;
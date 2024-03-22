import { useEffect, useState } from "react";
import ProductCardSmall from "../../components/ProductCardSmall/ProductCardSmall";
import "./ProductListSmall.scss";
import { backendUrl } from "../../api/api";
import { useLocation } from "react-router-dom";

const ProductListTest = ({
  maxProducts,
  endpoint,
  filters,
  promotionProducts,
  deal,
}) => {
  const [products, setProducts] = useState([]);
  const location = useLocation().pathname.split("/").slice(1).join();

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(backendUrl + `/api/v1/` + endpoint);
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const { status, data, error } = await response.json();
          if (status !== "success") throw new Error(error);
          else console.log("Data incoming", data);
            setProducts(data.promotions[0].products);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      fetchData();

      // Cleanup function (optional)
      return () => {
        // Perform cleanup, if necessary
      };
    }, []);
    console.log("test", products);
  return (

    <section className="product-list-small">
      {products.slice(0, maxProducts).map((product, index) => {
        index++; // Zähler inkrementieren

        // Überprüfen, ob der Index durch 10 teilbar ist und ob es nicht das letzte Produkt ist
        if (index % 7 === 0 && index !== maxProducts) {
          return (
            <img
              key={`img-${index}`}
              src="/bread.png"
              className="separation-picture"
              alt="Additional Image"
            />
          );
        } else {
          return <ProductCardSmall key={product._id} product={product} />;
        }
      })}
    // </section>
  );
};

export default ProductListTest;

import { useEffect, useState } from "react";
import "./welcome.scss";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const [showOverlay, setShowOverlay] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOverlay(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="welcome-page">
      <img src="/grocery.svg" alt="Logo" />
      <h1>
        <span>GrosS</span>hop
      </h1>
      <h2>Welcome to our Groshop</h2>
      <p>
        Herzlich willkommen auf unserer Plattform, wo Qualität und
        Bequemlichkeit Hand in Hand gehen. Bei uns finden Sie eine breite
        Auswahl an frischen Lebensmitteln, hochwertigen Produkten und vielem
        mehr - alles mit nur einem Klick. Wir kümmern uns um den Rest, damit Sie
        mehr Zeit für die Dinge haben, die Ihnen am wichtigsten sind.
      </p>
      <div>
        <button onClick={() => navigate("/signup")}>Create New Account</button>
        <button onClick={() => navigate("/login")}>Sign In Your Account</button>
      </div>
      <div className={`start-overlay ${showOverlay ? "" : "hide-overlay"}`}>
        <img src="/grocery-2.svg" alt="Logo" />
        <h1>
          <span>GrosS</span>hop
        </h1>
      </div>
    </div>
  );
};

export default Welcome;

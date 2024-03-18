import { useEffect, useState } from "react";
import "./SuccessNotification.scss";
import { Navigate } from "react-router-dom";

const SuccessNotification = () => {
  const [redirectNow, setRedirectNow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRedirectNow(true);
    }, 3000); // 3 Sekunden Verzögerung

    return () => clearTimeout(timer); // Bereinige den Timer, wenn die Komponente demontiert wird
  }, []);

  if (redirectNow) {
    return <Navigate to="/home" />;
  }
  return (
    <section className="success-notification">
      <div className="notification">
        <img src="/success.svg" alt="" />
        <div className="shadow"></div>
        <h1>Welcome to Grosshop</h1>
        <p>You have successfully created your account</p>
      </div>
    </section>
  );
};

export default SuccessNotification;

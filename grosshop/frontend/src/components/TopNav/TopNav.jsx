import { useNavigate } from "react-router-dom";
import "./TopNav.scss";
import Searchbar from "../Searchbar/Searchbar";

const TopNav = ({ location, actionType, onAddToCartClick }) => {
  const navigate = useNavigate();
  let actionElement;
  let actionElementTwo;

  switch (actionType) {
    case "bin":
      actionElement = <img src="/bin.svg" alt="bin" onClick={() => onAddToCartClick()}/>;
      break;
    default:
      actionElement = <div />;
      break;
  }

  const goBack = () => navigate(-1);

  return (
    <div className="top-nav">
      <img src="/previous.svg" alt="back button" onClick={goBack} />
      {location}
      {actionElement}
    </div>
  );
};

export default TopNav;

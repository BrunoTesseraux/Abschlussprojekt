import { useNavigate } from "react-router-dom";
import "./TopNav.scss";

const TopNav = ({ location, actionType }) => {
  const navigate = useNavigate();
  let actionElement;

  switch (actionType) {
    case "bin":
      actionElement = <img src="/bin.svg" alt="bin" />;
      break;
    default:
      actionElement = <div />;
      break;
  }

  const goBack = () => navigate(-1);

  return (
    <div className="top-nav">
      <img src="./previous.svg" alt="back button" onClick={goBack} />
      <p>{location}</p>
      {actionElement}
    </div>
  );
};

export default TopNav;

import { useContext, useEffect, useState } from "react";
import "./Profile.scss";
import TopNav from "../../components/TopNav/TopNav";
import ImageUpload from "../../components/ImageUpload/ImageUpload";
import { UserContext } from "../../contextes/UserContext";
import { Link } from "react-router-dom";

const Profile = () => {
  const [isImageUploadActive, setImageUploadActive] = useState(false);
  const { user } = useContext(UserContext);

  const formatDate = (dateString) => {
    const parts = dateString.split(".");
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1; // Monate in JavaScript beginnen mit 0 für Januar
    const year = parseInt(parts[2], 10);

    // Erstelle ein neues Datumsobjekt
    const dateOfBirth = new Date(year, month, day);

    // Formatieren des Datums
    const dayFormatted = String(dateOfBirth.getDate()).padStart(2, "0");
    const monthFormatted = String(dateOfBirth.getMonth() + 1).padStart(2, "0");
    const yearFormatted = dateOfBirth.getFullYear();
    return `${dayFormatted}.${monthFormatted}.${yearFormatted}`;
  };

  const handleCameraBorderClick = () => {
    setImageUploadActive(true);
  };

  const handleImageUploadClose = () => {
    setImageUploadActive(false);
  };

  return (
    <section className="profile">
      <div className="gradient-background">
        <TopNav location="Profile" />
        <div className="profile-picture-container">
          <img
            src={user.profilePicture || ""}
            className="profile-picture"
            alt=""
          />
          <div
            className={`camera-border ${isImageUploadActive ? "active" : ""}`}
            onClick={handleCameraBorderClick}
          >
            <img src="./camera-icon.svg" alt="" />
          </div>
          {isImageUploadActive && (
            <ImageUpload onClose={handleImageUploadClose} />
          )}
        </div>
      </div>
      <div className="detail-wrapper">
        <p className="legend-styling">Name</p>
        <p>{user.name}</p>
        <div className="divider"></div>
        <p className="legend-styling">Email</p>
        <p>{user.email}</p>
        <div className="divider"></div>
        {user.dateOfBirth && (
          <>
            <p className="legend-styling">Date of Birth</p>
            <p>{formatDate(user.dateOfBirth)}</p>
            <div className="divider"></div>
          </>
        )}
        {user.phoneNumber && (
          <>
            <p className="legend-styling">Phone</p>
            <p>{user.phoneNumber}</p>
            <div className="divider"></div>
          </>
        )}
        {user.address && (
          <>
            <p className="legend-styling">Shipping Address</p>
            {user.address.street && (
              <p>
                {user.address.street}, {user.address.streetNumber}
              </p>
            )}
            {(user.address.city || user.address.zip) && (
              <p>{`${user.address.zip}, ${user.address.city}`}</p>
            )}
            <div className="divider"></div>
          </>
        )}
        <p className="legend-styling">Membership</p>
        <p>{user.member ? "Active" : "Inactive"}</p>
        <div className="divider"></div>
      </div>
      <Link to="/edituser">
        <button>Edit Profile</button>
      </Link>
    </section>
  );
};

export default Profile;

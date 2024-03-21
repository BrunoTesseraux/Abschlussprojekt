import { useContext, useEffect, useState } from "react";
import "./Profile.scss";
import TopNav from "../../components/TopNav/TopNav";
import ImageUpload from "../../components/ImageUpload/ImageUpload";
import { UserContext } from "../../contextes/UserContext";
import { Link } from "react-router-dom";

const Profile = () => {
    const [isImageUploadActive, setImageUploadActive] = useState(false);
    const { user } = useContext(UserContext);
console.log(user);
const formatDate = (dateString) => {
    if (!dateString) return ""; // Wenn das Datum nicht vorhanden ist, gibt einen leeren String zurück
    const parts = dateString.split('-'); // Datum in Teile aufteilen
    const year = parts[0];
    const month = parts[1];
    const day = parts[2];
    return `${day}.${month}.${year}`; // Datum im richtigen Format zurückgeben
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
                <TopNav location="Profile"/>
                <div className="profile-picture-container">
                    {/* <img src={user.profilePicture || ''}  className="profile-picture" alt="" /> */}
                    <img src="./../../../../backend/data/uploads/1710922398802-bier.jpg"  className="profile-picture" alt="" />
                    <div className={`camera-border ${isImageUploadActive ? "active" : ""}`} onClick={handleCameraBorderClick}>
                        <img src="./camera-icon.svg" alt="" />
                    </div>
                    {isImageUploadActive && <ImageUpload onClose={handleImageUploadClose}/>}
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
                        {user.address.street && <p>{user.address.street}, {user.address.streetNumber}</p>}
                        {(user.address.city || user.address.zip) && <p>{`${user.address.zip}, ${user.address.city}`}</p>}
                        <div className="divider"></div>
                    </>
                )}
                <p className="legend-styling">Membership</p>
                <p>{user.member ? 'Active' : 'Inactive'}</p>
                <div className="divider"></div>
            </div>
            <Link to="/edituser">
                <button>Edit Profile</button>
            </Link>
        </section>
    );
};

export default Profile;

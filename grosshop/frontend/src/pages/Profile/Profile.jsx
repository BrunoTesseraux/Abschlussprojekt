import { useContext, useEffect, useState } from "react";
import "./Profile.scss";
import TopNav from "../../components/TopNav/TopNav";
import ImageUpload from "../../components/ImageUpload/ImageUpload";
import { UserContext } from "../../contextes/UserContext";
import { Link } from "react-router-dom";

const Profile = () => {
    const [isImageUploadActive, setImageUploadActive] = useState(false);
    const { user } = useContext(UserContext);

    if (user.dateOfBirth) {
        const parts = user.dateOfBirth.split('.');
        const day = parseInt(parts[0], 10);
        const month = parseInt(parts[1], 10) - 1; // Monate in JavaScript beginnen mit 0 für Januar
        const year = parseInt(parts[2], 10);
    
        const formatDate = (date) => {
            const day = String(date.getDate()).padStart(2, '0');
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const year = date.getFullYear();
            return `${day}.${month}.${year}`;
        };
        // Erstelle ein neues Datumsobjekt
        const dateOfBirth = new Date(year, month, day);
        
        // Formatieren des Datums, falls erforderlich
        const formattedDateOfBirth = formatDate(dateOfBirth);
    }


    const handleCameraBorderClick = () => {
        setImageUploadActive(true);
    };

    const handleImageUploadClose = () => {
        setImageUploadActive(false);
    };

    console.log(user);

    return (
        <section className="profile">
            <div className="gradient-background">
                <TopNav location="Profile"/>
                <div className="profile-picture-container">
                    <img src={user.profilePicture || ''}  className="profile-picture" alt="" />
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
                        <p>{formatDate(dateOfBirth)}</p>
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
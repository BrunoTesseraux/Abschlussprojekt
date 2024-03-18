import React, { useState } from "react";
import TopNav from "../../components/TopNav/TopNav";

const EditProfile = () => {
    const [user, setUser] = useState({
        firstname: 'Karl',
        lastname: 'August',
        email: 'karl.august@augustiner.de',
        password: 'password123',
        passwordConfirm: 'password123',
        dateOfBirth: new Date('1993-01-01'),
        address: {
            street: 'Landshuter Straße 31-35',
            city: 'München',
            zip: '80339'
        },
        phoneNumber: '089 519940',
        profilePicture: './profilbild.png',
        member: true
    });

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        setUser(prevUser => ({
            ...prevUser,
            address: {
                ...prevUser.address,
                [name]: type === 'checkbox' ? checked : value
            }
        }));
    };

    const handleCameraBorderClick = () => {
        setImageUploadActive(true);
      };
      const handleImageUploadClose = () => {
          setImageUploadActive(false);
      };

    const handleSave = () => {};
    

    return (
        <section className="profile">
            <div className="gradient-background">
            <TopNav location="Edit Profile"/>
                <div className="profile-picture-container">
                <img src={user.profilePicture} className="profile-picture" alt="" />
                    <div className={`camera-border ${isImageUploadActive ? "active" : ""}`} onClick={handleCameraBorderClick}>
                    <img src="./camera-icon.svg" alt="" />
                    </div>
                    {isImageUploadActive && <ImageUpload onClose={handleImageUploadClose}/>}
                </div>
            </div>
            <div className="detail-wrapper">
                <p className="username">{user.firstname} {user.lastname}</p>
                <div className="divider"></div>
                <input type="email" name="email" value={user.email} placeholder="Email adress" onChange={handleChange} />
                <div className="divider"></div>
                <input type="date" name="dateOfBirth" value={user.dateOfBirth ? user.dateOfBirth.toISOString().substr(0, 10) : '1990-01-01'} onChange={handleChange}/>
                <div className="divider"></div>
                <input type="tel" name="phoneNumber" value={user.phoneNumber} placeholder="Phone Number" onChange={handleChange} />
                <div className="divider"></div>
                <input type="text" name="street" value={user.address.street} placeholder="Street" onChange={handleChange} />
                <div className="divider"></div>
                <input type="text" name="city" value={user.address.city} placeholder="City" onChange={handleChange} />
                <div className="divider"></div>
                <input type="text" name="zip" value={user.address.zip} placeholder="Zip" onChange={handleChange} />
                <div className="divider"></div>
            </div>
            <button onClick={handleSave}>Save</button>
        </section>
    );
};

export default EditProfile;
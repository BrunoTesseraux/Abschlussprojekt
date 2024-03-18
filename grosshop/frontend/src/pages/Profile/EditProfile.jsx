import React, { useContext, useState } from "react";
import TopNav from "../../components/TopNav/TopNav";
import ImageUpload from "../../components/ImageUpload/ImageUpload";
import { UserContext } from "../../contextes/UserContext";
import { backendUrl } from "../../api/api";

const EditProfile = () => {
    
    const { user, setUser } = useContext(UserContext);
    const [isImageUploadActive, setImageUploadActive] = useState(false);

    const handleCameraBorderClick = () => {
        setImageUploadActive(true);
    };

    const handleImageUploadClose = () => {
        setImageUploadActive(false);
    };

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        setUser(prevUser => ({
            ...prevUser,
            [name]: type === 'checkbox' ? checked : value,
            name: (name === 'firstname' || name === 'lastname') 
                ? `${name === 'firstname' ? value : prevUser.firstname || ''} ${name === 'lastname' ? value : prevUser.lastname || ''}`.trim() 
                : prevUser.name,
            address: {
                ...prevUser.address,
                [name]: value
            }
        }));
    };

    const handleSave = async () => {
        try {
            const response = await fetch(backendUrl + `/api/v1/users/${user._id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });
            
            if (!response.ok) {
                throw new Error('Failed to update user data');
            }
    
            // Handle successful response
            console.log('User data updated successfully');
        } catch (error) {
            // Handle error
            console.error('Error updating user data:', error.message);
        }
    };


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
                <div className="name-wrapper">
                    <input type="text" name="firstname" value={user.firstname} placeholder="First Name" onChange={handleChange} />
                    <input type="text" name="lastname" value={user.lastname} placeholder="Last Name" onChange={handleChange} />
                </div>
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
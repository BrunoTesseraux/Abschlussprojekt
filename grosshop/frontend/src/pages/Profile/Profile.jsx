import { useState } from "react";
import "./Profile.scss";

const Profile = () => {
    const formatDate = (date) => {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}.${month}.${year}`;
    };

    const [user, setUser] = useState({
        firstname: 'Karl',
        lastname: 'August',
        email: 'karl.august@augustiner.de',
        password: 'password123',
        passwordConfirm: 'password123',
        dateOfBirth: new Date('1993-01-01'),
        address: {
            street: 'Landsberger Straße 31-35',
            city: 'München',
            zip: '80339'
        },
        phoneNumber: '089 519940',
        profilePicture: './profilbild.png',
        member: true
    });

    return (
        <section className="profile">
            <div className="gradient-background">
                <div className="profile-picture-container">
                    <img src={user.profilePicture} className="profile-picture" alt="" />
                    <div className="camera-border"><img src="./camera-icon.svg" alt="" /></div>
                </div>
            </div>
            <div className="detail-wrapper">
            <p className="legend-styling">Name</p>
            <p>{user.firstname} {user.lastname}</p>
            <div className="divider"></div>
            <p className="legend-styling">Email</p>
            <p>{user.email}</p>
            <div className="divider"></div>
            {user.dateOfBirth !== null && (
                <>
                    <p className="legend-styling">Date of Birth</p>
                    <p>{user.dateOfBirth ? formatDate(user.dateOfBirth) : 'Not provided'}</p>
                    <div className="divider"></div>
                </>
            )}
            {user.phoneNumber.trim() !== '' && (
                <>
                    <p className="legend-styling">Phone</p>
                    <p>{user.phoneNumber}</p>
                    <div className="divider"></div>
                </>
            )}
            {(user.address.street.trim() !== '' || user.address.city.trim() !== '' || user.address.zip.trim() !== '') && (
                <>
                    <p className="legend-styling">Shipping Address</p>
                    {user.address.street.trim() !== '' && <p>{user.address.street}</p>}
                    {(user.address.city.trim() !== '' || user.address.zip.trim() !== '') && <p>{`${user.address.zip}, ${user.address.city}`}</p>}
                    <div className="divider"></div>
                </>
            )}
            <p className="legend-styling">Membership</p>
            <p>{user.member ? 'Active' : 'Inactive'}</p>
            <div className="divider"></div>
            </div>
            <button>Edit Profile</button>
        </section>
    );
};

export default Profile;
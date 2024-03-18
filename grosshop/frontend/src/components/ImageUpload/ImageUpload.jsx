import { useState } from "react";
import "./ImageUpload.scss";

const ImageUpload = ({ onClose }) => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setSelectedImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleImageUpload = () => {
            //upload logic
        onClose();
    };

    return ( 
        <div className="upload-popup">
            {selectedImage && (
                <img src={selectedImage} alt="Selected" className="preview-image" />
            )}
            <input type="file" accept="image/*" onChange={handleImageChange} />
            <button onClick={handleImageUpload}>Upload Image</button>
        </div>
    );
}

export default ImageUpload;
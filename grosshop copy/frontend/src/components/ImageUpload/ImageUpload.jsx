import { useContext, useEffect, useState } from "react";
import "./ImageUpload.scss";
import { backendUrl } from "../../api/api";
import { UserContext } from "../../contextes/UserContext";

const ImageUpload = ({ onClose }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const { user, updateUser } = useContext(UserContext);
  const [file, setFile] = useState();

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log(file.name);
      setSelectedImage(URL.createObjectURL(file)); // Zum Anzeigen des Bildes
      setFile(file); // Speichere das File-Objekt für den Upload
    }
  };

  useEffect(() => {}, [user]);

  //   const handleImageUpload = () => {
  //     //upload logic
  //     onClose();
  //   };

  const handleImageUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("profilePicture", file);

    try {
      const response = await fetch(
        `${backendUrl}/api/v1/users/${user._id}/profilePictureUpload`,
        {
          method: "PATCH",
          body: formData,
        }
      );
      const data = await response.json();
      console.log(data);
      if (data.status === "success") {
        // Aktualisiere den User im Context mit den neuen Daten
        updateUser({
          ...user,
          profilePicture: `${backendUrl}/${data.data.filePath}`,
        });
      }
      onClose();
    } catch (error) {
      console.error("Fehler beim Hochladen des Bildes: ", error);
    }
  };
  console.log(`${backendUrl}/${user.profilePicture}`);
  return (
    <div className="upload-popup">
      {selectedImage && (
        <img
          src={`${backendUrl}/${user.profilePicture}`}
          alt="Selected"
          className="preview-image"
        />
      )}
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button onClick={handleImageUpload}>Upload Image</button>
    </div>
  );
};

export default ImageUpload;

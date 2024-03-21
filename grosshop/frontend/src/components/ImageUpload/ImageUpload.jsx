import { useContext, useEffect, useState } from "react";
import "./ImageUpload.scss";
import { backendUrl } from "../../api/api";
import { UserContext } from "../../contextes/UserContext";

const ImageUpload = ({ onClose }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const { user, updateUser } = useContext(UserContext);
  const [file, setFile] = useState();
  const [imagePrev, setImagePrev] = useState("");

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log(file.name);
      setSelectedImage(URL.createObjectURL(file)); // Zum Anzeigen des Bildes
      setFile(file); // Speichere das File-Objekt für den Upload
    }
  };

  useEffect(() => {
    if (!file) return
    convertBase64(file).then((imageBase64) => {
      setImagePrev(imageBase64);
    })
  }, [file]);

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
          profilePicture: `${data.data.filePath}`,
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
          src={imagePrev}
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

const convertBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      resolve(fileReader.result);
    };

    fileReader.onerror = (error) => {
      reject(error);
    };
  });
};

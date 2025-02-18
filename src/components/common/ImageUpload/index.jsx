import React, { useRef } from "react";
import styles from "./ImageUpload.module.css";
import { AiOutlinePicture } from "react-icons/ai";
import { IoAdd } from "react-icons/io5";
import Button from "../Button";

const ImageUpload = ({ onImageSelect, imageUrl }) => {
  const fileInputRef = useRef(null);

  const handleClick = (e) => {
    e.stopPropagation(); // 이벤트 버블링 방지
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onImageSelect(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={styles.container}>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        className={styles.fileInput}
      />
      <div className={styles.imagePreview}>
        {imageUrl ? (
          <img src={imageUrl} alt="Profile" className={styles.image} />
        ) : (
          <Button
            type="icon-only"
            style="outlined"
            icon={<AiOutlinePicture size={24} />}
            onClick={handleClick}
            className={styles.uploadButton}
          />
        )}
      </div>
      <Button
        type="icon-only"
        className={styles.addIconButton}
        icon={<IoAdd size={20} />}
        onClick={handleClick}
      />
    </div>
  );
};

export default ImageUpload;

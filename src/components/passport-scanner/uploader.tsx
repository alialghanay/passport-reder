import React, { useState } from "react";
import axios from "axios";
import { Input } from "../ui/input";

const PassportUploader = () => {
  const [photo, setPhoto] = useState(null);

  const handlePhotoCapture = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files && event.target.files[0];
    const formData = new FormData();
    if (file) formData.append("photo", file);

    try {
      const response = await axios.post("/api/passport-scanner", formData);
      console.log("Passport details:", response.data);
    } catch (error) {
      console.error("Error scanning passport:", error);
    }
  };

  return (
    <div>
      <Input type="file" accept="image/*" onChange={handlePhotoCapture} />
    </div>
  );
};

export default PassportUploader;

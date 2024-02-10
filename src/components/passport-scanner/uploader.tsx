import React, { useState } from "react";
import axios from "axios";
import { Input } from "../ui/input";
import { PassportData } from "@/types/state-types";
import { toast } from "sonner";

interface PassportUploader {
  handleRecivedData: (data: PassportData) => void;
}

const PassportUploader = ({ handleRecivedData }: PassportUploader) => {
  const [photo, setPhoto] = useState(null);

  const handlePhotoCapture = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files && event.target.files[0];
    const formData = new FormData();
    if (file) formData.append("passport_image", file);

    try {
      const response = await axios.post(
        "http://localhost:8000/passport/read-info",
        formData
      );
      handleRecivedData(response.data);
    } catch (error) {
      console.log(error);
      let errorMassage = "unknown Error";
      if (error instanceof Error) errorMassage = error.message;
      toast.error("Error accessing camera:", { description: errorMassage });
    }
  };

  return (
    <div>
      <Input type="file" accept="image/*" onChange={handlePhotoCapture} />
    </div>
  );
};

export default PassportUploader;

import React, { useState, useRef } from "react";
import axios from "axios";
import { Button } from "../ui/button";
import {
  Aperture,
  CameraIcon,
  CameraOffIcon,
  SwitchCameraIcon,
} from "lucide-react";

const PassportCamaraCaptuer: React.FC = () => {
  const [photo, setPhoto] = useState<File | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [videoDevices, setVideoDevices] = useState<MediaDeviceInfo[]>([]);
  const [selectedDeviceId, setSelectedDeviceId] = useState<string | null>(null);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (error) {
      console.error("Error accessing camera:", error);
    }
  };

  const stopCamera = () => {
    const stream = videoRef.current?.srcObject as MediaStream;
    const tracks = stream?.getTracks() || [];

    tracks.forEach((track) => {
      track.stop();
    });

    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
  };

  const capturePhoto = async () => {
    const canvas = document.createElement("canvas");
    const video = videoRef.current;

    if (!video) {
      return;
    }

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const context = canvas.getContext("2d");

    if (context) {
      context.drawImage(video, 0, 0, canvas.width, canvas.height);

      canvas.toBlob(async (blob) => {
        if (blob) {
          const formData = new FormData();
          formData.append("photo", blob, "photo.jpg");

          try {
            const response = await axios.post(
              "/api/passport-scanner",
              formData
            );
            console.log("Passport details:", response.data);
          } catch (error) {
            console.error("Error scanning passport:", error);
          }
        }
      }, "image/jpeg");
    }
  };

  const handlePhotoCapture = () => {
    startCamera();
  };

  const handleStopCapture = () => {
    stopCamera();
  };

  const handleCapture = () => {
    capturePhoto();
    stopCamera();
  };

  const handleSwitchCamera = () => {
    if (videoDevices.length > 1) {
      const currentDeviceIndex = videoDevices.findIndex(
        (device) => device.deviceId === selectedDeviceId
      );

      const nextDeviceIndex = (currentDeviceIndex + 1) % videoDevices.length;

      setSelectedDeviceId(videoDevices[nextDeviceIndex].deviceId);
      stopCamera();
      startCamera();
    }
  };

  return (
    <div className="w-1/2">
      <video ref={videoRef} style={{ width: "100%" }} autoPlay></video>
      <div className="flex justify-between items-center">
        <Button onClick={handlePhotoCapture}>
          <CameraIcon />
        </Button>
        <Button onClick={handleSwitchCamera}>
          <SwitchCameraIcon />
        </Button>
        <Button onClick={handleCapture}>
          <Aperture />
        </Button>
        <Button onClick={handleStopCapture}>
          <CameraOffIcon />
        </Button>
      </div>
    </div>
  );
};

export default PassportCamaraCaptuer;

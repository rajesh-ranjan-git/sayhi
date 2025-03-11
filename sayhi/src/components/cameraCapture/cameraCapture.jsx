import { useCallback, useEffect, useState } from "react";
import Webcam from "react-webcam";

const CameraCapture = () => {
  const [deviceId, setDeviceId] = useState({});
  const [devices, setDevices] = useState([]);

  const handleDevices = useCallback(
    (mediaDevices) =>
      setDevices(mediaDevices.filter(({ kind }) => kind === "videoinput")),
    [setDevices]
  );

  useEffect(() => {
    navigator.mediaDevices.enumerateDevices().then(handleDevices);
  }, [handleDevices]);

  return (
    <>
      {devices.map((device, key) => (
        <div key={key} className="rounded-md">
          <Webcam
            audio={false}
            videoConstraints={{ deviceId: device.deviceId }}
            className="rounded-md"
          />
          {/* {device.label || `Device ${key + 1}`} */}
        </div>
      ))}
    </>
  );
};

export default CameraCapture;

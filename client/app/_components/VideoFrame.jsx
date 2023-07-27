"use client";
import React, { useEffect } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { CircularProgress } from "@mui/material";

function VideoFrame({
  isVideoOn,
  isMicOn,
  isScreenSharing,
  isSettings,
  isVideoLoading,
  setIsVideoLoading,
}) {
  const [isStreaming, setIsStreaming] = React.useState(false);

  return (
    <div className="flex flex-nowrap gap-1 w-screen box-border p-1">
      <div className="video-frame relative">
        <div className="text-white absolute bottom-2 left-2 bg-blue-600 rounded-lg p-1 text-sm z-10">
          Shantanu Sakpal
        </div>
        <div className="text-white absolute top-2 right-2 z-10">
          <span className="text-accent-color-light">StreamKaro</span>
        </div>
        {isVideoLoading && (
          <div className="video">
            <div className="w-fit m-auto text-white">
              <CircularProgress />
            </div>
          </div>
        )}
        {
          <div className="video ">
            <video id="localVideo" autoPlay playsInline></video>
          </div>
        }
        {!isVideoOn && (
          <div className="w-full h-full text-white flex justify-center items-center">
            <AccountCircleIcon sx={{ scale: "3" }} />
          </div>
        )}
      </div>

      <div className="video-frame relative">
        <div className="text-white absolute bottom-2 left-2 bg-blue-600 rounded-lg p-1 text-sm z-10">
          Shantanu Sakpal
        </div>
        <div className="text-white absolute top-2 right-2 z-10">
          <span className="text-accent-color-light">StreamKaro</span>
        </div>
        {isVideoLoading && (
          <div className="video">
            <div className="w-fit m-auto text-white">
              <CircularProgress />
            </div>
          </div>
        )}
        {
          <div className="video ">
            <video id="remoteVideo" autoPlay playsInline></video>
          </div>
        }
        {!isVideoOn && (
          <div className="w-full h-full text-white flex justify-center items-center">
            <AccountCircleIcon sx={{ scale: "3" }} />
          </div>
        )}
      </div>
    </div>
  );
}

export default VideoFrame;

"use client";
import React from "react";
import MicOffOutlinedIcon from "@mui/icons-material/MicOffOutlined";
import MicNoneOutlinedIcon from "@mui/icons-material/MicNoneOutlined";
import ScreenShareOutlinedIcon from "@mui/icons-material/ScreenShareOutlined";
import VideocamOffOutlinedIcon from "@mui/icons-material/VideocamOffOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import CancelIcon from "@mui/icons-material/Cancel";
import { startTrack, stopTrack } from "@/app/_utils/LocalPlayback";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function StreamOptions({
  isMicOn,
  isVideoOn,
  isScreenSharing,
  isSettings,
  setIsMicOn,
  setIsVideoOn,
  setIsScreenSharing,
  setIsSettings,
  isVideoLoading,
  setIsVideoLoading,
}) {
  const handleStop = (name) => {
    console.log("stop , ", name);
    stopTrack(name);
    if (name === "audio") setIsMicOn(false);
    else if (name === "video") setIsVideoOn(false);
    else if (name === "screen") setIsScreenSharing(false);
  };

  const handleStart = (name) => {
    console.log("start , ", name);

    startTrack(name);
    if (name === "audio") setIsMicOn(true);
    else if (name === "video") setIsVideoOn(true);
    else if (name === "screen") setIsScreenSharing(true);
  };

  return (
    <div className="flex flex-nowrap left-0 right-0 fixed bottom-5 mx-auto  w-fit border-1 border-gray-400 rounded-lg ">
      {isMicOn ? (
        <div
          className="w-24 rounded-l-lg h-16 align-middle flex flex-col text-center justify-center hover:cursor-pointer hover:bg-gray-300 "
          onClick={() => {
            handleStop("audio");
          }}
        >
          <div className="w-fit  mx-auto text-sm scale-90 ">
            <MicNoneOutlinedIcon />
          </div>

          <p className="w-fit mx-auto text-sm">Mute</p>
        </div>
      ) : (
        <div
          className="w-24 rounded-l-lg h-16 align-middle flex flex-col text-center justify-center hover:cursor-pointer hover:bg-gray-300  bg-red-200"
          onClick={() => {
            handleStart("audio");
          }}
        >
          <div className="w-fit  mx-auto text-sm scale-90 text-red-600">
            <MicOffOutlinedIcon />
          </div>
          <p className="w-fit mx-auto text-sm">Unmute</p>
        </div>
      )}

      {isVideoOn ? (
        <div
          className="w-24 h-16 align-middle flex flex-col text-center justify-center hover:cursor-pointer hover:bg-gray-300 "
          onClick={() => {
            handleStop("video");
          }}
        >
          <div className="w-fit mx-auto text-sm scale-90">
            <VideocamOutlinedIcon />
          </div>
          <p className="w-fit mx-auto text-sm">Stop Video</p>
        </div>
      ) : (
        <div
          className="w-24 h-16 align-middle flex flex-col text-center justify-center hover:cursor-pointer hover:bg-gray-300 bg-red-200"
          onClick={() => {
            handleStart("video");
          }}
        >
          <div className="w-fit mx-auto text-sm scale-90 text-red-600">
            <VideocamOffOutlinedIcon />
          </div>
          <p className="w-fit mx-auto text-sm">Start Video</p>
        </div>
      )}

      {isScreenSharing ? (
        <div
          className="w-24 h-16 align-middle flex flex-col text-center justify-center hover:cursor-pointer hover:bg-gray-300 bg-red-200"
          onClick={() => setIsScreenSharing(!isScreenSharing)}
        >
          <div className="w-fit mx-auto text-sm scale-90 text-red-600">
            <ScreenShareOutlinedIcon />
          </div>
          <p className="w-fit mx-auto text-sm">Stop Sharing</p>
        </div>
      ) : (
        <div
          className="w-24 h-16 align-middle flex flex-col text-center justify-center hover:cursor-pointer hover:bg-gray-300 "
          onClick={() => setIsScreenSharing(!isScreenSharing)}
        >
          <div className="w-fit mx-auto text-sm scale-90">
            <ScreenShareOutlinedIcon />
          </div>
          <p className="w-fit mx-auto text-sm">Share Screen</p>
        </div>
      )}

      <div className=" w-24 h-16 align-middle flex flex-col text-center   justify-center hover:cursor-pointer hover:bg-gray-300 ">
        <div className="w-fit mx-auto text-sm scale-90">
          <SettingsOutlinedIcon />
        </div>
        <p className="w-fit mx-auto text-sm">Settings</p>
      </div>
      <div className="rounded-r-lg w-24 h-16 align-middle flex flex-col text-center   justify-center hover:cursor-pointer hover:bg-gray-300 ">
        <div className="w-fit mx-auto text-sm scale-90 text-red-600">
          <CancelIcon />
        </div>
        <p className="w-fit mx-auto text-sm">Stop stream</p>
      </div>
    </div>
  );
}

export default StreamOptions;

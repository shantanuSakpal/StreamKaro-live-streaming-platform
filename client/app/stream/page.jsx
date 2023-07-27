"use client";

import React, { useEffect, useState } from "react";
import VideoFrame from "../_components/VideoFrame";
import StreamOptions from "@/app/_components/StreamOptions";
import { playVideoFromCamera } from "@/app/_utils/LocalPlayback";
import { collection, addDoc } from "firebase/firestore";
import firebaseApp from "../_firebase/config";

function Stream(props) {
  const [isMicOn, setIsMicOn] = React.useState(true);
  const [isVideoOn, setIsVideoOn] = React.useState(true);
  const [isScreenSharing, setIsScreenSharing] = React.useState(false);
  const [isSettings, setIsSettings] = React.useState(false);
  const [isVideoLoading, setIsVideoLoading] = useState(true);
  const [localStream, setLocalStream] = useState(null);
  const [remoteStream, setRemoteStream] = useState(null);
  const [pc, setPc] = useState(null);
  // const db = firebaseApp.firestore();

  useEffect(() => {
    const servers = {
      iceServers: [
        {
          urls: [
            "stun:stun.l.google.com:19302",
            "stun:stun2.l.google.com:19302",
          ],
        },
      ],
      iceCandidatePoolSize: 10,
    };

    //global state
    setPc(new RTCPeerConnection(servers));

    setIsVideoLoading(true);
    const constraintObj = {
      audio: isMicOn,
      video: {
        facingMode: "user", // Use the user-facing camera
        width: { min: 640, ideal: 1280, max: 1920 },
        height: { min: 480, ideal: 720, max: 1080 },
      },
    };

    playVideoFromCamera(constraintObj).then((localStream) => {
      console.log("localStream", localStream.getTracks());
      setLocalStream(localStream);
      setRemoteStream(new MediaStream());
      setIsVideoLoading(false);

      // Push tracks from local stream to peer connection
      localStream.getTracks().forEach((track) => {
        pc.addTrack(track, localStream);
      });

      // Pull tracks from remote stream, add to video stream
      pc.ontrack = (event) => {
        event.streams[0].getTracks().forEach((track) => {
          remoteStream.addTrack(track);
        });
      };

      const remoteVideo = document.getElementById("remoteVideo");
      remoteVideo.srcObject = remoteStream;
    });
  }, []);

  const handleCall = async () => {
    // Reference Firestore collections for signaling
    const callDoc = collection(db, "calls");
    const offerCandidates = callDoc.collection("offerCandidates");
    const answerCandidates = callDoc.collection("answerCandidates");

    pc.onicecandidate = (event) => {
      event.candidate && offerCandidates.add(event.candidate.toJSON());
    };

    //create offer
    const offerDescription = await pc.createOffer();
    await pc.setLocalDescription(offerDescription);

    const offer = {
      sdp: offerDescription.sdp,
      type: offerDescription.type,
    };

    await callDoc.set({ offer });
  };

  return (
    <div>
      <VideoFrame
        isMicOn={isMicOn}
        isVideoOn={isVideoOn}
        isScreenSharing={isScreenSharing}
        isSettings={isSettings}
        isVideoLoading={isVideoLoading}
        setIsVideoLoading={setIsVideoLoading}
      />
      <StreamOptions
        isMicOn={isMicOn}
        isVideoOn={isVideoOn}
        isScreenSharing={isScreenSharing}
        isSettings={isSettings}
        setIsMicOn={setIsMicOn}
        setIsVideoOn={setIsVideoOn}
        setIsScreenSharing={setIsScreenSharing}
        setIsSettings={setIsSettings}
        isVideoLoading={isVideoLoading}
        setIsVideoLoading={setIsVideoLoading}
      />
      <h1>Create a new call</h1>
      <button onClick={handleCall} className="bg-blue-400 rounded">
        Create call
      </button>
      <br />
      <br />
      <h1>Join a call</h1>
      <input id="code" placeholder="Code" />
      <button className="bg-blue-400 rounded">Join call</button>
      <br />
      <br />
      <h1>End Call</h1>
      <button className="bg-blue-400 rounded">End call</button>
    </div>
  );
}

export default Stream;

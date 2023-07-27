export async function playVideoFromCamera(constraintObj) {
  try {
    const localStream = await navigator.mediaDevices.getUserMedia(
      constraintObj
    );
    const videoElement = document.querySelector("#localVideo");

    if ("srcObject" in videoElement) {
      videoElement.srcObject = localStream;
    } else {
      // For older browsers
      videoElement.src = window.URL.createObjectURL(localStream);
    }

    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
    return localStream;
  } catch (error) {
    console.error("Error opening video camera.", error);
  }
}

export function stopTrack(name) {
  let x;
  if (name === "audio") x = 0;
  else if (name === "video") x = 1;

  const videoElement = document.querySelector("video#localVideo");
  videoElement.srcObject.getTracks()[x].enabled = false;
}

export function startTrack(name) {
  let x;
  if (name === "audio") x = 0;
  else if (name === "video") x = 1;
  const videoElement = document.querySelector("video#localVideo");
  videoElement.srcObject.getTracks()[x].enabled = true;
}

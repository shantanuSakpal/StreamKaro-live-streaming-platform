StreamKaro - A multi platform live streaming app
======================
Motive
------
To make a service that enables user to use the browser and live stream to any other platform, for example YouTube.
Basically a live Streaming app, that can both stream the users screen/camera in the browser (e.g. Google Meet) and also stream it to another platform (e.g. YouTube).

The basic function requirements
-------------------------------
- Let the user sign up and login
- Let the user create a live stream
- In the live stream page, the user can see themselves and a bunch of overlays. They can add and remove themselves from the canvas, and the same thing for the overlays
- There should be a go live button that when the user clicks, the stream starts streaming what's on the canvas to YouTube
- This would require for you to write a service that takes video feed from the end user, merges it with the overlays on the canvas and then streams it to YouTube

### Backend Service 1
- Simple backend that lets users sign up and sign in (users table)
- Lets users create a live stream (live streams table)
- Lets users add overlays/themselves to the live stream (overlays table)

### Backend service 2
- This service takes the input stream and the current set of overlays and converts this to an RTMP stream that needs to be forwarded to YouTube
- Frameworks you can use to achieve this includes ffmpeg or gstreamer.
- Read about how you can convert websocket/WebRTC video streams to rtmp

Steps to build the project
--------------------------
1. Take the video and the overlays, and sent it to the server using WebRTC.

2. Then the server decodes it using ffmpeg/ gstreamer.

3. Then the server converts the stream to RTMP so that YouTube understands it.

4. Then the server sends the stream to YouTube.

 
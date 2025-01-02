import React from "react";

const VideoPlayer = () => {
  return (
    <div className="flex container mx-auto justify-center min-h-screen/2">
      <div className="flex w-full rounded-lg">
        <div className="w-1/2 flex items-center justify-center bg-yellow-500 ">
          <h6 className="text-center text-xl">Hello</h6>
        </div>
        <div className="w-1/2 relative">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
          >
            <source
              src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <h6 className="text-white text-3xl">Hellllllo</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;

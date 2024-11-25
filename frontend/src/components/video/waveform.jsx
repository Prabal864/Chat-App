import React from "react";

const VideoBackground = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video 
        className="w-full h-full object-cover" 
        autoPlay 
        loop 
        muted
        playsInline
      >
        <source src="./waveform.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Your content */}
      <div className="relative z-10 flex items-center justify-center w-full h-full">
        <h1 className="text-white text-4xl font-bold">Welcome to My Website</h1>
      </div>
    </div>
  );
};

export default VideoBackground;

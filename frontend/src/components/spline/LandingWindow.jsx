import React, { useState, useEffect, Suspense } from 'react';
import { toast } from 'react-hot-toast';

// Lazy load the Spline component
const Spline = React.lazy(() => import('@splinetool/react-spline'));

export const LandingWindow = () => {
  const [sceneUrl, setSceneUrl] = useState(null); // Store the scene URL
  const [isLoaded, setIsLoaded] = useState(false); // Track if the Spline scene is loaded

  useEffect(() => {
    // Check if the scene URL is already cached in localStorage
    const cachedScene = localStorage.getItem('splineScene');
    if (cachedScene) {
      setSceneUrl(cachedScene);
      setIsLoaded(true);
    } else {
      // If not cached, set the default URL and cache it
      const defaultSceneUrl = 'https://prod.spline.design/YtxH78Fmqb7SjSKT/scene.splinecode';
      localStorage.setItem('splineScene', defaultSceneUrl);
      setSceneUrl(defaultSceneUrl);
      setIsLoaded(true);
    }

    // Preload the scene assets to improve initial load time
    const preloadScene = () => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = sceneUrl; // Make sure sceneUrl is set before calling
      link.as = 'fetch';
      document.head.appendChild(link);
    };

    // Preload the scene if the URL is available
    if (sceneUrl) preloadScene();
  }, [sceneUrl]);

  if (!isLoaded || !sceneUrl) {
    return (
      <div className="flex justify-center items-center w-full h-full">
        <p>Loading scene...</p>
      </div>
    );
  }

  return (
    <div className="w-screen h-screen overflow-hidden relative">
      {/* Suspense to handle the loading of the Spline component */}
      <Suspense fallback={<div className="flex justify-center items-center w-full h-full">Loading...</div>}>
        <Spline 
          style={{ width: '100%', height: '100%' }} 
          scene={sceneUrl} 
          onLoad={() => setIsLoaded(true)} // Set loading state to false when the scene is fully loaded
        />
      </Suspense>
    </div>
  );
};

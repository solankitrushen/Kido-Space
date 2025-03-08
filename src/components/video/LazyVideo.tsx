'use client';
import React, { useState, useRef, useEffect, forwardRef, useImperativeHandle } from 'react';

interface LazyVideoProps {
  src: string;
  className?: string;
  onTimeUpdate?: () => void;
}

export interface VideoRef {
  play: () => void;
  pause: () => void;
  currentTime: number;
}

const LazyVideo = forwardRef<VideoRef, LazyVideoProps>(({ src, className = '', onTimeUpdate }, ref) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Check if the source is a Google Drive link
  const isGoogleDriveLink = src.includes('drive.google.com');
  
  // Extract Google Drive file ID for iframe embedding if needed
  const getGoogleDriveFileId = () => {
    if (!isGoogleDriveLink) return null;
    
    // Handle both formats: /file/d/ID/preview and ?id=ID
    const fileIdMatch = src.match(/\/file\/d\/([^\/]+)/) || src.match(/id=([^&]+)/);
    return fileIdMatch ? fileIdMatch[1] : null;
  };
  
  const fileId = getGoogleDriveFileId();
  
  // For Google Drive links, we should use the iframe directly
  const shouldUseIframe = isGoogleDriveLink && fileId;

  // Expose video methods to parent component
  useImperativeHandle(ref, () => ({
    play: () => {
      if (shouldUseIframe) return;
      return videoRef.current?.play();
    },
    pause: () => {
      if (shouldUseIframe) return;
      return videoRef.current?.pause();
    },
    get currentTime() {
      if (shouldUseIframe) return 0;
      return videoRef.current?.currentTime || 0;
    }
  }));

  // Set up intersection observer for lazy loading
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '200px', // Load video when it's 200px from entering the viewport
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !isLoaded) {
          setIsLoaded(true);
          // Once video is loaded, no need to observe anymore
          if (containerRef.current) {
            observer.unobserve(containerRef.current);
          }
        }
      });
    }, options);

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [isLoaded]);

  // Handle video loading events
  const handleLoadedData = () => {
    console.log('Video data loaded');
  };
  
  // Handle video errors
  const handleVideoError = () => {
    console.error('Video failed to load, falling back to iframe if possible');
    setVideoError(true);
  };

  // Update playing state when video plays or pauses
  useEffect(() => {
    if (shouldUseIframe) return;
    
    const videoElement = videoRef.current;
    
    if (!videoElement) return;
    
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    
    videoElement.addEventListener('play', handlePlay);
    videoElement.addEventListener('pause', handlePause);
    videoElement.addEventListener('error', handleVideoError);
    
    return () => {
      videoElement.removeEventListener('play', handlePlay);
      videoElement.removeEventListener('pause', handlePause);
      videoElement.removeEventListener('error', handleVideoError);
    };
  }, [shouldUseIframe]);

  // Render Google Drive iframe
  const renderGoogleDriveIframe = () => {
    if (!fileId) return null;
    
    return (
      <iframe 
        src={`https://drive.google.com/file/d/${fileId}/preview`}
        width="100%" 
        height="480" 
        allow="autoplay"
        className="rounded-lg"
      ></iframe>
    );
  };

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {isLoaded ? (
        shouldUseIframe || videoError ? (
          renderGoogleDriveIframe()
        ) : (
          <video
            ref={videoRef}
            className="w-full rounded-lg"
            controls
            preload="metadata"
            onLoadedData={handleLoadedData}
            onTimeUpdate={onTimeUpdate}
            onError={handleVideoError}
          >
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )
      ) : (
        <div className="w-full rounded-lg bg-gray-200 flex items-center justify-center" style={{ aspectRatio: '16/9', minHeight: '240px' }}>
          <div className="text-center p-4">
            <div className="animate-pulse mb-2">
              <svg className="w-12 h-12 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <p className="text-gray-500">Loading video...</p>
          </div>
        </div>
      )}
    </div>
  );
});

LazyVideo.displayName = 'LazyVideo';

export default LazyVideo; 
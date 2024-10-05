import React from 'react';
import CourseSidebar from 'components/Courselist/CourseSidebar';
import TracingBeamDemo from 'components/Trasing/TracingBeamDemo';

// Define your content data
const contentData = [
  {
    title: 'Welcome to the Solar System! 🚀🌟',
    description: (
      <>
        <p>
          Buckle up, young explorer! 🚀 We're about to take an amazing journey
          through our Solar System! 🌍🪐
        </p>
        <p>
          You’ll meet all the planets, from the hottest one closest to the Sun,
          to the coldest one far, far away! ☀️❄️
        </p>
        <p>
          Get ready to discover fun facts, watch cool videos, and even learn
          about the stars! 🌠✨ Let’s explore the universe together!
        </p>
      </>
    ),
    badge: 'Space Explorer',
    media: '/module1.mp4', // Direct path to the media
    mediaType: 'video', // Specify 'image' or 'video'
  },
];

function Page() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr]">
      <div className="sticky top-0 h-auto w-full overflow-y-auto p-4 lg:h-screen">
        <CourseSidebar />
      </div>
      <div className="w-full overflow-y-auto p-4 lg:h-screen">
        <TracingBeamDemo content={contentData} />
      </div>
    </div>
  );
}

export default Page;

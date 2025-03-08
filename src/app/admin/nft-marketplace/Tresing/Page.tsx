'use client';
import React, { useState } from 'react';

const contentData = [
  {
    title: 'Welcome to the Solar System! 🚀🌟',
    description: (
      <>
        <p className="mb-4 text-base font-bold">Key Points:</p>
        <p className="mb-4">
          What is an Exoplanet? An exoplanet is a planet that orbits a star
          outside our Solar System, discovered through methods like the transit
          method. Significance of Exoplanets: They help scientists study how
          planets form and whether they could support life.
        </p>
        <p className="mb-4">
          Differences from Solar System Planets: While our planets are mostly
          rocky or gas giants, exoplanets vary more in size, composition, and
          temperature, with some being super-Earths or lava-covered.
        </p>
        <p className="mb-4">
          This two-part story could be formatted into a project where Part 1
          explains the discovery and importance of exoplanets, and Part 2 draws
          a comparison with planets in our Solar System. You can also use images
          or animations of the planets and exoplanets to visually support the
          script on your website.
        </p>
      </>
    ),
    badge: 'Space Explorer',
    media: 'https://drive.google.com/file/d/1S60LtAWIyVAqV2zxWB_8_0g7JtX4Xm9w/preview',
    mediaType: 'video',
  },
];

function Page() {
  const [activeUnit, setActiveUnit] = useState(0);
  const [tab, setTab] = useState(0);

  const activeContent = contentData[activeUnit] || {
    title: 'Content not available',
    description: <p>Please select a valid unit.</p>,
    badge: 'Unavailable',
    media: null,
    mediaType: null,
  };

  return (
    <div>
      {/* <TracingBeamDemo content={[activeContent]} /> */}
    </div>
  );
}

export default Page;

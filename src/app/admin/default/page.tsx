'use client';
import React, { useState, useEffect } from 'react';
import CourseSidebar from '../../../components/Courselist/CourseSidebar';
import TracingBeamDemo from '../../../components/Trasing/TracingBeamDemo';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { useSearchParams } from 'next/navigation';

// Define your content data
const contentData = [
  {
    title: 'Introduction to the Solar System 🚀🌟',
    description: (
      <>
        <p className='mb-4 text-base font-bold'>
          Key Points:
        </p>
        <p className='mb-4'>
          • The Solar System formed about 4.6 billion years ago from a giant cloud of gas and dust.
        </p>
        <p className='mb-4'>
          • Our Solar System consists of the Sun, eight planets, dwarf planets, moons, asteroids, comets, and other celestial objects.
        </p>
        <p className='mb-4'>
          • The inner planets (Mercury, Venus, Earth, Mars) are rocky, while the outer planets (Jupiter, Saturn, Uranus, Neptune) are gas giants.
        </p>
        <p className='mb-4'>
          • The Sun contains 99.8% of the mass in our Solar System and exerts gravitational pull on all objects.
        </p>
        <p className='mb-4'>
          • The Asteroid Belt lies between Mars and Jupiter, while the Kuiper Belt and Oort Cloud exist beyond Neptune.
        </p>
      </>
    ),
    badge: 'Unit 1',
    media: 'https://drive.google.com/file/d/1S60LtAWIyVAqV2zxWB_8_0g7JtX4Xm9w/preview',
    mediaType: 'video',
  },
  {
    title: 'The Planets: Characteristics and Exploration 🪐🌍',
    description: (
      <>
        <p className='mb-4 text-base font-bold'>
          Key Points:
        </p>
        <p className='mb-4'>
          • Mercury: The smallest planet, closest to the Sun, with extreme temperature variations and a heavily cratered surface.
        </p>
        <p className='mb-4'>
          • Venus: Similar in size to Earth but with a toxic atmosphere of carbon dioxide and sulfuric acid clouds, creating a runaway greenhouse effect.
        </p>
        <p className='mb-4'>
          • Earth: The only known planet with liquid water on its surface and life, protected by a magnetic field and ozone layer.
        </p>
        <p className='mb-4'>
          • Mars: Known as the "Red Planet" due to iron oxide on its surface, with polar ice caps, extinct volcanoes, and evidence of ancient water.
        </p>
        <p className='mb-4'>
          • Jupiter: The largest planet with a prominent Great Red Spot, numerous moons, and primarily composed of hydrogen and helium.
        </p>
        <p className='mb-4'>
          • Saturn: Famous for its spectacular ring system, with a similar composition to Jupiter but lower density.
        </p>
      </>
    ),
    badge: 'Unit 2',
    media: 'https://drive.google.com/file/d/1S60LtAWIyVAqV2zxWB_8_0g7JtX4Xm9w/preview',
    mediaType: 'video',
  },
  {
    title: 'Beyond the Solar System: Exoplanets 🌌✨',
    description: (
      <>
        <p className='mb-4 text-base font-bold'>
          Key Points:
        </p>
        <p className='mb-4'>
          • Exoplanets are planets that orbit stars outside our Solar System, with over 5,000 confirmed discoveries to date.
        </p>
        <p className='mb-4'>
          • Detection methods include transit photometry (observing dimming of starlight), radial velocity (measuring star wobble), and direct imaging.
        </p>
        <p className='mb-4'>
          • The habitable zone or "Goldilocks zone" is the region around a star where conditions might be right for liquid water.
        </p>
        <p className='mb-4'>
          • Super-Earths, Hot Jupiters, and Mini-Neptunes are common exoplanet types not found in our Solar System.
        </p>
        <p className='mb-4'>
          • TRAPPIST-1 system contains seven Earth-sized planets, with several potentially in the habitable zone.
        </p>
        <p className='mb-4'>
          • The James Webb Space Telescope is revolutionizing exoplanet research by analyzing their atmospheres for biosignatures.
        </p>
      </>
    ),
    badge: 'Unit 3',
    media: 'https://drive.google.com/file/d/1S60LtAWIyVAqV2zxWB_8_0g7JtX4Xm9w/preview',
    mediaType: 'video',
  },
  {
    title: 'Space Missions and Future Exploration 🛰️🔭',
    description: (
      <>
        <p className='mb-4 text-base font-bold'>
          Key Points:
        </p>
        <p className='mb-4'>
          • Historic missions include Apollo (Moon landings), Voyager (outer planets), Hubble (space telescope), and Cassini-Huygens (Saturn).
        </p>
        <p className='mb-4'>
          • Current missions include Perseverance and Curiosity (Mars rovers), Parker Solar Probe (Sun), and New Horizons (Pluto and beyond).
        </p>
        <p className='mb-4'>
          • The International Space Station (ISS) has maintained continuous human presence in space since 2000.
        </p>
        <p className='mb-4'>
          • Future missions include Artemis (return to Moon), Mars Sample Return, Europa Clipper (Jupiter's moon), and interstellar probes.
        </p>
        <p className='mb-4'>
          • Private companies like SpaceX, Blue Origin, and Virgin Galactic are revolutionizing access to space with reusable rockets.
        </p>
        <p className='mb-4'>
          • Space telescopes like James Webb and upcoming Roman Space Telescope will reveal unprecedented views of the universe.
        </p>
      </>
    ),
    badge: 'Unit 4',
    media: 'https://drive.google.com/file/d/1S60LtAWIyVAqV2zxWB_8_0g7JtX4Xm9w/preview',
    mediaType: 'video',
  },
  {
    title: 'Living in Space: Challenges and Solutions 👨‍🚀🧪',
    description: (
      <>
        <p className='mb-4 text-base font-bold'>
          Key Points:
        </p>
        <p className='mb-4'>
          • Microgravity causes muscle atrophy, bone density loss, and fluid redistribution in the human body.
        </p>
        <p className='mb-4'>
          • Radiation exposure is a major concern for long-duration missions, requiring shielding and monitoring.
        </p>
        <p className='mb-4'>
          • Psychological challenges include isolation, confinement, and Earth-out-of-view phenomenon.
        </p>
        <p className='mb-4'>
          • Life support systems must recycle air and water, manage waste, and provide sustainable food sources.
        </p>
        <p className='mb-4'>
          • In-situ resource utilization (ISRU) will be crucial for establishing sustainable presence on Moon and Mars.
        </p>
        <p className='mb-4'>
          • Artificial gravity through rotation and advanced radiation shielding are being developed for future deep space missions.
        </p>
      </>
    ),
    badge: 'Unit 5',
    media: 'https://drive.google.com/file/d/1S60LtAWIyVAqV2zxWB_8_0g7JtX4Xm9w/preview',
    mediaType: 'video',
  },
];

// Custom scrollbar renderer that adapts to theme
const CustomScrollbars = ({ className = '', ...props }: { className?: string; [key: string]: any }) => {
  return (
    <Scrollbars
      renderThumbVertical={({ style, ...props }) => (
        <div
          {...props}
          className="rounded bg-gray-400 dark:bg-gray-600 hover:bg-gray-500 dark:hover:bg-gray-500"
          style={{ ...style, width: '6px' }}
        />
      )}
      renderTrackVertical={({ style, ...props }) => (
        <div
          {...props}
          className="rounded bg-transparent"
          style={{ ...style, width: '6px', right: '2px', bottom: '2px', top: '2px', borderRadius: '3px' }}
        />
      )}
      autoHide
      autoHideTimeout={1000}
      autoHideDuration={200}
      className={className}
      {...props}
    />
  );
};

// Invisible scrollbar component that completely hides the scrollbar
const InvisibleScrollbars = ({ className = '', ...props }: { className?: string; [key: string]: any }) => {
  return (
    <div className={`overflow-auto hide-scrollbar ${className}`} {...props}>
      {props.children}
    </div>
  );
};

function Page() {
  const searchParams = useSearchParams();
  const unitParam = searchParams.get('unit');
  const [activeUnit, setActiveUnit] = useState(unitParam ? parseInt(unitParam, 10) : 0);
  const [tab, setTab] = useState(0);

  // Update activeUnit when URL parameter changes
  useEffect(() => {
    if (unitParam) {
      setActiveUnit(parseInt(unitParam, 10));
    }
  }, [unitParam]);

  // Ensure activeUnit is within bounds
  const activeContent = contentData[activeUnit] || {
    title: 'Content not available',
    description: <p>Please select a valid unit.</p>,
    badge: 'Unavailable',
    media: null,
    mediaType: null,
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr]">
      <div className="sticky top-0 h-auto w-full lg:h-screen">
        <InvisibleScrollbars style={{ width: '100%', height: '100vh' }}>
          <div className="p-4">
            <CourseSidebar
              activeUnit={activeUnit}
              setActiveUnit={setActiveUnit}
              tab={tab}
            />
          </div>
        </InvisibleScrollbars>
      </div>
      <div className="w-full lg:h-screen hide-scrollbar">
        <CustomScrollbars style={{ width: '100%', height: '100vh' }}>
          <div className="p-4">
            <TracingBeamDemo content={[activeContent]} />
          </div>
        </CustomScrollbars>
      </div>
    </div>
  );
}

export default Page;

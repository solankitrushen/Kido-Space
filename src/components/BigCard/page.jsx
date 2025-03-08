'use client';

import { Suspense } from 'react';

function Page() {
  return (
    <div className="mb-4">
      <div className="rounded-xl bg-gray-900 p-6 shadow-lg">
        <div className="text-2xl font-bold text-white">
          NASA Exoplanet Exploration
        </div>
        {/* Lazy load the iframe using Suspense */}
        <Suspense fallback={<div className="mt-5 text-white">Loading...</div>}>
          <LazyIframe />
        </Suspense>
      </div>
    </div>
  );
}

// Define the lazy-loaded iframe within the same file
const LazyIframe = () => {
  return (
    <iframe
      src="https://eyes.nasa.gov/apps/exo/#/"
      title="NASA Exoplanet"
      width="100%"
      height="500px"
      className="mb-2 mt-5 border-none"
    />
  );
};

export default Page;

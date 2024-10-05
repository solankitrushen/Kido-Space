'use client';
function page() {
  return (
    <div className="mb-4">
      <div className="rounded-xl bg-gray-900 p-6 shadow-lg ">
        <div className="text-2xl font-bold text-white">
          NASA Exoplanet Exploration
        </div>
        <iframe
          src="https://eyes.nasa.gov/apps/exo/#/"
          title="NASA Exoplanet"
          width="100%"
          height="500px"
          className="mb-2 mt-5 border-none"
        />
      </div>
    </div>
  );
}

export default page;

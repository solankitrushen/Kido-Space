'use client';
import { Book } from 'lucide-react';
import React from 'react';
import Learn from './Learn';

interface UnitProps {
  number: number;
  title: string;
  isActive?: boolean;
  onClick: () => void; // Added click event handler
}

const Unit: React.FC<UnitProps> = ({
  number,
  title,
  isActive = false,
  onClick,
}) => (
  <div
    className={`cursor-pointer border-l-4 p-4 transition-all duration-300 ease-in-out ${
      isActive
        ? 'border-blue-500 bg-blue-100 dark:bg-gray-100'
        : 'border-transparent hover:border-gray-300 hover:bg-gray-100 hover:dark:bg-navy-600'
    }`}
    onClick={onClick} // Added click handler
  >
    <h3
      className={`mb-1 transition-colors duration-300 ${
        isActive ? 'text-blue-500' : 'text-gray-500'
      }`}
    >
      UNIT {number}
    </h3>
    <p
      className={`font-medium transition-colors duration-300 ${
        isActive ? 'text-blue-800' : 'text-gray-800 dark:text-white'
      }`}
    >
      {title}
    </p>
  </ div>
);

const CourseChallenge: React.FC = () => (
  <div className="mt-6 rounded-lg bg-white p-6 text-base shadow-sm dark:bg-navy-800">
    <div className="mb-4 flex items-center">
      <Book className="mr-2 h-6 w-6 dark:text-white" />
      <h3 className="text-lg font-semibold dark:text-white">
        COURSE CHALLENGE
      </h3>
    </div>
    <p className="mb-4 text-gray-600 dark:text-white">
      Test your knowledge of the concepts learned in this space course.
    </p>
    <Learn />
  </div>
);

interface SidebarProps {
  activeUnit: number;
  setActiveUnit: (unit: number) => void;
}

const CourseSidebar: React.FC<SidebarProps> = ({
  activeUnit,
  setActiveUnit,
}) => {
  return (
    <div className="mx-auto max-w-2xl rounded-lg p-6">
      <div className="mb-6 flex items-center">
        <div className="mr-4 rounded-full p-3">
          <div className="flex h-[100px] w-[130px] items-center justify-center rounded-full ">
            <img
              src="/space.png" // Path to the image in the public folder
              alt="Space Icon"
              className="h-full w-full rounded-full object-cover" // Adjusted to fill the parent div
            />
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold dark:text-white">
            Space Exploration
          </h2>
        </div>
      </div>

      <div className="overflow-hidden rounded-lg bg-white shadow-sm dark:bg-navy-800">
        {/* Units with hover and click effects */}
        <Unit
          number={1}
          title="Introduction to the Solar System"
          isActive={activeUnit === 0}
          onClick={() => setActiveUnit(0)} // Clicking makes this unit active
        />
        <Unit
          number={2}
          title="The Planets: Characteristics and Exploration"
          isActive={activeUnit === 1}
          onClick={() => setActiveUnit(1)} // Clicking makes this unit active
        />
        <Unit
          number={3}
          title="Stars and Constellations"
          isActive={activeUnit === 2}
          onClick={() => setActiveUnit(2)} // Clicking makes this unit active
        />
        <Unit
          number={4}
          title="Galaxies and Black Holes"
          isActive={activeUnit === 3}
          onClick={() => setActiveUnit(3)} // Clicking makes this unit active
        />
        <Unit
          number={5}
          title="Space Missions and Technologies"
          isActive={activeUnit === 4}
          onClick={() => setActiveUnit(4)} // Clicking makes this unit active
        />
        <Unit
          number={6}
          title="Astronomy Tools and Techniques"
          isActive={activeUnit === 5}
          onClick={() => setActiveUnit(5)} // Clicking makes this unit active
        />
        <Unit
          number={7}
          title="Living in Space: Life Beyond Earth"
          isActive={activeUnit === 6}
          onClick={() => setActiveUnit(6)} // Clicking makes this unit active
        />
        <Unit
          number={8}
          title="Space Exploration History"
          isActive={activeUnit === 7}
          onClick={() => setActiveUnit(7)} // Clicking makes this unit active
        />
        <Unit
          number={9}
          title="Future of Space Exploration"
          isActive={activeUnit === 8}
          onClick={() => setActiveUnit(8)} // Clicking makes this unit active
        />
        <Unit
          number={10}
          title="Extraterrestrial Life: Possibilities and Search"
          isActive={activeUnit === 9}
          onClick={() => setActiveUnit(9)} // Clicking makes this unit active
        />
      </div>

      <CourseChallenge />
    </div>
  );
};

export default CourseSidebar;
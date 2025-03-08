'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Flame } from 'lucide-react';
import Image from 'next/image'; // Import Image component from Next.js

const CircularProgress = ({ value }: { value: number }) => {
  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference - (value / 100) * circumference;

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg className="h-32 w-32">
        <circle
          className="text-gray-200"
          strokeWidth="5"
          stroke="currentColor"
          fill="transparent"
          r="45"
          cx="64"
          cy="64"
        />
        <circle
          className="text-brand-500"
          strokeWidth="5"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r="45"
          cx="64"
          cy="64"
        />
      </svg>
      <span className="absolute text-2xl font-bold">{value}%</span>
    </div>
  );
};

export default function WriterDashboard() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [stats, setStats] = useState({
    rank: 1,
    name: 'Alice Johnson',
    title: 'Galactic Explorer',
    totalDistance: 9,
    distanceGoal: 15,
    dailyDistance: 10,
    dailyGoal: 15,
    streak: 5,
    totalJourneys: 15,
    dailyRecord: 1.5,
    timeExploring: 120,
  });

  useEffect(() => {
    // Simulate data loading
    setTimeout(() => setIsLoaded(true), 500);
  }, []);

  const progressPercentage = Math.round(
    (stats.totalDistance / stats.distanceGoal) * 100,
  );
  const dailyProgressPercentage = Math.round(
    (stats.dailyDistance / stats.dailyGoal) * 100,
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
      transition={{ duration: 0.5 }}
      className="mx-auto grid w-full gap-4 p-4 md:grid-cols-3"
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: isLoaded ? 1 : 0.9 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
        className="col-span-1 w-full rounded-lg bg-white p-6 shadow-md dark:bg-navy-800"
      >
        <div className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-100">
            <Image
              src="/rank-icon.png" // Adjust this path to your actual image in the public folder
              alt={`Rank: ${stats.rank}`} // Use the rank for alt text
              width={64} // Size for Tailwind h-16 w-16 (16 * 4)
              height={64} // Size for Tailwind h-16 w-16 (16 * 4)
              className="rounded-full" // Add any additional classes you need
            />
          </div>
          <h3 className="text-black text-xl font-semibold dark:text-white">
            {stats.name}
          </h3>
          <p className="text-black dark:text-white">{stats.title}</p>
        </div>
        <div className="mt-6">
          <div className="h-2.5 w-full rounded-full bg-gray-200">
            <div
              className="h-2.5 rounded-full bg-brand-500"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
          <div className="text-black mt-2 flex justify-between text-sm dark:text-white">
            <span>{stats.totalDistance} Completed</span>
            <span>{stats.distanceGoal} Goal</span>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: isLoaded ? 1 : 0.9 }}
        transition={{ delay: 0.3, type: 'spring', stiffness: 100 }}
        className="col-span-1 w-full rounded-lg bg-white p-6 shadow-md dark:bg-navy-800"
      >
        <div className="flex flex-col items-center dark:text-white">
          <CircularProgress value={dailyProgressPercentage} />
          <h3 className="text-black mt-4 text-2xl font-semibold dark:text-white">
            {stats.dailyDistance} / {stats.dailyGoal} Goal
          </h3>
          <p className="text-black dark:text-white">Distance Goal</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: isLoaded ? 1 : 0.9 }}
        transition={{ delay: 0.4, type: 'spring', stiffness: 100 }}
        className="col-span-1 w-full rounded-lg bg-white p-6 shadow-md dark:bg-navy-800"
      >
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-black text-lg font-semibold dark:text-white">
            You're doing great! You have a
          </h3>
          <Flame className="text-orange-500" />
        </div>
        <p className="text-black mb-4 text-2xl font-semibold dark:text-white">
          {stats.streak} day streak
        </p>
        <div className="mb-6 flex justify-between ">
          {[...Array(7)].map((_, i) => (
            <CheckCircle key={i} className="text-brand-500" />
          ))}
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <p className="text-black text-xl font-semibold dark:text-white">
              {stats.totalJourneys}
            </p>
            <p className="text-black text-sm dark:text-white">
              Journeys Completed
            </p>
          </div>
          <div>
            <p className="text-black text-xl font-semibold dark:text-white">
              {stats.dailyRecord} Hr
            </p>
            <p className="text-black text-sm dark:text-white">
              Daily Active Time
            </p>
          </div>
          <div>
            <p className="text-black text-xl font-semibold dark:text-white">
              {stats.timeExploring} min
            </p>
            <p className="text-black text-sm dark:text-white">Time Exploring</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

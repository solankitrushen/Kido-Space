'use client';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { TracingBeam } from './tracing-beam';
import Learn from './LearnButton';
import Faq from './Faq';
import Button from '../../app/admin/default/Quiz/Button';
import QuizApp from '../../app/admin/default/Video-Quiz/page'; // Ensure this path is correct
import LazyVideo, { VideoRef } from '../video/LazyVideo';
import { useSearchParams } from 'next/navigation';

export default function TracingBeamDemo({ content }) {
  const searchParams = useSearchParams();
  const unitParam = searchParams.get('unit');
  const currentUnit = unitParam ? parseInt(unitParam, 10) : 0;
  
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizTriggered, setQuizTriggered] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const videoRef = useRef<VideoRef>(null);

  // Function to handle video time updates and quiz triggering
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const currentTime = videoRef.current.currentTime;
      const quizTime = 150; // Trigger quiz at 2:30 (150 seconds)

      if (currentTime >= quizTime && !showQuiz && !quizTriggered) {
        videoRef.current.pause(); // Pause video when quiz is triggered
        setShowQuiz(true); // Show the quiz
        setQuizTriggered(true); // Set quizTriggered to true
      }
    }
  };

  // Handle the completion of the quiz
  const handleQuizCompletion = (score: number) => {
    setScore(score); // Save the score
    setShowQuiz(false); // Hide the quiz
    setShowResult(true); // Show the result
  };

  // Handle the unmounting of the result
  const handleUnmount = () => {
    setShowResult(false);
    videoRef.current?.play(); // Resume video after quiz completion
  };

  // Manage fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) {
        setShowQuiz(false); // Hide quiz if exiting fullscreen
      }
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  return (
    <TracingBeam className="px-6">
      <div className="relative mx-auto max-w-2xl pt-4 antialiased">
        {content.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            {item.badge && (
              <h2 className="bg-black mb-4 w-fit rounded-full px-4 py-1 text-sm text-white">
                {item.badge}
              </h2>
            )}
            <p className="text-xl font-normal dark:text-white">{item.title}</p>
            <div className="prose prose-sm dark:prose-invert relative mt-5 rounded-lg text-sm dark:text-white">
              {item?.media &&
                (item.mediaType === 'video' ? (
                  <div className="relative">
                    <LazyVideo 
                      ref={videoRef}
                      src={item.media} 
                      className="mb-10" 
                      onTimeUpdate={handleTimeUpdate}
                    />
                    {showQuiz && (
                      <div className="bg-black absolute inset-0 z-10 flex items-center justify-center bg-opacity-75">
                        <div className="rounded-lg bg-white p-6">
                          {/* @ts-ignore */}
                          <QuizApp onComplete={handleQuizCompletion} />
                        </div>
                      </div>
                    )}
                    {showResult && (
                      <div className="bg-black absolute inset-0 z-10 flex items-center justify-center bg-opacity-75">
                        <div className="rounded-lg bg-gray-900 p-6">
                          <h2 className="mb-4 text-2xl font-bold">
                            Quiz Result
                          </h2>
                          <p className="mb-4 text-lg">
                            You scored {score} out of 3.
                          </p>
                          <button
                            className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
                            onClick={handleUnmount}
                          >
                            Continue
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Image
                    src={item.media}
                    alt="media thumbnail"
                    height="1000"
                    width="1000"
                    className="mb-10 rounded-lg object-cover"
                  />
                ))}
              {item.description}
            </div>
          </div>
        ))}
        <Faq />
        <div className="justify-left mt-6 flex">
          <Learn currentUnit={currentUnit} totalUnits={5} />
          <Button />
        </div>
      </div>
    </TracingBeam>
  );
}

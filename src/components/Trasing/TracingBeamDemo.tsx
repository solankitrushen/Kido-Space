'use client';
import React from 'react';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import { TracingBeam } from './tracing-beam';
import Learn from './LearnButton';
import Faq from './Faq'

export default function TracingBeamDemo({ content }) {
  return (
    <>
      <TracingBeam className="px-6">
        <div className="relative mx-auto max-w-2xl pt-4 antialiased">
          {/* Loop through the content and display each item */}
          {content.map((item, index) => (
            <div key={`content-${index}`} className="mb-10">
              <h2 className="bg-black mb-4 w-fit rounded-full px-4 py-1 text-sm text-white">
                {item.badge}
              </h2>

              <p className="text-xl font-normal dark:text-white">
                {item.title}
              </p>

              <div className="prose prose-sm dark:prose-invert mt-5 rounded-lg  text-sm dark:text-white">
                {item?.media &&
                  (item.mediaType === 'video' ? (
                    <video
                      src={item.media}
                      controls
                      className="mb-10 rounded-lg object-cover"
                    />
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
          {/* Render the Learn button after the iteration ends */}
          <div className="justify-left mt-6 flex">
            <Learn />
          </div>
        </div>
      </TracingBeam>
    </>
  );
}

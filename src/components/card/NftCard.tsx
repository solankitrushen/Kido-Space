import { IoHeart, IoHeartOutline } from 'react-icons/io5';
import { useState } from 'react';
import Card from 'components/card';
import Image from 'next/image';
import { useLikedNfts } from './LikedNftsContext';
import Link from 'next/link';

interface NftCardProps {
  title: string;
  author: string;
  price?: number;
  image: string;
  bidders?: string[];
  extra?: string;
  link?: string;
  description?: string;
  stats?: {
    gravity: string;
    atmosphere: string;
    dayLength: string;
  };
}

const NftCard = (props: NftCardProps) => {
  const { title, author, image, bidders, extra, link, description, stats } = props;
  const { likedNfts, toggleLike } = useLikedNfts();
  const isLiked = likedNfts.includes(title);

  return (
    <Card
      extra={`flex flex-col w-full h-full !p-4 3xl:p-![18px] ${extra}`}
    >
      <div className="h-full w-full">
        {/* Image Section */}
        <div className="relative w-full">
          <Image
            src={image}
            width={500}
            height={500}
            className="mb-3 h-[200px] w-full rounded-xl object-cover"
            alt={title}
          />
          <button
            onClick={() => toggleLike(title)}
            className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 shadow-md backdrop-blur-sm transition-colors hover:bg-white"
          >
            <svg
              stroke="currentColor"
              fill={isLiked ? 'currentColor' : 'none'}
              strokeWidth="2"
              viewBox="0 0 24 24"
              className={`h-4 w-4 ${isLiked ? 'text-red-500' : 'text-navy-700'}`}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>
        </div>

        {/* Content Section */}
        <div className="flex flex-col gap-4">
          {/* Title and Author */}
          <div>
            <h5 className="text-lg font-bold text-navy-700 dark:text-white">
              {title}
            </h5>
            <p className="mt-1 text-sm font-medium text-gray-600 dark:text-gray-400">
              By {author}
            </p>
          </div>

          {/* Stats Grid */}
          {stats && (
            <div className="grid grid-cols-2 gap-3 rounded-xl bg-gray-50 p-3 dark:bg-navy-900">
              <div className="space-y-1">
                <p className="text-xs font-medium text-gray-600 dark:text-gray-400">Gravity</p>
                <p className="text-sm font-semibold text-navy-700 dark:text-white">{stats.gravity}</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-medium text-gray-600 dark:text-gray-400">Day Length</p>
                <p className="text-sm font-semibold text-navy-700 dark:text-white">{stats.dayLength}</p>
              </div>
              <div className="col-span-2 space-y-1">
                <p className="text-xs font-medium text-gray-600 dark:text-gray-400">Atmosphere</p>
                <p className="text-sm font-semibold text-navy-700 dark:text-white">{stats.atmosphere}</p>
              </div>
            </div>
          )}

          {/* Description */}
          <div className="space-y-2">
            {description?.split('\n').map((line, index) => (
              <p key={index} className="text-sm text-gray-600 dark:text-gray-400">
                {line}
              </p>
            ))}
          </div>

          {/* Bidders */}
          {bidders && bidders.length > 0 && (
            <div className="flex flex-row-reverse">
              {bidders.map((bidder, index) => (
                <span
                  key={index}
                  className="z-10 -mr-3 h-8 w-8 rounded-full border-2 border-white dark:border-navy-800"
                >
                  <Image
                    className="h-full w-full rounded-full object-cover"
                    src={bidder}
                    alt={`Contributor ${index + 1}`}
                    width={50}
                    height={50}
                  />
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};

export default NftCard;

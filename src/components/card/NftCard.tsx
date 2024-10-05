import { IoHeart, IoHeartOutline } from 'react-icons/io5';
import { useState } from 'react';
import Card from 'components/card';
import Image from 'next/image';
import { useLikedNfts } from './LikedNftsContext';
import Link from 'next/link';

const NftCard = ({
  title,
  author,
  price,
  image,
  bidders,
  extra,
  onExplore,
}) => {
  const [heart, setHeart] = useState(false);
  const { addNftToHistory, removeNftFromHistory } = useLikedNfts();

  const handleExploreClick = () => {
    if (onExplore) {
      onExplore(); // Call the provided onExplore function
    }
  };

  const handleLike = () => {
    setHeart(!heart);
    if (!heart) {
      addNftToHistory({ title, author, price, image });
    } else {
      removeNftFromHistory({ title, author, price, image });
    }
  };

  return (
    <Card
      extra={`flex flex-col w-full h-full !p-4 3xl:p-![18px] bg-white ${extra}`}
    >
      <div className="h-full w-full">
        <div className="relative w-full">
          <Image
            width="2"
            height="20"
            className="mb-3 h-full w-full rounded-xl 3xl:h-full 3xl:w-full"
            src={image}
            alt=""
          />
          <button
            onClick={handleLike}
            className="absolute right-3 top-3 flex items-center justify-center rounded-full bg-white p-2 text-brand-500 hover:cursor-pointer"
          >
            <div className="flex h-full w-full items-center justify-center rounded-full text-xl hover:bg-gray-50 dark:text-navy-900">
              {heart ? (
                <IoHeart className="text-brand-500" />
              ) : (
                <IoHeartOutline />
              )}
            </div>
          </button>
        </div>

      

        <div className="flex items-center justify-between md:flex-col md:items-start lg:flex-row lg:justify-between xl:flex-col 2xl:items-start 3xl:flex-row 3xl:items-center 3xl:justify-between">
          <div className="flex">
            <p className="mb-2 text-sm font-bold text-brand-500 dark:text-white">
              lorem : {price} <span>points</span>
            </p>
          </div>
          <div>
            <Link href="/admin/nft-marketplace/Tresing">
              <button className="linear rounded-[20px] bg-brand-900 px-4 py-2 text-base font-medium text-white transition duration-200 hover:bg-brand-800 active:bg-brand-700 dark:bg-brand-800 dark:hover:bg-brand-300 dark:active:opacity-90">
                Explore
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default NftCard;

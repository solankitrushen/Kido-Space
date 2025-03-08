'use client';

import Banner from '../../../../components/admin/nft-marketplace/Banner';
import NFt2 from '/public/img/nfts/Nft2.png';
import NFt4 from '/public/img/nfts/Nft4.png';
import NFt3 from '/public/img/nfts/Nft3.png';
import NFt5 from '/public/img/nfts/Nft5.png';
import NFt6 from '/public/img/nfts/Nft6.png';
import avatar1 from '/public/img/avatars/avatar1.png';
import avatar2 from '/public/img/avatars/avatar2.png';
import avatar3 from '/public/img/avatars/avatar3.png';

import tableDataTopCreators from '../../../../variables/nfts/marketplace/tableDataTopCreators';
import HistoryCard from '../../../../components/admin/nft-marketplace/HistoryItem';
import TopCreatorTable from '../../../../components/admin/nft-marketplace/TableTopCreators';
import NftCard from '../../../../components/card/NftCard';
import { LikedNftsProvider } from '../../../../components/card/LikedNftsContext';
import Link from 'next/link';

const MarketplacePage = () => {
  // Define your data for the NFT Card
  const nftData = {
    title: 'Galaxies',
    author: 'John Doe',
    price: 120,
    image: '/images/sample-nft.jpg',
    bidders: ['/images/avatar1.jpg', '/images/avatar2.jpg'],
    extra: '',
  };

  return (
    <LikedNftsProvider>
      <div className="mt-3 grid h-full grid-cols-1 gap-5 xl:grid-cols-2 2xl:grid-cols-3">
        <div className="col-span-1 h-fit w-full xl:col-span-1 2xl:col-span-2">
          {/* NFt Banner */}
          <Banner />

          {/* NFt Header */}
          <div className="mb-4 mt-5 flex flex-col justify-between px-4 md:flex-row md:items-center">
            <h4 className="ml-1 text-2xl font-bold text-navy-700 dark:text-white">
              Space Discoveries
            </h4>
            <ul className="mt-4 flex items-center justify-between md:mt-0 md:justify-center md:!gap-5 2xl:!gap-12">
              <li>
                <Link
                  href="/admin/nft-marketplace/Cards"
                  className="text-base font-medium text-brand-500 hover:text-brand-500 dark:text-white"
                >
                  Galaxies
                </Link>
              </li>

              <li>
                <a
                  className="text-base font-medium text-brand-500 hover:text-brand-500 dark:text-white"
                  href=" "
                >
                  Stars
                </a>
              </li>
              <li>
                <a
                  className="text-base font-medium text-brand-500 hover:text-brand-500 dark:text-white"
                  href=" "
                >
                  Planets
                </a>
              </li>
              <li>
                <a
                  className="text-base font-medium text-brand-500 hover:text-brand-500 dark:text-white"
                  href=" "
                >
                  Moons
                </a>
              </li>
            </ul>
          </div>

          {/* Space Discoveries trending card */}
          <div className="z-20 grid grid-cols-1 gap-5 md:grid-cols-3">
            <NftCard
              bidders={[avatar1, avatar2, avatar3]}
              title="Andromeda Galaxy"
              author="NASA"
              description="Contains over a trillion stars"
              image={NFt3}
            />
            <NftCard
              bidders={[avatar1, avatar2, avatar3]}
              title="Pulsar Star"
              author="ESA"
              description="Emits radiation beams"
              image={NFt2}
            />
            <NftCard
              bidders={[avatar1, avatar2, avatar3]}
              title="Mars Surface"
              author="SpaceX"
              description="Rich in iron oxide"
              image={NFt4}
            />
          </div>

          {/* Recently Added section */}
          <div className="mb-5 mt-5 flex items-center justify-between px-[26px]"></div>

          {/* Recently Added Space Discoveries */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            <NftCard
              bidders={[avatar1, avatar2, avatar3]}
              title="Saturn Rings"
              author="Hubble"
              description="Composed of ice particles"
              image={NFt4}
            />
            <NftCard
              bidders={[avatar1, avatar2, avatar3]}
              title="Jupiter's Storm"
              author="JPL"
              description="Contains 300 ppm of carbon"
              image={NFt5}
            />
            <NftCard
              bidders={[avatar1, avatar2, avatar3]}
              title="Black Hole"
              author="NASA"
              description="Has a mass of 10 solar masses"
              image={NFt6}
            />
          </div>
        </div>

        {/* right side section */}

        <div className="col-span-1 h-full w-full rounded-xl 2xl:col-span-1">
          <TopCreatorTable tableData={tableDataTopCreators} />
          <div className="mb-5" />
          <HistoryCard />
        </div>
      </div>
    </LikedNftsProvider>
  );
};

export default MarketplacePage;

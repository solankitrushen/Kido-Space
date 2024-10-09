// page.tsx
'use client';

import Banner from 'components/admin/nft-marketplace/Banner';
import NFt2 from '/public/img/nfts/Nft2.png';
import NFt4 from '/public/img/nfts/Nft4.png';
import NFt3 from '/public/img/nfts/Nft3.png';
import NFt5 from '/public/img/nfts/Nft5.png';
import NFt6 from '/public/img/nfts/Nft6.png';
import avatar1 from '/public/img/avatars/avatar1.png';
import avatar2 from '/public/img/avatars/avatar2.png';
import avatar3 from '/public/img/avatars/avatar3.png';

import tableDataTopCreators from 'variables/nfts/marketplace/tableDataTopCreators';
import HistoryCard from 'components/admin/nft-marketplace/HistoryItem';
import TopCreatorTable from 'components/admin/nft-marketplace/TableTopCreators';
import NftCard from 'components/card/NftCard';
import { LikedNftsProvider } from 'components/card/LikedNftsContext';
import Link from 'next/link';

const Marketplace = () => {
  return (
    <LikedNftsProvider>
      <div className="overflow-hidden">
        <div className="mt-3 grid h-full grid-cols-1 gap-5 xl:grid-cols-2 2xl:grid-cols-3">
          <div className="col-span-1 h-fit w-full xl:col-span-1 2xl:col-span-2">
            {/* NFt Banner */}
            <Banner />

            {/* NFt Header */}
            <div className="mb-4 mt-5 flex flex-col justify-between px-4 md:flex-row md:items-center">
              <h4 className="ml-1 text-2xl font-bold text-navy-700 dark:text-white">
                <Link href="/admin/nft-marketplace">Space Discovery</Link>
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
                  <Link
                    href="/admin/nft-marketplace/Cards"
                    className="text-base font-medium text-brand-500 hover:text-brand-500 dark:text-white"
                  >
                    Stars
                  </Link>
                </li>
                <li>
                  <Link
                    href="/admin/nft-marketplace/Cards"
                    className="text-base font-medium text-brand-500 hover:text-brand-500 dark:text-white"
                  >
                    Planets
                  </Link>
                </li>
                <li>
                  <Link
                    href="/admin/nft-marketplace/Cards"
                    className="text-base font-medium text-brand-500 hover:text-brand-500 dark:text-white"
                  >
                    Mones
                  </Link>
                </li>
              </ul>
            </div>

            {/* Space Discoveries trending card */}
            <div className="z-20 grid grid-cols-1 gap-5 md:grid-cols-3">
        <NftCard
  bidders={[avatar1, avatar2, avatar3]}
  title="Saturn Rings"
  author="Hubble"
  price="200 ETH"  // Example price
  image={NFt4}
  extra="Composed of ice particles"  // Use extra instead of description
  onExplore={() => console.log('Exploring Saturn Rings')}
/>


<NftCard
  bidders={[avatar1, avatar2, avatar3]}
  title="Saturn Rings"
  author="Hubble"
  price="200 ETH"  // Example price
  image={NFt4}
  extra="Composed of ice particles"  // Use extra instead of description
  onExplore={() => console.log('Exploring Saturn Rings')}
/>


<NftCard
  bidders={[avatar1, avatar2, avatar3]}
  title="Saturn Rings"
  author="Hubble"
  price="200 ETH"  // Example price
  image={NFt4}
  extra="Composed of ice particles"  // Use extra instead of description
  onExplore={() => console.log('Exploring Saturn Rings')}
/>


            </div>

            {/* Recently Added section */}
            <div className="mb-5 mt-5 flex items-center justify-between px-[26px]">
              <h4 className="text-2xl font-bold text-navy-700 dark:text-white">
                Recently Added
              </h4>
            </div>

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
        <div className="container mx-auto my-8">
          <h4 className="mb-4 text-2xl font-bold text-navy-700 dark:text-white">
            Recently Added
          </h4>
          <div className="flex w-full flex-col space-y-4 lg:flex-row lg:space-x-4 lg:space-y-0">
            <div className="flex-1">
              <NftCard
                bidders={[avatar1, avatar2, avatar3]}
                title="Saturn Rings"
                author="Hubble"
                description="Composed of ice particles"
                image={NFt4}
              />
            </div>
            <div className="flex-1">
              <NftCard
                bidders={[avatar1, avatar2, avatar3]}
                title="Jupiter's Storm"
                author="JPL"
                description="Contains 300 ppm of carbon"
                image={NFt5}
              />
            </div>
            <div className="flex-1">
              <NftCard
                bidders={[avatar1, avatar2, avatar3]}
                title="Black Hole"
                author="NASA"
                description="Has a mass of 10 solar masses"
                image={NFt6}
              />
            </div>
          </div>
        </div>
      </div>
    </LikedNftsProvider>
  );
};

export default Marketplace;

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
  const planetaryData = [
    {
      title: "Mars - Red Planet",
      author: "Mars Exploration",
      description: "Diameter: 6,779 km\nTemp: -63°C (avg)\nMoons: Phobos, Deimos\nKey Feature: Home to Olympus Mons, the largest volcano in the solar system",
      stats: {
        gravity: "3.7 m/s²",
        atmosphere: "CO₂ rich",
        dayLength: "24h 37m"
      },
      image: NFt3,
      bidders: [avatar1, avatar2]
    },
    {
      title: "Jupiter - Gas Giant",
      author: "Juno Mission",
      description: "Diameter: 139,820 km\nTemp: -110°C (cloud top)\nMoons: 79 known\nKey Feature: Great Red Spot, a storm lasting over 400 years",
      stats: {
        gravity: "24.79 m/s²",
        atmosphere: "H₂, He",
        dayLength: "9h 56m"
      },
      image: NFt2,
      bidders: [avatar2, avatar3]
    },
    {
      title: "Saturn - Ring World",
      author: "Cassini Mission",
      description: "Diameter: 116,460 km\nTemp: -178°C (avg)\nMoons: 82 known\nKey Feature: Spectacular ring system spanning 282,000 km",
      stats: {
        gravity: "10.44 m/s²",
        atmosphere: "H₂, He",
        dayLength: "10h 42m"
      },
      image: NFt4,
      bidders: [avatar1, avatar3]
    }
  ];

  const recentDiscoveries = [
    {
      title: "Venus - Earth's Twin",
      author: "Venus Express",
      description: "Diameter: 12,104 km\nTemp: 462°C (avg)\nMoons: None\nKey Feature: Extreme greenhouse effect, hottest planet",
      stats: {
        gravity: "8.87 m/s²",
        atmosphere: "CO₂, N₂",
        dayLength: "243 days"
      },
      image: NFt4,
      bidders: [avatar1, avatar2]
    },
    {
      title: "Neptune - Ice Giant",
      author: "Voyager Mission",
      description: "Diameter: 49,244 km\nTemp: -214°C (avg)\nMoons: 14 known\nKey Feature: Strongest winds in the solar system",
      stats: {
        gravity: "11.15 m/s²",
        atmosphere: "H₂, He, CH₄",
        dayLength: "16h 6m"
      },
      image: NFt5,
      bidders: [avatar2, avatar3]
    },
    {
      title: "Mercury - Swift Planet",
      author: "MESSENGER Mission",
      description: "Diameter: 4,879 km\nTemp: -180°C to 430°C\nMoons: None\nKey Feature: Extreme temperature variations",
      stats: {
        gravity: "3.7 m/s²",
        atmosphere: "Minimal",
        dayLength: "176 days"
      },
      image: NFt6,
      bidders: [avatar1, avatar3]
    }
  ];

  return (
    <LikedNftsProvider>
      <div className="mt-3 grid h-full grid-cols-1 gap-6 xl:grid-cols-2 2xl:grid-cols-3">
        <div className="col-span-1 h-fit w-full xl:col-span-1 2xl:col-span-2">
          {/* Enhanced Banner */}
          <div className="px-4 2xl:px-6">
            <Banner />
          </div>

          {/* Enhanced Header */}
          <div className="mb-8 mt-8 flex flex-col justify-between px-4 md:flex-row md:items-center 2xl:px-6">
            <h4 className="ml-1 text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Solar System Exploration
            </h4>
            <div className="mt-4 flex flex-wrap gap-4 md:mt-0">
              {['Planets', 'Moons', 'Asteroids', 'Comets', 'Dwarf Planets'].map((category) => (
                <button
                  key={category}
                  className="rounded-full px-4 py-2 text-sm font-medium 
                    bg-white dark:bg-navy-800 
                    text-navy-700 dark:text-white
                    hover:bg-gray-100 dark:hover:bg-navy-700
                    transition-all duration-200 shadow-sm"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Featured Planets Grid */}
          <div className="grid grid-cols-1 gap-6 px-4 md:grid-cols-3 2xl:gap-8 2xl:px-6">
            {planetaryData.map((planet, index) => (
              <div key={index} className="transform transition-all duration-200 hover:scale-105">
                <NftCard
                  title={planet.title}
                  author={planet.author}
                  description={planet.description}
                  image={planet.image}
                  bidders={planet.bidders}
                  extra="bg-white dark:bg-navy-800 shadow-xl rounded-2xl"
                  stats={planet.stats}
                />
              </div>
            ))}
          </div>

          {/* Recent Discoveries Section */}
          <div className="mt-12 px-4 2xl:px-6">
            <h4 className="mb-6 text-2xl font-bold text-navy-700 dark:text-white">
              Other Planetary Bodies
            </h4>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 2xl:gap-8">
              {recentDiscoveries.map((planet, index) => (
                <div key={index} className="transform transition-all duration-200 hover:scale-105">
                  <NftCard
                    title={planet.title}
                    author={planet.author}
                    description={planet.description}
                    image={planet.image}
                    bidders={planet.bidders}
                    extra="bg-white dark:bg-navy-800 shadow-xl rounded-2xl"
                    stats={planet.stats}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Sidebar */}
        <div className="col-span-1 h-full w-full rounded-xl px-4 2xl:px-6">
          <div className="sticky top-4 space-y-6">
            <TopCreatorTable tableData={tableDataTopCreators} />
            <HistoryCard />
          </div>
        </div>
      </div>
    </LikedNftsProvider>
  );
};

export default MarketplacePage;

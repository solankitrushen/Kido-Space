import nft1 from '/public/img/nfts/NftBanner1.jpg';
import CustomButton from './CustomButton';
import CB from './CB';

const Banner1 = () => {
  return (
    <div
      className="flex w-full flex-col rounded-[20px] bg-cover px-[30px] py-[30px] md:px-[64px] md:py-[56px]"
      style={{ backgroundImage: `url(${nft1.src})` }}
    >
      <div className="w-full">
        <h4 className="mb-[14px] max-w-full text-xl font-bold text-white md:w-[64%] md:text-3xl md:leading-[42px] lg:w-[46%] xl:w-[85%] 2xl:w-[75%] 3xl:w-[52%]">
          Explore Amazing Exoplanets Beyond Our Solar System!
        </h4>
        <p className="mb-[40px] max-w-full text-base font-medium text-[#E3DAFF] md:w-[64%] lg:w-[40%] xl:w-[72%] 2xl:w-[60%] 3xl:w-[45%]">
          Discover exciting planets far, far away! Learn cool facts, play fun
          games, and embark on a space adventure to explore distant worlds.
        </p>

        {/* Align buttons horizontally */}
        <div className="mt-[36px] flex items-center gap-4 sm:justify-start 2xl:gap-10">
          <CustomButton />
          <CB />
        </div>
      </div>
    </div>
  );
};

export default Banner1;

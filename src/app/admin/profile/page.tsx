'use client';
import Banner from 'components/admin/profile/Banner';
import Project from 'components/admin/profile/Project';
import Traker from 'components/admin/profile/Traker';
const ProfileOverview = () => {
  return (
    <div className="flex w-full flex-col  lg:gap-5">
      <div className="mt-3 flex h-fit w-full flex-col gap-5 ">
        <div className="col-span-4 lg:!mb-0">
          <Banner />
        </div>
        <Traker></Traker>
      </div>
      {/* all project & ... */}

      <div className="col-span-5 lg:col-span-12 lg:mb-0 3xl:!col-span-3">
        <div className="3xl:col col-span-5 lg:col-span-6 lg:mb-0">
          <Project />
        </div>
      </div>
    </div>
  );
};

export default ProfileOverview;

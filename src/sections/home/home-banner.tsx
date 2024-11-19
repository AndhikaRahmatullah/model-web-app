import React from 'react';
import { Icon } from '@iconify/react';

// ----------------------------------------------------------------------

const HomeBanner: React.FC = () => {
  return (
    <div style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/assets/banner.jpg")' }} className="flex h-screen items-center bg-cover bg-center p-5">
      <div className="flex max-w-[800px] flex-col gap-5">
        <p className="text-center text-3xl font-bold text-white md:text-left md:text-4xl">Sistem Informasi Area Rawan Longsor</p>

        <p className="text-center text-lg font-normal text-white md:text-left md:text-xl">
          Membantu memetakan dan menganalisis area rawan longsor menggunakan teknologi Geographic Information System untuk mendukung mitigasi bencana.
        </p>

        <div className="flex flex-row items-center justify-center gap-1 md:justify-start">
          <Icon icon="basil:location-solid" width={24} className="text-white" />
          <p className="text-sm font-bold italic text-white md:text-xl">Kecamatan Ciawi, Kabupaten Bogor</p>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;

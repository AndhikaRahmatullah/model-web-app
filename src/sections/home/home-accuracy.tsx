import React from 'react';

// ----------------------------------------------------------------------

const HomeAccuracy: React.FC = () => {
  return (
    <div className="flex items-center justify-center px-5 py-10">
      <div className="flex max-w-[800px] flex-col gap-4">
        <p className="text-center text-xl font-bold md:text-2xl">Bagaimana Tingkat Akurasi dan Keandalan Data yang Digunakan untuk Mendeteksi Area Rawan Longsor ?</p>

        <p className="text-center text-sm md:text-base">
          Data ini dihasilkan dengan tingkat akurasi sebesar 92% melalui analisis GIS berbasis Google Earth Engine, memberikan hasil yang andal dan presisi untuk mendukung mitigasi bencana dan
          pengelolaan risiko lingkungan.
        </p>
      </div>
    </div>
  );
};

export default HomeAccuracy;

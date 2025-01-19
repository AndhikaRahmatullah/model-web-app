import React from 'react';

// ----------------------------------------------------------------------

const AboutUse: React.FC = () => {
  return (
    <div className="flex flex-col gap-5 px-5 py-5 md:py-10">
      <div className="flex flex-col gap-5 md:flex-row">
        <div className="h-[300px] w-full overflow-hidden rounded-lg shadow-md drop-shadow-md md:w-[300px]">
          <img src="/assets/sentinel-2a.jpg" alt="sentinel-2a" className="h-full w-full origin-center object-cover" />
        </div>

        <div className="flex h-full max-w-[500px] flex-1 flex-col gap-3 py-2">
          <p className="text-xl font-bold md:text-2xl">
            Menggunakan Citra Satelit <span className="text-primary-3">Sentinel-2A</span>
          </p>
          <p className="text-justify text-sm md:text-left md:text-base">
            Sentinel-2A adalah satelit penginderaan jauh dari European Space Agency yang dilengkapi MultiSpectral Instrument untuk merekam citra dengan resolusi hingga 10 meter, mendukung analisis
            vegetasi dan topografi dalam pemetaan area rawan longsor secara akurat.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-5 md:flex-row-reverse">
        <div className="h-[300px] w-full overflow-hidden rounded-lg shadow-md drop-shadow-md md:w-[300px]">
          <img src="/assets/ndvi.png" alt="sentinel-2a" className="h-full w-full origin-center object-cover" />
        </div>

        <div className="flex h-full max-w-[500px] flex-1 flex-col gap-3 py-2">
          <p className="text-xl font-bold md:text-right md:text-2xl">
            Menggunakan Metode <span className="text-primary-3">rdNDVI</span>
          </p>
          <p className="text-justify text-sm md:text-right md:text-base">
            rdNDVI (Relative Difference Normalized Difference Vegetation Index) adalah pengembangan dari NDVI yang membandingkan perubahan indeks vegetasi antara dua periode waktu, digunakan untuk
            mengidentifikasi dinamika vegetasi dan memantau perubahan lingkungan, seperti area rawan longsor. Adapun analisis ini menggunakan periode waktu antara tahun 2020 - 2024.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUse;

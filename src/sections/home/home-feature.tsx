import React from 'react';
import { Icon } from '@iconify/react';
// hooks
import { useResponsive } from '/src/hooks/use-responsive';

// ----------------------------------------------------------------------

interface DataInterface {
  title: string;
  desc: string;
  icon: string;
}

// ----------------------------------------------------------------------

const HomeFeature: React.FC = () => {
  const { mdUp } = useResponsive();

  const data: DataInterface[] = [
    {
      title: 'Analisis Area',
      desc: 'Jelajahi informasi area rawan longsor dengan analisis akurat dan peta interaktif untuk mendukung mitigasi bencana',
      icon: 'ph:map-pin-area-fill',
    },
    {
      title: 'Visualisasi Spasial',
      desc: 'Visualisasikan data area rawan longsor secara interaktif dengan peta dinamis yang mudah diakses',
      icon: 'fluent:search-visual-24-filled',
    },
    {
      title: 'Data Akurasi',
      desc: 'Temukan data akurat dari citra satelit untuk analisis risiko longsor yang terpercaya',
      icon: 'material-symbols:target',
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-5 px-5 py-10 md:flex-row lg:gap-20">
      {data.map((d, i) => (
        <div key={i} className="flex w-full flex-col items-center gap-4 rounded-lg md:w-[300px]">
          <Icon icon={d.icon} width={mdUp ? 60 : 50} className="" />

          <p className="text-center text-xl font-bold md:text-2xl">{d.title}</p>

          <p className="text-center text-sm text-primary-1/50 md:text-base">{d.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default HomeFeature;

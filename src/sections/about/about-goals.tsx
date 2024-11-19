import React from 'react';

// ----------------------------------------------------------------------

interface DataInterface {
  title: string;
  desc: string;
}

// ----------------------------------------------------------------------

const AboutGoals: React.FC = () => {
  const data: DataInterface[] = [
    {
      title: 'Tujuan',
      desc: 'Aplikasi ini bertujuan untuk menyediakan sistem informasi berbasis WebGIS yang memetakan area rawan longsor secara interaktif, akurat, dan mudah diakses. Dengan data yang disajikan, aplikasi ini mendukung upaya mitigasi risiko bencana, membantu perencanaan wilayah, dan meningkatkan kesadaran masyarakat terhadap potensi bahaya longsor.',
    },
    {
      title: 'Manfaat',
      desc: '  Memberikan informasi lokasi rawan longsor yang mudah dipahami, membantu masyarakat meningkatkan kesadaran akan risiko lingkungan dan mengambil langkah pencegahan untuk mengurangi dampak bencana.',
    },
  ];

  return (
    <div className="flex flex-col gap-5 px-5 py-5 md:flex-row md:py-10">
      {data.map((d, i) => (
        <div key={i} className="md:w-1/2">
          <div className="flex flex-col gap-2 rounded-lg bg-gradient-to-br from-primary-1 via-primary-2 to-primary-1 p-4 shadow-lg drop-shadow-md md:h-[360px] lg:h-[200px]">
            <div className="flex flex-row items-center gap-2">
              <p className="text-xl font-bold text-white md:text-2xl">{d.title}</p>
              <div className="h-1 w-full rounded-full bg-white" />
            </div>

            <p className="text-justify text-sm text-white md:text-left md:text-base">{d.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutGoals;

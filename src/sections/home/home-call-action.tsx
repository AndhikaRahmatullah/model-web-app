import React from 'react';
import { Icon } from '@iconify/react';
// routes
import { paths } from '/src/routes/paths';
// components
import { Button } from '/src/components/button';

// ----------------------------------------------------------------------

const HomeCallAction: React.FC = () => {
  return (
    <div style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/assets/banner-2.jpg")' }} className="flex items-center justify-center bg-cover bg-center px-5 py-10">
      <div className="flex max-w-[600px] flex-col items-center justify-center gap-3">
        <p className="text-center text-xl font-semibold text-white md:text-2xl">Temukan Informasi Area Rawan Longsor Melalui Peta Interaktif Yang Mudah Digunaan</p>

        <Button component="RouterLink" href={paths.main.map.root} variant="outlined" className="flex flex-row items-center justify-center border-white text-white">
          <span>Jelajahi Peta Sekarang</span>
          <Icon icon="mingcute:right-fill" width={20} />
        </Button>
      </div>
    </div>
  );
};

export default HomeCallAction;

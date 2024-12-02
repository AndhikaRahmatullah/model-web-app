import React, { useCallback } from 'react';
import { Icon } from '@iconify/react';
// hooks
import { useResponsive } from '/src/hooks/use-responsive';
// components
import { Button } from '/src/components/button';
import { paths } from '/src/routes/paths';

// ----------------------------------------------------------------------

const Footer: React.FC = () => {
  const date = new Date();

  const { lgUp } = useResponsive();

  const handleOpenUrl = useCallback((url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-5 bg-gradient-to-b from-primary-4/20 via-white to-white p-5">
      <div className="flex w-full flex-col items-center justify-between gap-5 md:flex-row md:items-start md:gap-0">
        <div className="flex flex-col gap-3 md:gap-8 lg:gap-10">
          <div className="flex flex-row items-center gap-2">
            <img src="/logo/logo_single.png" alt="GIT" className="w-[50px] object-contain md:w-[60px]" />

            {lgUp ? (
              <div>
                <p className="text-lg font-semibold leading-none text-primary-1">Geospatial Information Technology</p>
                <p className="text-sm font-semibold leading-none text-primary-1">Universitas Ibn Khaldun Bogor</p>
              </div>
            ) : (
              <div>
                <p className="text-lg font-semibold leading-none">Geospatial</p>
                <p className="text-sm font-semibold leading-none">Information Technology</p>
              </div>
            )}
          </div>

          <div className="flex flex-row items-center justify-center gap-2 md:justify-start">
            <Button component="RouterLink" href={paths.main.root} variant="gost" className="md:text-base">
              Home
            </Button>

            <span>|</span>

            <Button component="RouterLink" href={paths.main.map.root} variant="gost" className="md:text-base">
              Maps
            </Button>

            <span>|</span>

            <Button component="RouterLink" href={paths.main.about.root} variant="gost" className="md:text-base">
              About
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-4 md:w-[400px]">
          <div>
            <p className="text-sm font-bold md:text-base">Alamat :</p>

            <Button onClick={() => handleOpenUrl('https://maps.app.goo.gl/PXdfor5p4vUJkSoV8')} variant="gost" className="text-left">
              Jl. Sholeh Iskandar, RT.01/RW.10, Kedungbadak, Kec. Tanah Sereal, Kota Bogor, Jawa Barat 16162
            </Button>
          </div>

          <div>
            <p className="text-sm font-bold md:text-base">Sosial :</p>

            <div className="mt-1 flex flex-row items-center gap-2">
              <Button onClick={() => handleOpenUrl('https://www.instagram.com/andhikarhmt_/')} variant="gost">
                <Icon icon="skill-icons:instagram" width={25} />
              </Button>

              <Button onClick={() => handleOpenUrl('https://github.com/AndhikaRahmatullah/')} variant="gost">
                <Icon icon="icon-park:github" width={25} />
              </Button>

              <Button onClick={() => handleOpenUrl('https://wa.me/6288290338993')} variant="gost">
                <Icon icon="logos:whatsapp-icon" width={25} />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <p className="text-center text-xs font-semibold italic opacity-30 md:text-sm">Copyright © {date.getFullYear()} Geospatial Information Technology UIKA Bogor</p>
    </div>
  );
};

export default Footer;

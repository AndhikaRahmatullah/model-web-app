import React, { useCallback, useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import { twMerge } from 'tailwind-merge';
import { motion, AnimatePresence } from 'framer-motion';
// routes
import { usePathname, useRouter } from '/src/routes/hooks';
// hooks
import { useBoolean } from '/src/hooks/use-boolean';
// components
import { Button } from '/src/components/button';
//
import { configNavigation } from './config-navigation';

// ----------------------------------------------------------------------

const Navbar: React.FC = () => {
  const [yOffset, setYOffset] = useState<number>(0);

  const pathname = usePathname();

  const isShowMobileMenu = useBoolean(false);

  // ON SCROLL
  useEffect(() => {
    const handleScroll = (): void => {
      setYOffset(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [setYOffset]);

  return (
    <div
      className={twMerge(
        'via-primary-2 fixed left-0 top-0 z-[999] flex w-full flex-row items-center justify-between bg-gradient-to-br from-primary-1 to-primary-1 px-5 py-3',
        yOffset && 'shadow-md shadow-neutral-800/50'
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img src="/logo/logo_single.png" alt="GIT" className="w-[50px] object-contain" />

        <div>
          <p className="text-lg font-semibold leading-none text-white">Geospatial</p>
          <p className="text-sm font-semibold leading-none text-white">Information Technology</p>
        </div>
      </div>

      <div className="hidden flex-row items-center gap-5 md:flex">
        {configNavigation.map((menu, i) => (
          <Button
            key={i}
            component="RouterLink"
            href={menu.path}
            variant="gost"
            className={twMerge('flex flex-row items-center gap-1 border-b-2 border-transparent p-2 text-base text-white/70', menu.path === pathname && 'border-white text-white')}
          >
            <Icon icon={menu.icon} width={20} className={twMerge('hidden', menu.path === pathname && 'inline-block')} />
            <span>{menu.title}</span>
          </Button>
        ))}
      </div>

      <Button onClick={isShowMobileMenu.onTrue} variant="gost" className="md:hidden">
        <Icon icon="mdi:hamburger-menu" width={30} className="text-white" />
      </Button>

      <AnimatePresence>
        {isShowMobileMenu.value && (
          <motion.div
            initial={{ opacity: 0, x: '-100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '-100%' }}
            transition={{ duration: 0.5 }}
            className="absolute left-0 top-0 z-[1000] md:hidden"
          >
            <MobileMenu pathname={pathname} onClose={isShowMobileMenu.onFalse} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

function MobileMenu({ pathname, onClose }: { pathname: string; onClose: () => void }): JSX.Element {
  const router = useRouter();

  const handleClickMenu = useCallback(
    (path: string) => {
      router.push(path);
      onClose();
    },
    [router, onClose]
  );

  return (
    <div className="absolute left-0 top-0 z-[1000] md:hidden">
      <div className="h-screen w-screen bg-white">
        <div className="via-primary-2 flex flex-row items-center justify-between bg-gradient-to-br from-primary-1 to-primary-1 px-5 py-3">
          <div className="flex flex-row items-center gap-2">
            <img src="/logo/logo_single.png" alt="GIT" className="w-[50px] object-contain" />

            <div>
              <p className="text-lg font-semibold leading-none text-white">Geospatial</p>
              <p className="text-sm font-semibold leading-none text-white">Information Technology</p>
            </div>
          </div>

          <Button onClick={onClose} className="rounded-full bg-white p-1">
            <Icon icon="mdi:close" width={20} className="text-primary-1" />
          </Button>
        </div>

        <div className="flex flex-col gap-2 p-5">
          {configNavigation?.map((menu, i) => (
            <Button
              key={i}
              onClick={() => handleClickMenu(menu.path)}
              variant="gost"
              className={twMerge('border-l-2 border-transparent p-2 text-base opacity-70', menu.path === pathname && 'border-primary-1 opacity-100')}
            >
              {menu.title}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar;

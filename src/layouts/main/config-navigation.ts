// routes
import { paths } from '/src/routes/paths';

// ----------------------------------------------------------------------

export interface ConfigNavigationInterface {
  title: string;
  path: string;
  icon: string;
}

// ----------------------------------------------------------------------

export const configNavigation: ConfigNavigationInterface[] = [
  {
    title: 'Beranda',
    path: paths.main.root,
    icon: 'tabler:home-filled',
  },
  {
    title: 'Peta',
    path: paths.main.map.root,
    icon: 'basil:location-solid',
  },
  {
    title: 'Tentang',
    path: paths.main.about.root,
    icon: 'mdi:about',
  },
];

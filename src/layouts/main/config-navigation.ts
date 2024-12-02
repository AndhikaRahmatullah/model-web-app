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
    title: 'Home',
    path: paths.main.root,
    icon: 'tabler:home-filled',
  },
  {
    title: 'Maps',
    path: paths.main.map.root,
    icon: 'basil:location-solid',
  },
  {
    title: 'About',
    path: paths.main.about.root,
    icon: 'mdi:about',
  },
];

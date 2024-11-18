import React from 'react';
import { Helmet } from 'react-helmet-async';
// sections
import { HomeView } from '/src/sections/home/view';

// ----------------------------------------------------------------------

const HomePage: React.FC = () => {
  const title: string = 'Geospatial Information Technology';

  return (
    <>
      <Helmet>
        <title> {title}</title>
        <meta name="description" content={title} />
        <meta name="keywords" content="web,application,landingpage,arcgis,qgis,gee,ciawi,landslide" />
      </Helmet>

      <HomeView />
    </>
  );
};

export default HomePage;

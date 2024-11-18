import React from 'react';
import { Helmet } from 'react-helmet-async';
// sections
import { MapView } from '/src/sections/map/view';

// ----------------------------------------------------------------------

const MapPage: React.FC = () => {
  const title: string = 'Map - Geospatial Information Technology';

  return (
    <>
      <Helmet>
        <title> {title}</title>
        <meta name="description" content={title} />
        <meta name="keywords" content="web,application,landingpage,arcgis,qgis,gee,ciawi,landslide" />
      </Helmet>

      <MapView />
    </>
  );
};

export default MapPage;

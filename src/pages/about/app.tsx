import React from 'react';
import { Helmet } from 'react-helmet-async';
// sections
import { AboutView } from '/src/sections/about/view';

// ----------------------------------------------------------------------

const AboutPage: React.FC = () => {
  const title: string = 'About - Geospatial Information Technology';

  return (
    <>
      <Helmet>
        <title> {title}</title>
        <meta name="description" content={title} />
        <meta name="keywords" content="web,application,landingpage,arcgis,qgis,gee,ciawi,landslide" />
      </Helmet>

      <AboutView />
    </>
  );
};

export default AboutPage;

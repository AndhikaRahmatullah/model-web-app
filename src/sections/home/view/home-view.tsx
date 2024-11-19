import React from 'react';
// components
import { ScrollAnimation } from '/src/components/scroll-animation';
//
import HomeBanner from '../home-banner';
import HomeFeature from '../home-feature';
import HomeAccuracy from '../home-accuracy';
import HomeCallAction from '../home-call-action';

// ----------------------------------------------------------------------

const HomeView: React.FC = () => {
  return (
    <section>
      <HomeBanner />

      <ScrollAnimation>
        <HomeFeature />
      </ScrollAnimation>

      <ScrollAnimation>
        <HomeCallAction />
      </ScrollAnimation>

      <ScrollAnimation>
        <HomeAccuracy />
      </ScrollAnimation>
    </section>
  );
};

export default HomeView;

import React from 'react';
// components
import { ScrollAnimation } from '/src/components/scroll-animation';
//
import AboutUse from '../about-use';
import AboutGoals from '../about-goals';
import AboutSupport from '../about-support';
import AboutAccuracy from '../about-accuracy';

// ----------------------------------------------------------------------

const AboutView: React.FC = () => {
  return (
    <section>
      <ScrollAnimation>
        <AboutUse />
      </ScrollAnimation>

      <ScrollAnimation>
        <AboutGoals />
      </ScrollAnimation>

      <ScrollAnimation>
        <AboutAccuracy />
      </ScrollAnimation>

      <ScrollAnimation>
        <AboutSupport />
      </ScrollAnimation>
    </section>
  );
};

export default AboutView;

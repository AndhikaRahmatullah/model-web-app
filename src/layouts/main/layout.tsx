import React, { ReactNode } from 'react';
// components
import { ScrollAnimation } from '/src/components/scroll-animation';
//
import Navbar from './navbar';
import Footer from './footer';

// ----------------------------------------------------------------------

interface MainLayoutProps {
  children: ReactNode;
}

// ----------------------------------------------------------------------

const MainLayout: React.FC<MainLayoutProps> = ({ children }: MainLayoutProps) => {
  return (
    <main className="pt-16">
      <Navbar />

      {children}

      <ScrollAnimation>
        <Footer />
      </ScrollAnimation>
    </main>
  );
};

export default MainLayout;

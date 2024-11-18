import React, { ReactNode } from 'react';
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

      <Footer />
    </main>
  );
};

export default MainLayout;

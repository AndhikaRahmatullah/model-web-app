import React from 'react';

// swiper
import 'swiper/swiper-bundle.css';

// hooks
import { useScrollToTop } from '/src/hooks/use-scroll-to-top';

// routes
import Router from '/src/routes/sections';

// components
import { SnackbarProvider } from '/src/components/snackbar';

// ----------------------------------------------------------------------

const App: React.FC = () => {
  useScrollToTop();

  return (
    <SnackbarProvider>
      <Router />
    </SnackbarProvider>
  );
};

export default App;

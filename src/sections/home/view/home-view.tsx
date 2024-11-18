import React from 'react';
import { Button } from '/src/components/button';

// ----------------------------------------------------------------------

const HomeView: React.FC = () => {
  const hhh =
    'w-fit cursor-pointer text-sm font-semibold text-primary-1 transition-all duration-300 hover:opacity-80 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 disabled:grayscale disabled:active:scale-100';

  return (
    <section>
      <div className="m-20 flex flex-col gap-10">
        {JSON.stringify(hhh.split(' '))}

        <button className="w-fit cursor-pointer rounded-md border border-transparent bg-primary-1 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:opacity-80 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 disabled:grayscale disabled:active:scale-100">
          Tes
        </button>

        <button
          disabled
          className="w-fit cursor-pointer rounded-md border border-primary-1 bg-transparent px-6 py-3 text-sm font-semibold text-primary-1 transition-all duration-300 hover:opacity-80 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 disabled:grayscale disabled:active:scale-100"
        >
          Tes
        </button>

        <button className="w-fit cursor-pointer text-sm font-semibold text-primary-1 transition-all duration-300 hover:opacity-80 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 disabled:grayscale disabled:active:scale-100">
          Tes
        </button>
      </div>
    </section>
  );
};

export default HomeView;

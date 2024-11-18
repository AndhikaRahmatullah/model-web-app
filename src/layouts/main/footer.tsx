import React from 'react';

// ----------------------------------------------------------------------

const Footer: React.FC = () => {
  const date = new Date();

  return (
    <div className="flex flex-col items-center justify-between gap-2 border-t-2 border-primary-1 p-5 md:flex-row">
      <p className="text-sm font-semibold italic">Andhika Rahmatullah</p>
      <p className="text-center text-sm font-semibold italic">Copyright © {date.getFullYear()} Geospatial Information Technology UIKA Bogor</p>
    </div>
  );
};

export default Footer;

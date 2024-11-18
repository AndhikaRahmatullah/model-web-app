import React from 'react';

// ----------------------------------------------------------------------

const MapView: React.FC = () => {
  return (
    <section className="h-[90vh] w-full">
      <iframe src="/qgis/index.html" title="WebGIS QGIS Export" width="100%" height="100%" style={{ border: 'none' }} />
    </section>
  );
};

export default MapView;

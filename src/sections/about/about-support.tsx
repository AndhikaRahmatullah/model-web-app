import React from 'react';

// ----------------------------------------------------------------------

const AboutSupport: React.FC = () => {
  return (
    <div className="flex items-center justify-center bg-gradient-to-br from-primary-1 via-primary-2 to-primary-1 px-5 py-5 md:py-10">
      <div className="flex max-w-[800px] flex-1 flex-col items-center justify-center gap-4">
        <p className="text-xl font-bold text-white md:text-2xl">Pengembang dan Dukungan</p>

        <p className="text-justify text-sm text-white md:text-center md:text-base">
          Dikembangkan oleh Andhika Rahmatullah dengan dukungan instansi terkait, menggunakan data kebencanaan 10 tahun terakhir dari BPBD Kabupaten Bogor dan hasil survei lapangan untuk mendukung
          analisis dan perencanaan mitigasi risiko bencana.
        </p>
      </div>
    </div>
  );
};

export default AboutSupport;

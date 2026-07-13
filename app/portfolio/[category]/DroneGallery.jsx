'use client';

import { useState } from 'react';

const videos = [
{
  title: 'Inspección Industrial',
  location: 'Caracas, Venezuela',
  thumbnail: '/drone/thumb-1.jpg',
  vimeoId: '123456789',
},  
    {
  title: 'Cobertura Deportiva',
  location: 'Puerto Cabello, Venezuela',
  thumbnail: '/drone/thumb-2.jpg',
  vimeoId: '1209310271',
},
{
  title: 'Proyecto Inmobiliario',
  location: 'Valencia, Venezuela',
  thumbnail: '/drone/thumb-3.jpg',
  vimeoId: '123456791',
},
{
  title: 'Cobertura Corporativa',
  location: 'Caracas, Venezuela',
  thumbnail: '/drone/thumb-4.jpg',
  vimeoId: '123456792',
},,
  {
  title: 'Proyecto Turistico',
  location: 'Puerto Cabello, Venezuela',
  thumbnail: '/drone/thumb-5.jpg',
  vimeoId: '1209354255',
},
  {
  title: 'Proyecto Comercial',
  location: 'Caracas, Venezuela',
  thumbnail: '/drone/thumb-6.jpg',
  vimeoId: '1209313059',
},
];

export default function DroneGallery() {
  const [videoActivo, setVideoActivo] = useState(null);

  return (
  <>

    {/* VIDEO DESTACADO */}

    <div className="mb-16">

      <div className="overflow-hidden rounded-[32px] border border-white/10 shadow-[0_0_80px_rgba(163,230,53,0.12)]">

        <iframe
  src="https://player.vimeo.com/video/1209371729?autoplay=1&muted=1&loop=1&autopause=0"
  className="w-full aspect-video"
  allow="autoplay; fullscreen; picture-in-picture"
  allowFullScreen
  title="Video Principal"
/>

      </div>

    </div>

    {/* GALERÍA */}

    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

        {videos.map((video) => (
          <button
            key={video.title}
            type="button"
            onClick={() => setVideoActivo(video.vimeoId)}
            className="group text-left overflow-hidden rounded-[32px] border border-white/10 hover:border-lime-400/50 transition-all duration-500"
          >
            <div className="relative overflow-hidden">

              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-[320px] object-cover transition duration-700 group-hover:scale-110 group-hover:brightness-110"
              />

              <div className="absolute inset-0 bg-black/35 flex items-center justify-center">

                <div className="w-20 h-20 rounded-full bg-lime-400 text-black flex items-center justify-center text-3xl font-bold shadow-[0_0_40px_rgba(163,230,53,0.5)]">
                  ▶
                </div>

              </div>

            </div>

            <div className="p-6">

  <h3 className="text-2xl font-black mb-2">
    {video.title}
  </h3>

  <p className="text-white/50 text-sm">
    {video.location}
  </p>

</div>

          </button>
        ))}

      </div>

      {videoActivo && (
        <div
          className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
          onClick={() => setVideoActivo(null)}
        >
          <div
            className="relative w-full max-w-7xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setVideoActivo(null)}
              className="absolute -top-14 right-0 text-white text-5xl hover:text-lime-400 transition"
            >
              ×
            </button>

            <div className="overflow-hidden rounded-[24px] border border-white/10 shadow-[0_0_80px_rgba(163,230,53,0.15)]">

              <iframe
                src={`https://player.vimeo.com/video/${videoActivo}?autoplay=1`}
                className="w-full aspect-video"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="Video Vimeo"
              />

            </div>

          </div>
        </div>
      )}
    </>
  );
}
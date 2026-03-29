import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const LogoAnimation = () => {
  const [activeMedia, setActiveMedia] = useState(null);

  const media = [
    {
      thumbnail: "/assets/Alliance logo_CP-01.jpg",
      video: "/assets/Alliance_Logo animation.mp4",
    },
    {
      thumbnail: "/assets/Black myth wukong logo_CP-02.jpg",
      video: "/assets/Black_myth_wukong_Logo_animation.mp4",
    },
    {
      thumbnail: "/assets/Bronco media logo_CP-04.jpg",
      video: "/assets/Bronco media_Logo.mp4",
    },
    {
      thumbnail: "/assets/Corbirr logo_CP_04-01.jpg",
      video: "/assets/Corbirr_logo_2.mp4",
    },
    {
      thumbnail: "/assets/Fedex express logo_CP-07.jpg",
      video: "/assets/FedEx_Logo.mp4",
    },
     {
      thumbnail: "/assets/Google play logo_CP_06.jpg",
      video: "/assets/Google play_Logo.mp4",
    },
     {
      thumbnail: "/assets/Dr. pepper logo_CP-03.jpg",
      video: "/assets/Dr.Pepper_Logo_Intro .mp4",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-white dark:bg-black text-black dark:text-white pt-28">

      {/* 🔥 TITLE */}
      <h1 className="text-4xl px-6 md:px-12 mb-10">
        Logo Animation
      </h1>

      {/* 🔥 SLIDER */}
      <div className="relative w-full">

        {/* ⬅️ PREV */}
        <button className="custom-prev absolute left-4 top-1/2 -translate-y-1/2 z-20 text-3xl px-4 py-2 rounded-full bg-black text-white dark:bg-white dark:text-black">
          ←
        </button>

        {/* ➡️ NEXT */}
        <button className="custom-next absolute right-4 top-1/2 -translate-y-1/2 z-20 text-3xl px-4 py-2 rounded-full bg-black text-white dark:bg-white dark:text-black">
          →
        </button>

        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
          spaceBetween={40}
          slidesPerView={2}
          loop={true}
          className="w-[90%] mx-auto"
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
          }}
        >
          {media.map((item, i) => {
            const videoRef = useRef(null);

            return (
              <SwiperSlide key={i}>
                <div className="px-2">
                  <div
                    className="relative aspect-video bg-black rounded-2xl overflow-hidden shadow-xl cursor-pointer group"
                    onClick={() => setActiveMedia(item)} // 👁 OPEN VIEWER
                    onMouseEnter={() => videoRef.current?.play()}
                    onMouseLeave={() => {
                      videoRef.current?.pause();
                      videoRef.current.currentTime = 0;
                    }}
                  >
                    {/* Thumbnail */}
                    <img
                      src={item.thumbnail}
                      className="absolute inset-0 w-full h-full object-contain group-hover:opacity-0 transition"
                    />

                    {/* Video */}
                    <video
                      ref={videoRef}
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-contain"
                    >
                      <source src={item.video} type="video/mp4" />
                    </video>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      {/* 🔥 MODAL VIEWER */}
      {activeMedia && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">

          {/* CLOSE BUTTON */}
          <button
            onClick={() => setActiveMedia(null)}
            className="absolute top-6 right-6 text-white text-3xl"
          >
            ✕
          </button>

          {/* VIDEO */}
          <div className="max-w-5xl w-full px-4">
            <video
              src={activeMedia.video}
              controls
              autoPlay
              className="w-full max-h-[80vh] object-contain rounded-lg"
            />
          </div>

          {/* DOWNLOAD BUTTON */}
          <a
            href={activeMedia.video}
            download
            className="absolute bottom-10 bg-white text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
          >
            ⬇ Download
          </a>
        </div>
      )}
    </div>
  );
};

export default LogoAnimation;
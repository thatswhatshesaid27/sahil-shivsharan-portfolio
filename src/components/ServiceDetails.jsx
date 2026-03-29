import { useParams, useNavigate } from "react-router-dom";
import { useRef } from "react";

/* 🔥 SERVICE DATA */
const serviceData = {
  "logo-animation": {
    title: "Logo Animation",
    media: [
      {
        thumbnail: "/assets/Alliance logo_CP-01.jpg",
        video: "/assets/Alliance_Logo animation.mp4",
      },
      {
        thumbnail: "/assets/Black myth wukong logo_CP-02.jpg",
        video: "/assets/Black_myth_wukong_Logo_animation.mp4",
      },
    ],
  },
};

const ServiceDetails = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  const service = serviceData[name];

  if (!service) {
    return <h2 className="p-10 text-xl">Service not found</h2>;
  }

  return (
    <div className="p-10 py-10  min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors duration-500">
      
      {/* 🔙 BACK BUTTON (FIXED) */}
      <button
        onClick={() => {
          if (window.history.length > 1) {
            navigate(-1);
          } else {
            navigate("/");
          }
        }}
        className="mb-6 px-4 py-2 rounded bg-black text-white dark:bg-white dark:text-black transition"
      >
        ← Back
      </button>

      {/* 🔥 TITLE */}
      <h1 className="text-3xl font-bold mb-8">{service.title}</h1>

      {/* 🔥 GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {service.media.map((item, i) => {
          const videoRef = useRef(null);

          return (
            <div
              key={i}
              className="relative group rounded-lg overflow-hidden cursor-pointer shadow-lg"
              onMouseEnter={() => videoRef.current?.play()}
              onMouseLeave={() => {
                videoRef.current?.pause();
                videoRef.current.currentTime = 0;
              }}
            >
              {/* ✅ THUMBNAIL */}
              <img
                src={item.thumbnail}
                alt="thumbnail"
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
              />

              {/* ✅ VIDEO */}
              <video
                ref={videoRef}
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source src={item.video} type="video/mp4" />
              </video>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceDetails;
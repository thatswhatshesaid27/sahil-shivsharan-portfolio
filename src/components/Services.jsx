import { motion } from "framer-motion";

const services = [
  {
    title: "Motion Graphics",
    image: "/assets/motion-graphics.jpg",
  },
  {
    title: "Video Editing",
    image: "/assets/video-editing.jpg",
  },
  {
    title: "Logo Animation",
    image: "/assets/brand-animation.png",
  },
  {
    title: "Logo Animation",
    image: "/assets/logo-animation.png",
  },
];

const Services = () => {
  return (
    <section className="py-32 px-10">
      <h2 className="text-4xl mb-10 text-center font-bold">
        Services
      </h2>

      <div className="grid md:grid-cols-4 gap-6">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="relative h-64 rounded-xl overflow-hidden cursor-pointer"
          >
            {/* IMAGE */}
            <img
              src={service.image}
              alt={service.title}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <h3 className="text-xl font-semibold text-white">
                {service.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;

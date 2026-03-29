import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const services = [
  {
    title: "Brand Designing",
    image: "/assets/brand-designing.jpg",
    slug: "brand-designing",
  },
  {
    title: "Logo Animation",
    image: "/assets/logo-animation.jpg",
    slug: "logo-animation",
  },
  {
    title: "Motion Graphics",
    image: "/assets/motion_graphics.jpg",
    slug: "motion-graphics",
  },
];

const Services = () => {
  const navigate = useNavigate();

  return (
    <section className="py-32 px-10">
      <h2 className="text-4xl mb-16 text-center font-bold">
        Services
      </h2>

      <div className="flex flex-wrap justify-center gap-12">
        {services.map((service, i) => (
          <motion.div
            key={i}
            onClick={() => navigate(`/service/${service.slug}`)}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once: true }}
            className="h-100 w-100 rounded-xl overflow-hidden cursor-pointer shadow-lg"
          >
            <img
              src={service.image}
              alt={service.title}
              loading="lazy"
              className=" w-full h-full"
            />

            <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <h3 className="text-xl font-semibold text-white text-center px-4">
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
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="py-32 px-10 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
      >
        <h2 className="text-4xl mb-6">About Me</h2>
        <p className="text-lg text-gray-400">
          I design motion visuals that blend storytelling,
          rhythm, and emotion into engaging digital experiences.
        </p>
      </motion.div>
    </section>
  );
};

export default About;

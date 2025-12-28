import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section className="py-32 px-10">
      <h2 className="text-4xl mb-10">Projects</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {[1, 2, 3].map(i => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="h-64 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600"
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;

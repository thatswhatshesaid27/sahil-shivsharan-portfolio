import { useState } from "react";
import { motion } from "framer-motion";

const data = [
  {
    service: "Motion Graphics",
    tools: [
      {
        name: "After Effects",
        img: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adobe_After_Effects_CC_icon.svg",
      },
      {
        name: "Illustrator",
        img: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg",
      },
      {
        name: "Photoshop",
        img: "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg",
      },
    ],
  },
  {
    service: "Video Editing",
    tools: [
      {
        name: "Premiere Pro",
        img: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Adobe_Premiere_Pro_CC_icon.svg",
      },
      {
        name: "DaVinci Resolve",
        img: "https://upload.wikimedia.org/wikipedia/commons/8/8e/DaVinci_Resolve_Logo.svg",
      },
    ],
  },
  {
    service: "Brand Animation",
    tools: [
      {
        name: "After Effects",
        img: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adobe_After_Effects_CC_icon.svg",
      },
      {
        name: "Figma",
        img: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
      },
    ],
  },
];

const ToolsUsed = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="py-32 px-10 max-w-6xl mx-auto">
      {/* Heading */}
      <div className="mb-20 text-center">
        <h2 className="text-5xl font-semibold tracking-tight">
          Tools & Workflow
        </h2>
        <p className="mt-4 text-gray-500">
          Software I use to bring visuals to life
        </p>
      </div>

      <div className="grid md:grid-cols-[280px_1fr] gap-16">
        {/* LEFT – VERTICAL TABS */}
        <div className="flex flex-col gap-3">
          {data.map((item, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              className={`relative px-6 py-4 rounded-xl text-left transition-all
                ${
                  active === index
                    ? "bg-black text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
            >
              <span className="text-lg font-medium">
                {item.service}
              </span>

              {/* Active Indicator */}
              {active === index && (
                <span className="absolute right-4 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full" />
              )}
            </button>
          ))}
        </div>

        {/* RIGHT – TOOLS */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 sm:grid-cols-3 gap-10"
        >
          {data[active].tools.map((tool, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8, scale: 1.05 }}
              className="flex flex-col items-center gap-4"
            >
              <div className="w-24 h-24 rounded-2xl bg-white shadow-lg flex items-center justify-center">
                <img
                  src={tool.img}
                  alt={tool.name}
                  className="w-12 h-12 object-contain"
                />
              </div>

              <span className="text-sm font-medium text-gray-700">
                {tool.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ToolsUsed;

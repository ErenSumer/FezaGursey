import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      delayChildren: 0.3,
    },
  },
  exit: { opacity: 0, transition: { duration: 0.5 } },
};

const lineVariants = {
  hidden: { height: 0 },
  visible: { height: "100%", transition: { duration: 1.5, ease: "easeInOut" } },
};

const branchVariants = {
  hidden: { width: 0, opacity: 0 },
  visible: {
    width: "100%",
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const contentVariants = {
  hidden: { x: -50, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const circleVariants = {
  hidden: { scale: 0 },
  visible: { scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const Slide3 = () => {
  const [mousePosition, setMousePosition] = useState({ y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const educationTimeline = [
    {
      year: "1940",
      event:
        "Galatasaray Lisesi'nden mezun oldu, ardından İstanbul Üniversitesi’nde fizik eğitimi aldı.",
      align: "right",
    },
    {
      year: "1944",
      event: "İÜ Fen Fakültesi Fizik-Matematik Bölümünden Lisansını aldı.",
      align: "left",
    },
    {
      year: "1950",
      event:
        "Kuaterniyonların Alan Denklemlerine Uygulanması adlı tezi ile Imperial College Matematik Bölümü’nden doktorasını aldı.",
      align: "right",
    },
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="h-screen w-screen flex items-center justify-center bg-dark text-gray-100 overflow-hidden"
    >
      <div className="max-w-4xl w-full px-8 relative">
        <motion.h1
          variants={contentVariants}
          className="text-4xl font-light mb-12 text-center"
        >
          Feza Gürsey&apos;in Eğitimi
        </motion.h1>

        <div className="relative">
          <motion.div
            className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-purple-500 to-pink-500"
            variants={lineVariants}
            style={{
              background: `linear-gradient(to bottom, #60A5FA, #8B5CF6 ${
                (mousePosition.y / window.innerHeight) * 100
              }%, #EC4899)`,
            }}
          />
          {educationTimeline.map((item, index) => (
            <motion.div
              key={index}
              className={`flex items-center mb-24 ${
                item.align === "left" ? "flex-row-reverse" : "flex-row"
              }`}
              variants={containerVariants}
            >
              <motion.div
                className={`w-1/2 flex items-center ${
                  item.align === "left" ? "justify-start" : "justify-end"
                }`}
              >
                {item.align === "left" ? (
                  <>
                    <motion.div
                      className="h-0.5 bg-gradient-to-l from-purple-500 to-blue-400"
                      variants={branchVariants}
                    />
                    <motion.div
                      className="w-3 h-3 rounded-full bg-purple-500 ml-[-7px] z-10"
                      variants={circleVariants}
                    />
                    <motion.span className="ml-2 text-lg font-light text-purple-300">
                      {item.year}
                    </motion.span>
                  </>
                ) : (
                  <>
                    <motion.span className="mr-2 text-lg font-light text-purple-300">
                      {item.year}
                    </motion.span>
                    <motion.div
                      className="w-3 h-3 rounded-full bg-purple-500 mr-[-7px] z-10"
                      variants={circleVariants}
                    />
                    <motion.div
                      className="h-0.5 bg-gradient-to-r from-purple-500 to-blue-400"
                      variants={branchVariants}
                    />
                  </>
                )}
              </motion.div>
              <motion.div
                className={`w-1/2 ${
                  item.align === "left" ? "pr-8 text-right" : "pl-8"
                }`}
                variants={contentVariants}
              >
                <p className="text-gray-300 text-lg">{item.event}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Slide3;

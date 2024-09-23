import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
  exit: { opacity: 0, transition: { duration: 0.5 } },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

const Slide5 = () => {
  const sources = [
    {
      name: "Wikipedia",
      url: "https://en.wikipedia.org/wiki/",
    },
    {
      name: "Boğaziçi Üniversitesi",
      url: "https://fezagursey.bogazici.edu.tr/tr/feza-gurseyin-biyografisi",
    },
    {
      name: "Cambridge Üniversitesi Gauge Teorisi",
      url: "https://www.damtp.cam.ac.uk/user/tong/gaugetheory/gt.pdf",
    },
    {
      name: "Youtube, Bu ne Bilimsizliktir | Feza Gürsey",
      url: "https://www.youtube.com/watch?v=c18KlQLb1Eo",
    },
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const sourcesPerPage = 3;
  const pageCount = Math.ceil(sources.length / sourcesPerPage);

  const currentSources = sources.slice(
    currentPage * sourcesPerPage,
    (currentPage + 1) * sourcesPerPage
  );

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="h-screen w-screen flex items-center justify-center bg-dark text-gray-100"
    >
      <div className="max-w-2xl w-full px-8">
        <motion.h1
          variants={itemVariants}
          className="text-4xl font-light mb-12 text-center"
        >
          Kaynakça
        </motion.h1>

        <AnimatePresence mode="wait">
          <motion.ul
            key={currentPage}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="space-y-6"
          >
            {currentSources.map((source, index) => (
              <motion.li
                key={index}
                variants={itemVariants}
                className="border-b border-gray-700 pb-4"
              >
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl text-blue-400 hover:text-blue-300 transition-colors flex items-center"
                >
                  <span className="mr-2">{source.name}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </AnimatePresence>

        <motion.div
          variants={itemVariants}
          className="mt-8 flex justify-center space-x-4"
        >
          {[...Array(pageCount)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`w-3 h-3 rounded-full ${
                currentPage === index ? "bg-blue-400" : "bg-gray-600"
              } transition-colors`}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Slide5;

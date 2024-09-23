import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.5 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
};

const imageVariants = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      duration: 1,
    },
  },
};

const Slide1 = () => {
  return (
    <motion.div
      className="absolute inset-0 flex flex-col justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-12 overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="max-w-5xl mx-auto w-full flex flex-col items-center text-center">
        <motion.h1
          className="text-5xl font-light mb-6 text-gray-800"
          variants={itemVariants}
        >
          Feza Gürsey
        </motion.h1>
        <motion.p
          className="text-xl text-gray-600 mb-12 max-w-2xl"
          variants={itemVariants}
        >
          &quot;Fizikçi, mantığını tabiata zorlamaya çalışmaz. Düşünce tarzını,
          tabiattan öğrendiği hakikatlere göre ayarlar.&quot;
        </motion.p>
        <motion.div
          className="w-64 h-64 mb-12 rounded-full overflow-hidden shadow-lg"
          variants={imageVariants}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        >
          <img
            src="/feza.png"
            alt="Feza Gürsey"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <motion.div className="flex space-x-4" variants={itemVariants}>
          {['Fizikçi', "Profesör", "Matematikçi"].map((title, index) => (
            <motion.span
              key={index}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full text-sm"
              whileHover={{ scale: 1.1, backgroundColor: "#e2e8f0" }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              {title}
            </motion.span>
          ))}
        </motion.div>
      </div>
      <motion.p
        className="absolute bottom-4 right-4 text-sm text-gray-400"
        variants={itemVariants}
      >
        Eren Sümer & Kerem Sever
      </motion.p>
    </motion.div>
  );
};

export default Slide1;

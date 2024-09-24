import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
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

const Slide6 = () => {
  const [showCredits, setShowCredits] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCredits(true);
    }, 2000); // Show credits after 5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="h-screen w-screen flex items-center justify-center bg-dark text-gray-100 relative overflow-hidden"
    >
      <div className="max-w-4xl w-full px-8 text-center">
        <motion.h1 variants={itemVariants} className="text-6xl font-light mb-8">
          Dinlediğiniz için Teşekkürler!
        </motion.h1>
      </div>

      <AnimatePresence>
        {showCredits && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-black bg-opacity-100 flex items-center justify-center"
          >
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-3xl font-light text-white"
            >
              Eren Sümer & Kerem Sever.
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Slide6;

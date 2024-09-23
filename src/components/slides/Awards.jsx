import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AcademicCapIcon, XIcon } from "@heroicons/react/outline";
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
const awards = [
  {
    id: 1,
    name: "Tübitak Bilim Ödülü",
    year: 1969,
    description:
      "TÜBİTAK Bilim Ödülü, 1966'dan beri her yıl, Türkiye Bilimsel ve Teknolojik Araştırma Kurumu (TÜBİTAK) tarafından temel bilimler, mühendislik bilimleri, sağlık bilimleri ve sosyal bilimler dallarında uluslararası düzeyde üstün nitelikli çalışmalar gösteren Türk ya da çalışmalarını Türkiye'de yapan yabancı bilim insanlarına verilen ödüldür.",
  },
  {
    id: 2,
    name: "Oppenheimer Ödülü",
    year: 1977,
    description: "i J. Robert Oppenheimer'ın anısına verilen bir ödüldür. ",
  },
  {
    id: 3,
    name: "Einstein Madalyası",
    year: 1979,
    description:
      "Einstein Ödülü, genellikle teorik fizik ve matematik alanlarındaki olağanüstü başarıları takdir etmek için verilen bir ödüldür.",
  },
  {
    id: 4,
    name: "College de France Madalyası",
    year: 1981,
    description:
      "Collège de France tarafından bilim, araştırma ve akademi dünyasına olağanüstü katkılarda bulunan bilim insanlarına verilen prestijli bir ödüldür.",
  },
  {
    id: 5,
    name: "Commendatore Nişanı",
    year: 1984,
    description: "İtalya'nın nişan ödülü.",
  },
  {
    id: 6,
    name: "Wigner Madalyası",
    year: 1986,
    description:
      "Wigner Madalyası, teorik fizik alanında önemli katkılarda bulunan bilim insanlarına verilen prestijli bir ödüldür.",
  },
  {
    id: 7,
    name: "Galatasaray Vakfı Madalyası",
    year: 1990,
    description:
      "Galatasaray camiasına önemli hizmetlerde bulunmuş veya Galatasaray’a bağlılık ve katkı göstermiş kişilere verilen bir onur ödülüdür. ",
  },
];

const Awards = () => {
  const [selectedAward, setSelectedAward] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative w-full h-screen bg-dark overflow-hidden font-sans">
      <motion.div
      variants={containerVariants}
        className="absolute inset-0 flex items-center justify-center"
        initial="hidden"
        animate="visible"
        exit="exit"
        
        transition={{ duration: 1 }}
      >
        <div className="w-full max-w-2xl h-3/4 overflow-y-auto px-4">
          {awards.map((award, index) => (
            <AwardCard
              key={award.id}
              award={award}
              index={index}
              isLoaded={isLoaded}
              setSelectedAward={setSelectedAward}
            />
          ))}
        </div>
      </motion.div>

      <AnimatePresence>
        {selectedAward && (
          <ExpandedView
            selectedAward={selectedAward}
            setSelectedAward={setSelectedAward}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

const AwardCard = ({ award, index, isLoaded, setSelectedAward }) => {
  return (
    <motion.div
      className="mb-6 glass-effect rounded-xl shadow-lg cursor-pointer overflow-hidden"
      initial={{ x: -100, opacity: 0 }}
      animate={isLoaded ? { x: 0, opacity: 1 } : {}}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: index * 0.1,
      }}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.98 }}
      onClick={() => setSelectedAward(award)}
    >
      <div className="p-6 flex items-center">
        <AcademicCapIcon className="w-12 h-12 text-purple-400 mr-4 flex-shrink-0" />
        <div>
          <h3 className="text-white text-xl font-light">{award.name}</h3>
          <p className="text-purple-300 text-lg mt-1">{award.year}</p>
        </div>
      </div>
    </motion.div>
  );
};

const ExpandedView = ({ selectedAward, setSelectedAward }) => {
  return (
    <motion.div
      className="absolute inset-0 bg-dark bg-opacity-90"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <div className="bg-dark rounded-2xl p-8 max-w-2xl w-full">
          <h2 className="text-white text-4xl font-light mb-4">
            {selectedAward.name}
          </h2>
          <p className="text-purple-300 text-2xl mb-6">{selectedAward.year}</p>
          <p className="text-gray-300 text-xl">{selectedAward.description}</p>
        </div>
      </motion.div>
      <motion.button
        className="absolute top-8 right-8 text-white bg-dark rounded-full p-2"
        onClick={() => setSelectedAward(null)}
        whileHover={{ scale: 1.1, rotate: 90 }}
        whileTap={{ scale: 0.9 }}
      >
        <XIcon className="w-6 h-6" />
      </motion.button>
    </motion.div>
  );
};

export default Awards;

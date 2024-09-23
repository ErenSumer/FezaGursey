import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { XIcon } from "@heroicons/react/outline";
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
const images = [
  {
    id: 1,
    src: "/fizik.png",
    title: "Grup Teorisi Ve Kuantum Fiziği",
    description:
      "Grup Teorisi ve Kuantum Fiziği:Grup teorisi, matematikte simetriyi ve yapıların dönüşümlerini inceleyen bir alandır ancak fizikte ise parçacıkların simetrilerini anlamada önemli rol görür. Feza Gürsey, grup teorisini kuantum fiziğine uygulayarak, SU(2) ve SU(3) gibi simetri gruplarının parçacık fiziğinde nasıl kullanıldığını göstermiştir. Bu gruplar, temel kuvvetlerin ve parçacıkların etkileşimlerinin daha iyi anlaşılmasını sağlar.",
  },
  {
    id: 2,
    src: "/spirals.jpg",
    title: "Gauge Teorisi",
    description:
      "Gauge teorisi, fiziksel etkileşimleri açıklamak için kullanılan bir matematiksel çerçevedir. Bu teori, temel kuvvetlerin (elektromanyetik, zayıf ve güçlü kuvvetler) nasıl işlediğini anlamamıza yardımcı olur. Gauge teorisi, belirli simetrilere dayanarak, parçacıkların nasıl etkileştiğini ve bu etkileşimlerin altında yatan yasaları ortaya koyar.",
  },
  {
    id: 3,
    src: "/simetri.jpg",
    title: "SU(3)",
    description:
      "SU(3) simetrisi, parçacık fiziğinde kullanılan bir matematiksel grup teorisidir.Özellikle kuarkların etkileşimlerini açıklamak için kullanılır.Bu simetri, kuantum renk dinamiği (QCD) adı verilen teorinin temelidir ve güçlü nükleer kuvveti açıklayan temellerden biridir.",
  },
];

const Slide4 = () => {
  const [selectedImage, setSelectedImage] = useState(null);
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
        <div className="grid grid-cols-3 gap-8">
          {images.map((image, index) => (
            <ImageCard
              key={image.id}
              image={image}
              index={index}
              isLoaded={isLoaded}
              setSelectedImage={setSelectedImage}
            />
          ))}
        </div>
      </motion.div>

      <AnimatePresence>
        {selectedImage && (
          <ExpandedView
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

const ImageCard = ({ image, index, isLoaded, setSelectedImage }) => {
  const yOffset = index % 2 === 0 ? -1000 : 1000;

  return (
    <motion.div
      className="relative overflow-hidden rounded-2xl shadow-lg cursor-pointer w-64 h-64"
      initial={{ y: yOffset, opacity: 0, scale: 0.5 }}
      animate={isLoaded ? { y: 0, opacity: 1, scale: 1 } : {}}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: index * 0.2,
      }}
      whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setSelectedImage(image)}
    >
      <motion.img
        src={image.src}
        alt={image.title}
        className="w-full h-full object-cover"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      />
      <motion.div
        className="absolute inset-0 bg-black bg-opacity-30 flex items-end p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: index * 0.2 + 0.5, duration: 0.3 }}
      >
        <h3 className="text-white text-xl font-light">{image.title}</h3>
      </motion.div>
    </motion.div>
  );
};

const ExpandedView = ({ selectedImage, setSelectedImage }) => {
  return (
    <motion.div
      className="absolute inset-0 bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.img
        src={selectedImage.src}
        alt={selectedImage.title}
        className="w-full h-full object-cover"
        initial={{ scale: 1.1, filter: "blur(10px)" }}
        animate={{ scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.5 }}
      />
      <motion.div
        className="absolute bottom-1 right-5 glass-effect p-10 rounded-lg max-w-md text-right"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
      >
        <h2 className="text-white text-4xl font-light mb-4">
          {selectedImage.title}
        </h2>
        <p className="text-white text-xl font-light">
          {selectedImage.description}
        </p>
      </motion.div>
      <motion.button
        className="absolute top-8 right-8 text-white bg-black bg-opacity-50 rounded-full p-2"
        onClick={() => setSelectedImage(null)}
        whileHover={{ scale: 1.1, rotate: 90 }}
        whileTap={{ scale: 0.9 }}
      >
        <XIcon className="w-6 h-6" />
      </motion.button>
    </motion.div>
  );
};

export default Slide4;

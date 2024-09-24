import { motion } from "framer-motion";

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

const Slide2 = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="h-screen w-screen flex items-center justify-center bg-gradient-to-br from-slate-950 to-black text-gray-100"
    >
      <div className="max-w-4xl w-full px-8">
        <motion.h1
          variants={itemVariants}
          className="text-4xl font-light mb-8 text-center"
        >
          Feza Gürsey Hakkında
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div variants={itemVariants} className="space-y-6">
            <h2 className="text-2xl font-medium mb-4">Hakkında</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                Türkiye&apos;nin fizik ve matematik alanında uzmanlaşmış en
                önemli bilim insanlarından biridir.
              </li>
              <li>7 Nisan 1921&apos;de İstanbul&apos;da doğmuştur.</li>
              <li>
                Babası Reşit Süreyya Gürsey, tıp doktoru, fizikçi ve öğretmen
                olmasının yanı sıra bilime ve sanata büyük ilgisi olan bir
                aydındır.
              </li>
              <li>
                Annesi Remziye Hisar, Darülfünun&apos;da fen okuyan ilk kız
                öğrencilerinden olup Avrupa&apos;da kadınların pek azının
                kariyer yapabildiği bir dönemde Sorbonne&apos;da kimya doktorası
                yapmayı başarmış bir bilim insanıdır.
              </li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <h2 className="text-2xl font-light mb-2">Çalışmaları</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Grup Teorisi ve Kuantum Mekaniği</li>
              <li>Gauge Teorileri</li>
              <li>SU(3) Simetrisi</li>
              <li>Ve Çok daha fazlası...</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Slide2;

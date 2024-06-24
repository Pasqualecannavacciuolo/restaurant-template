import { motion } from "framer-motion";

function Prenota() {
  return (
    <div className="px-4 mt-20 xl:flex xl:flex-col xl:justify-center xl:items-center">
      <div className="flex flex-col gap-5 xl:gap-48 xl:flex-row items-center w-full max-w-screen-xl">
        <div className="flex justify-start xl:w-[700px]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="flex flex-col gap-3 mb-3">
              <h1 className="text-2xl xl:text-5xl general-sans-bold">
                Prenota
              </h1>
              <button className="btn btn-padding text-xs xl:text-lg general-sans-bold">
                Esplora il menu
              </button>
            </div>
          </motion.div>
        </div>
        <div className="flex flex-col justify-start">
          <motion.div
            initial={{ opacity: 0, x: 0, y: 500 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <p className="xl:text-lg text-justify xl:w-[500px] general-sans-light mb-3">
              Offriamo un menu che celebra i sapori del mondo usando i migliori
              prodotti e realizzando dei capolavori culinari. Dagli antipasti ai
              desserts, ogni piatto e' una squisita esperienza che ti invita a
              percorrere un viaggio gastronomico.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Prenota;

import hero_img from "../assets/img/home/hero-img.webp";
import { motion } from "framer-motion";

function Home() {
  return (
    <div className="h-screen xl:mt-48 px-4 flex flex-col justify-center items-center">
      <div className="flex flex-col gap-5 xl:gap-48 xl:flex-row items-center w-full max-w-screen-xl">
        <div className="flex justify-start xl:w-[700px]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h1 className="text-2xl xl:text-5xl general-sans-bold">
              Benvenuti al nostro ristorante, dove il vostro desiderio di
              eccellenza trova la sua dimora.
            </h1>
          </motion.div>
        </div>
        <div className="flex flex-col justify-start">
          <motion.div
            initial={{ opacity: 0, x: 0, y: 500 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <p className="xl:text-lg text-justify xl:w-[500px] general-sans-light">
              Deliziate il vostro palato con le prelibatezze preparate dai
              nostri chef stellati e lasciatevi trasportare in un viaggio
              gastronomico indimenticabile.
            </p>
            <div className="flex flex-row gap-5 mt-5">
              <button className="btn btn-padding text-xs xl:text-lg general-sans-bold">
                Prenota un tavolo
              </button>
              <button className="btn-ghost btn-padding text-xs xl:text-lg general-sans-light">
                Esplora il nostro menu
              </button>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="mt-10 max-w-screen-xl">
        <motion.div
          initial={{ opacity: 0, x: 500, y: 0 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <img
            src={hero_img}
            width={1350}
            alt="Immagine decorativa"
            className="mx-auto"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Home;

import { motion } from "framer-motion";
import piatto_1 from "../assets/img/menu/piatto-1.webp";
import piatto_2 from "../assets/img/menu/piatto-2.webp";
import piatto_3 from "../assets/img/menu/piatto-3.webp";
import piatto_4 from "../assets/img/menu/piatto-4.webp";
import { Link } from "react-router-dom";

function Menu() {
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
                Il nostro menu
              </h1>
              <button className="btn btn-padding text-xs xl:text-lg general-sans-bold">
                <Link to={"/menu-page"}>Esplora il menu</Link>
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

      <div className="mt-11 w-full max-w-screen-xl grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
        <a
          href="#"
          className="group relative flex h-48 items-end overflow-hidden bg-gray-100 shadow-lg md:h-80"
        >
          <img
            src={piatto_1}
            loading="lazy"
            alt="Photo by Minh Pham"
            className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
          />

          <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
            Vitello con crostoni e insalata
          </span>
        </a>

        <a
          href="#"
          className="group relative flex h-48 items-end overflow-hidden bg-gray-100 shadow-lg md:col-span-2 md:h-80"
        >
          <img
            src={piatto_2}
            loading="lazy"
            alt="Photo by Magicle"
            className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
          />

          <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
            Insalata di pollo e verdurine di stagione
          </span>
        </a>

        <a
          href="#"
          className="group relative flex h-48 items-end overflow-hidden bg-gray-100 shadow-lg md:col-span-2 md:h-80"
        >
          <img
            src={piatto_3}
            loading="lazy"
            alt="Photo by Martin Sanchez"
            className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
          />

          <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
            Carpa con barbabietola e salsa al mango
          </span>
        </a>

        <a
          href="#"
          className="group relative flex h-48 items-end overflow-hidden bg-gray-100 shadow-lg md:h-80"
        >
          <img
            src={piatto_4}
            loading="lazy"
            alt="Photo by Lorenzo Herrera"
            className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
          />

          <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
            Verdurine di stagione
          </span>
        </a>
      </div>
    </div>
  );
}

export default Menu;

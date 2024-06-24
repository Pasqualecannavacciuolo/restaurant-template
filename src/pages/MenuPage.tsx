import { motion } from "framer-motion";
import img_salmone_scottato from "../assets/img/menu/jTFFv8eh5o7USTx7BoxBaxWk.avif";
import classica_tartare from "../assets/img/menu/tartare.avif";
import foie_gras_terrine from "../assets/img/menu/Foie Gras.jpg";
import nicoise_salad from "../assets/img/menu/nicoise_salad.jpg";

function MenuPage() {
  return (
    <>
      <div className="px-4 mt-20 xl:flex xl:flex-col xl:justify-center xl:items-center">
        <div className="flex flex-col items-center">
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="flex flex-col items-center justify-center gap-3 mb-3">
                <h1 className="text-2xl xl:text-5xl general-sans-bold">
                  Il nostro menu
                </h1>
                <p className="xl:text-lg xl:w-[500px] general-sans-light text-center">
                  Deliziate il vostro palato con le prelibatezze preparate dai
                  nostri chef stellati e lasciatevi trasportare in un viaggio
                  gastronomico indimenticabile.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      {/* GRIGLIA PIATTI */}
      <div className="flex flex-col px-4 items-start xl:px-28 xl:items-start mt-11">
        {/* ANTIPASTI */}
        <h2 className="text-2xl xl:text-4xl general-sans-bold mb-7">
          Antipasti
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {/* CODICE PER UN ANTIPASTO */}
          <div className="flex flex-col xl:flex-row gap-5">
            <img
              src={img_salmone_scottato}
              className="w-full h-auto xl:w-56 xl:h-48 object-cover"
              alt="Salmone scottato alla griglia su crostini e verdurine"
            />
            <div className="flex flex-col items-start justify-center xl:justify-between py-5">
              <h3 className="text-md xl:text-xl general-sans-semi-bold">
                Salmone scottato su crostini
              </h3>
              <p className="text-justify general-sans-light">
                Salmone alla griglia servito su crostini di grano saraceno e
                verdure di stagione biologiche.
              </p>
              <p className="general-sans-regular">7,99€</p>
            </div>
          </div>
          {/* CODICE SECONDO ANTIPASTO */}
          <div className="flex flex-col xl:flex-row gap-5">
            <img
              src={classica_tartare}
              className="w-full h-auto xl:w-56 xl:h-48 object-cover"
              alt="Salmone scottato alla griglia su crostini e verdurine"
            />
            <div className="flex flex-col items-start justify-center xl:justify-between py-5">
              <h3 className="text-md xl:text-xl general-sans-semi-bold">
                Foie Gras Terrine
              </h3>
              <p className="text-justify general-sans-light">
                Finely chopped and kissed with citrus and herbs/Dijon mustard
                and capers/soy sauce and ginger.
              </p>
              <p className="general-sans-regular">13€</p>
            </div>
          </div>
          {/* CODICE TERZO ANTIPASTO */}
          <div className="flex flex-col xl:flex-row gap-5">
            <img
              src={foie_gras_terrine}
              className="w-full h-auto xl:w-56 xl:h-48 object-cover"
              alt="Salmone scottato alla griglia su crostini e verdurine"
            />
            <div className="flex flex-col items-start justify-center xl:justify-between py-5">
              <h3 className="text-md xl:text-xl general-sans-semi-bold">
                Foie Gras Terrine
              </h3>
              <p className="text-justify general-sans-light">
                Duck or goose liver dish, seasoned with salt and pepper, made
                from force-fed birds.
              </p>
              <p className="general-sans-regular">22€</p>
            </div>
          </div>
          {/* CODICE QUARTO ANTIPASTO */}
          <div className="flex flex-col xl:flex-row gap-5">
            <img
              src={nicoise_salad}
              className="w-full h-auto xl:w-56 xl:h-48 object-cover"
              alt="Salmone scottato alla griglia su crostini e verdurine"
            />
            <div className="flex flex-col items-start justify-center xl:justify-between py-5">
              <h3 className="text-md xl:text-xl general-sans-semi-bold">
                Niçoise Salad
              </h3>
              <p className="text-justify general-sans-light">
                French salad with fresh/cooked veggies, tuna, eggs, olives,
                anchovies, and vinaigrette.
              </p>
              <p className="general-sans-regular">17€</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MenuPage;

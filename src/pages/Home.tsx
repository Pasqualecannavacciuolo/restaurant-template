import hero_img from "../assets/img/home/hero-img.webp";

function Home() {
  return (
    <div className="h-screen xl:mt-48 px-4 flex flex-col justify-center items-center">
      <div className="flex flex-col gap-5 xl:gap-48 xl:flex-row items-center w-full max-w-screen-xl">
        <div className="flex justify-start xl:w-[700px]">
          <h1 className="text-2xl xl:text-5xl general-sans-bold">
            Benvenuti al nostro ristorante, dove il vostro desiderio di
            eccellenza trova la sua dimora.
          </h1>
        </div>
        <div className="flex flex-col justify-start">
          <p className="xl:text-lg text-justify xl:w-[500px] general-sans-light">
            Deliziate il vostro palato con le prelibatezze preparate dai nostri
            chef stellati e lasciatevi trasportare in un viaggio gastronomico
            indimenticabile.
          </p>
          <div className="flex flex-row gap-5 mt-5">
            <button className="btn btn-padding text-xs xl:text-lg general-sans-bold">
              Prenota un tavolo
            </button>
            <button className="btn-ghost btn-padding text-xs xl:text-lg general-sans-light">
              Esplora il nostro menu
            </button>
          </div>
        </div>
      </div>
      <div className="mt-10 max-w-screen-xl">
        <img
          src={hero_img}
          width={1350}
          alt="Immagine decorativa"
          className="mx-auto"
        />
      </div>
    </div>
  );
}

export default Home;

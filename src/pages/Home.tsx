function Home() {
  return (
    <div className="h-screen pt-48 px-4">
      <div className="flex flex-row items-center justify-evenly">
        <div className="flex justify-start w-[700px]">
          <h1 className="text-5xl general-sans-bold">
            Benvenuti al nostro ristorante, dove il vostro desiderio di
            eccellenza trova la sua dimora.
          </h1>
        </div>
        <div className="flex flex-col justify-start">
          <p className="text-lg text-justify w-[500px] general-sans-light">
            Deliziate il vostro palato con le prelibatezze preparate dai nostri
            chef stellati e lasciatevi trasportare in un viaggio gastronomico
            indimenticabile.
          </p>
          <div className="flex flex-row gap-5 mt-5">
            <button className="btn btn-padding general-sans-bold">
              Prenota un tavolo
            </button>
            <button className="btn-ghost btn-padding general-sans-light">
              Esplora il nostro menu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

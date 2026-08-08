// const countriesPromise = fetch('https://openapi.programming-hero.com/api/all').then(res => res.json());

import { Suspense } from "react";
import AvailablePlayers from "./components/availablePlayers/AvailablePlayers";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Loading from "./components/Loading";

const fetchPlayers = async () => {
  const res = await fetch("/players.json");
  return res.json();
};

function App() {
  const playersPromise = fetchPlayers();

  return (
    <>
      <Navbar />
      <Hero />
      <Suspense
        fallback={
          <>
            <Loading />
          </>
        }
      >
        <AvailablePlayers playersPromise={playersPromise} />
      </Suspense>
    </>

    // <div className="max-w-7xl mx-auto">
    //   {/* <h1 className="text-2xl font-semibold mt-20">Here are the countries!</h1> */}
    //   {/* <Countries /> */}
    //   {/*
    //   <Suspense fallback={<><Loading /></>}>
    //     <Countries countriesPromise={countriesPromise} />
    //   </Suspense> */}
    // </div>
  );
}

export default App;

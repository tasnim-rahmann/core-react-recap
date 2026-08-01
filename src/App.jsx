import { Suspense } from "react";
import Countries from "./components/countries/Countries";
import Loading from "./components/Loading";

const countriesPromise = fetch('https://openapi.programming-hero.com/api/all').then(res => res.json());

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-2xl font-semibold mt-20">Here are the countries!</h1>
      {/* <Countries /> */}

      <Suspense fallback={<><Loading /></>}>
        <Countries countriesPromise={countriesPromise} />
      </Suspense>
    </div>
  );
}

export default App;

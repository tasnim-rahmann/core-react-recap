import { use, useState } from "react";
import Country from "../country/Country";

const Countries = ({ countriesPromise }) => {
    const [visitedCountries, setVisitedCountries] = useState([]);

    const handleViditedCountries = (country) => {
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    };

    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;

    // const [countries, setCountries] = useState([]);
    // useEffect(() => {
    //     fetch('https://openapi.programming-hero.com/api/all')
    //         .then(res => res.json())
    //         .then(data => setCountries(data.countries));
    // }, []);

    return (
        <>
            <h3 className="mt-2 font-medium">Total visited country : {visitedCountries.length}</h3>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                {
                    countries.map((country) => (
                        <Country
                            key={country.cca3.cca3}
                            country={country}
                            handleViditedCountries={handleViditedCountries}
                        />
                    ))
                }
            </div>
        </>
    );
};

export default Countries;
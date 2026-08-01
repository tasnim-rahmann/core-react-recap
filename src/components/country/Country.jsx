import { useState } from "react";

const Country = ({ country, handleViditedCountries }) => {
    const [visited, setVisited] = useState(false);

    const handleVidited = () => {
        setVisited(!visited);
        handleViditedCountries(country);
    };

    return (
        <div className="border flex justify-between">
            <div className="my-4 space-y-2">
                <h1 className="uppercase font-medium px-4">Name : {country.name.official}</h1>
                {/* <p className="uppercase font-medium px-4">Capital : {country.capital.capital[0]}</p> */}
                <button
                    className="border p-2 rounded-sm mx-4 cursor-pointer hover:bg-black/5 transition-colors duration-100 text-sm font-bold uppercase"
                    onClick={handleVidited}
                >
                    {visited ? "Visited" : "Not Visited"}
                </button>
            </div>
            <div className="w-60 h-30">
                <img
                    src={country.flags.flags.svg}
                    alt={country.flags.flags.alt}
                    className="h-full w-full object-cover"
                />
            </div>
        </div>
    );
};

export default Country;
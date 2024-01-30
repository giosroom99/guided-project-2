import { useEffect, useState } from "react";
import { fetchData } from "../utils/apiCalls";
import { Link } from "react-router-dom";

export default function Home() {
  const [charactersData, setCharactersData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchData("characters");
      setCharactersData(await data);
    };
    getData();
  }, []);

  if (!charactersData) {
    return <>Nothing to see here</>;
  }
  return (
    <div>
      <div>
        <h1 className="text-center">Star Wars Universe Lookup</h1>
        <label htmlFor="searchString">
          Who you looking for?{" "}
          <span className="small text-cente">
            (Regular expressions are cool here)
          </span>
        </label>
      </div>

      <section id="charactersList">
        {charactersData.map((character, index) => (
          <p key={index}>
            <Link to={`/character/${character.id}`}>
              <span className="badge bg-primary m-2" id="character">
                {character.name}
              </span>
            </Link>
          </p>
        ))}
      </section>
    </div>
  );
}

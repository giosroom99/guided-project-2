import { useEffect, useState } from "react";
import { fetchData } from "../utils/apiCalls";
import { Link } from "react-router-dom";

export default function Home() {
  const [charactersData, setCharactersData] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);

  const filterCharacters = (searchString: string) => {
    const re = new RegExp(searchString, "i");
    const filtered = charactersData.filter((character) =>
      // character.name.toLowerCase().includes(searchString.toLowerCase())
      re.test(character.name)
    );
    setFilteredCharacters(filtered);
  };

  useEffect(() => {
    const getData = async () => {
      const data = await fetchData("characters");
      setCharactersData(data);
      setFilteredCharacters(data);
    };
    getData();
  }, []);

  if (!charactersData) {
    return <>Nothing to see here</>;
  }

  return (
    <div className="container">
      <div className="row my-3">
        <h1 className="text-center my-3">Star Wars Universe Lookup</h1>
        <label className="my-2" htmlFor="searchString">
          Who you looking for?{" "}
          <span className="small text-center">
            (Regular expressions are cool here)
          </span>
        </label>
        <input
          onChange={(e) => filterCharacters(e.target.value)}
          className="form-control"
          type="text"
          placeholder="Default input"
          aria-label="default input example"
        ></input>
      </div>

      <section className="" id="charactersList">
        {filteredCharacters.map((character, index) => (
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

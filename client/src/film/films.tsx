import { fetchData } from "../utils/apiCalls";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Film() {
  const { filmID } = useParams();

  const [filmData, setFilmData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      ///films/1
      let data = await fetchData(`films/${Number(filmID)}`);
      // http://localhost:3000/api/films/1/planets
      const filmPlanet = await fetchData(`films/${Number(filmID)}/planets`);
      data.planets = filmPlanet.map((planet) => {
        return { id: planet.id, name: planet.name };
      });
      const filmCharacter = await fetchData(
        `films/${Number(filmID)}/characters`
      );
      data.characters = filmCharacter.map((character) => {
        return { id: character.id, name: character.name };
      });

      console.log(data);
      setFilmData(await data);
    };
    getData();
  }, []);

  if (!filmData) {
    return (
      <div>
        <h1>could not find that film</h1>
      </div>
    );
  }
  return (
    <div className="container">
      <h1 className="text-center">Film Information </h1>
      <div className="">
        <div className="card mb-3">
          <img
            src="https://picsum.photos"
            className="card-img-top rounded mx-auto d-block"
            alt="..."
          ></img>
          <div className="card-body">
            <h5 className="card-title">{filmData.title}</h5>
            <p className="card-text d-block">
              {" "}
              <span className="fw-bold">Producer:</span> {filmData.producer}
            </p>
            <p className="card-text d-block">
              {" "}
              <span className="fw-bold">Director:</span> {filmData.director}
            </p>
            <p className="card-text ">
              {" "}
              <span className="fw-bold">released_date:</span>{" "}
              {filmData.release_date}
            </p>

            <p className="card-text d-inline">
              {" "}
              <span className="fw-bold">Opening crawl:</span>{" "}
              {filmData.opening_crawl}
            </p>
          </div>
        </div>

        <div className="mt-5">
          <h1>Planets appeared in this film</h1>
          {filmData.planets ? (
            filmData.planets.map((planet, index) => (
              <h5 className="d-inline m-2" key={index}>
                <Link to={`/planet/${planet.id}`}>
                  <span className="badge bg-primary">{planet.name}</span>
                </Link>
              </h5>
            ))
          ) : (
            <p>No planets data available</p>
          )}

          <p></p>
        </div>

        <div className="mt-5">
          <h1>Characters appeared in this film</h1>
          {filmData.characters ? (
            filmData.characters.map((character, index) => (
              <h5 className="d-inline m-2" key={index}>
                <Link to={`/character/${character.id}`}>
                  <span className="badge bg-primary">{character.name}</span>
                </Link>
              </h5>
            ))
          ) : (
            <p>No characters data available</p>
          )}

          <p></p>
        </div>
      </div>
    </div>
  );
}

export default Film;

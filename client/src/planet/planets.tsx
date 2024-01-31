import { fetchData } from "../utils/apiCalls";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Planets() {
  const { planetID } = useParams();

  const [planetData, setPlanetData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let data = await fetchData(`planets/${Number(planetID)}`);
      // http://localhost:3000/api/planets/1/films
      const planetFilm = await fetchData(`planets/${Number(planetID)}/films`);
      data.films = planetFilm.map((film) => {
        return { id: film.id, title: film.title };
      });
      const planetCharacters = await fetchData(
        `planets/${Number(planetID)}/characters`
      );
      data.characters = planetCharacters.map((character) => {
        return { id: character.id, name: character.name };
      });

      console.log(data);
      setPlanetData(await data);
    };
    getData();
  }, []);

  if (!planetData) {
    return (
      <div>
        <h1>could not find that planet</h1>
      </div>
    );
  }
  return (
    <div className="container">
      <h1 className="text-center">Planet Information </h1>
      <div className="">
        <div className="card mb-3">
          <img
            src="https://picsum.photos"
            className="card-img-top rounded mx-auto d-block"
            alt="..."
          ></img>
          <div className="card-body">
            <h5 className="card-title">{planetData.name}</h5>
            <p className="card-text d-block">
              {" "}
              <span className="fw-bold">Terrain:</span> {planetData.terrain}
            </p>
            <p className="card-text d-block">
              {" "}
              <span className="fw-bold">Population:</span>{" "}
              {planetData.population}
            </p>
            <p className="card-text ">
              {" "}
              <span className="fw-bold">Climate:</span> {planetData.climate}
            </p>

            <p className="card-text d-inline">
              {" "}
              <span className="fw-bold">Diameter:</span> {planetData.diameter}
            </p>
          </div>
        </div>

        <div className="mt-5">
          <h1>Characters appeared in this planet</h1>
          {planetData.characters ? (
            planetData.characters.map((character, index) => (
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

        <div className="mt-5">
          <h1>Films appeared in this planet</h1>
          {planetData.films ? (
            planetData.films.map((film, index) => (
              <h5 className="d-inline m-2" key={index}>
                <Link to={`/film/${film.id}`}>
                  <span className="badge bg-primary">{film.title}</span>
                </Link>
              </h5>
            ))
          ) : (
            <p>No films data available</p>
          )}

          <p></p>
        </div>
      </div>
    </div>
  );
}

export default Planets;

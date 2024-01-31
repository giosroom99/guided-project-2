import { fetchData } from "../utils/apiCalls";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Character() {
  const { characterID } = useParams();
  console.log();

  const [characterData, setCharacterData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let data = await fetchData("characters", Number(characterID));
      const planet = await fetchData("planets", Number(data.homeworld));
      const characterFilms = await fetchData(
        `characters/${Number(characterID)}/films`
      );
      data.planetName = planet.name;
      data.films = characterFilms.map((film) => {
        return { id: film.id, title: film.title };
      });
      console.log(data);
      setCharacterData(await data);
    };
    getData();
  }, []);

  if (!characterData) {
    return (
      <div>
        <h1>could not find that person</h1>
      </div>
    );
  }
  return (
    <div className="container">
      <h1 className="text-center">Character Information </h1>
      <div className="">
        <div className="card mb-3">
          <img
            src="https://picsum.photos"
            className="card-img-top rounded mx-auto d-block"
            alt="..."
          ></img>
          <div className="card-body">
            <h5 className="card-title">{characterData.name}</h5>
            <p className="card-text d-block">
              {" "}
              <span className="fw-bold">Gender:</span> {characterData.gender}
            </p>
            <p className="card-text ">
              {" "}
              <span className="fw-bold">Birthdate:</span>{" "}
              {characterData.birth_year}
            </p>
            <p className="card-text d-inline">
              {" "}
              <span className="fw-bold">Height:</span> {characterData.height}
            </p>
            <p className="card-text d-inline">
              {" "}
              <span className="fw-bold">Mass:</span> {characterData.mass}
            </p>
          </div>
        </div>

        <div className="mt-5">
          <h1>Homeworld</h1>
          <h5>
            <Link to={`/planet/${characterData.homeworld}`}>
              <span className="badge bg-primary">
                {characterData.planetName}
              </span>
            </Link>
          </h5>
          <p></p>
        </div>

        <div className="mt-5">
          <h1>Film appeared in</h1>
          {characterData.films ? (
            characterData.films.map((film, index) => (
              <h5 key={index}>
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

export default Character;

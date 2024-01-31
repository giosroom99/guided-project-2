import { fetchData } from "../utils/apiCalls";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Film() {
  const { filmID } = useParams();

  const [filmData, setFilmData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let data = await fetchData("films", Number(filmID));
      const planet = await fetchData("planets", Number(data.homeworld));
      const characterFilms = await fetchData(
        `characters/${Number(filmID)}/films`
      );
      data.planetName = planet.name;
      data.films = characterFilms.map((film) => {
        return { id: film.id, title: film.title };
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
              <span className="fw-bold">Gender:</span> {filmData.gender}
            </p>
            <p className="card-text ">
              {" "}
              <span className="fw-bold">Birthdate:</span> {filmData.birth_year}
            </p>
            <p className="card-text d-inline">
              {" "}
              <span className="fw-bold">Height:</span> {filmData.height}
            </p>
            <p className="card-text d-inline">
              {" "}
              <span className="fw-bold">Mass:</span> {filmData.mass}
            </p>
          </div>
        </div>

        <div className="mt-5">
          <h1>Homeworld</h1>
          <h5>
            <span className="badge bg-primary">{filmData.planetName}</span>
          </h5>
          <p></p>
        </div>

        <div className="mt-5">
          <h1>Film appeared in</h1>
          {filmData.films ? (
            filmData.films.map((film, index) => (
              <h5 key={index}>
                <Link to={`/films/${film.id}`}>
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

export default Film;

import { useEffect, useState } from "react";
import { fetchData } from "../utils/apiCalls";

function Planets(props) {
  const [planet, setPlanet] = useState({});

  useEffect(() => {
    const fetchPlanet = async () => {
      const planetData = await fetchData("planets", props.planet_id);
      setPlanet(planetData);
    }

    fetchPlanet();
  }, []);
  
  return (
    <div className="container">
      <h1 className="text-center">{planet.name}</h1>
    </div>
  );
}

export default Planets;

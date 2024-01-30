import { fetchData } from "../utils/apiCalls";

function Planets() {
  console.log(fetchData("planets"));
  
  return (
    <div className="container">
      <h1 className="text-center">A Star Wars Planet</h1>
    </div>
  );
}

export default Planets;

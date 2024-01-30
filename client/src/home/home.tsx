export default function Home() {
  const listOfCharacters = ["Emily", "Liam", "Sophia", "Jackson", "Olivia"];

  if (!listOfCharacters) {
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
        {listOfCharacters.map((character, index) => (
          <p key={index}>
            <span id="character">{character}</span>
          </p>
        ))}
      </section>
    </div>
  );
}

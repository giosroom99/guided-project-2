export default function ImageBanner() {
  const imageUrl =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Star_wars2.svg/1280px-Star_wars2.svg.png";
  return (
    <div className="row ">
      <img
        alt="Your Image Alt Text"
        className="w-50 h-auto mx-auto"
        src={imageUrl}
      ></img>
    </div>
  );
}

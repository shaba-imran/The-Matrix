const CastCard = ({ id, name, played }) => {
  return (
    <div className="bg-dark-blue dib br3 pa2 ma2 grow bw2 shadow-5">
      <img
        alt="character"
        src={id}
        style={{ width: "260px", height: "290px" }}
      />
      <div>
        <h3 className="light-silver">{played}</h3>
        <p>{name}</p>
      </div>
    </div>
  );
};

const FilmCard = ({ id, title, year, rating }) => {
  return (
    <div className="bg-dark-blue dib br3 pa2 ma2 grow bw2 shadow-5">
      <img alt="film" src={id} style={{ width: "270px", height: "320px" }} />
      <div>
        <h3 className="light-silver">{title}</h3>
        <strong>{year}</strong>
        <br />
        <strong className="light-red">IMDb: {rating}</strong>
      </div>
    </div>
  );
};

export { CastCard, FilmCard };

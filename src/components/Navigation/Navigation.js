import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav className="mw7 center mt4 pb3">
      <ul>
        <li className="f6 f5-l link bg-animate hover-bg-purple dib pa3 ph4-l">
          <Link to="/">Home</Link>
        </li>
        <li className="f6 f5-l link bg-animate hover-bg-purple dib pa3 ph4-l">
          <Link to="/films">Films</Link>
        </li>
        <li className="f6 f5-l link bg-animate hover-bg-purple dib pa3 ph4-l">
          <Link to="/characters">Characters</Link>
        </li>
        <li className="f6 f5-l link bg-animate hover-bg-purple dib pa3 ph4-l">
          <Link to="/trailers">Trailers</Link>
        </li>
        <li className="f6 f5-l link bg-animate hover-bg-purple dib pa3 ph4-l">
          <Link to="/quotes">Quotes</Link>
        </li>
        <li className="f6 f5-l link bg-animate hover-bg-purple dib pa3 ph4-l">
          <Link to="/clips">ShortClips</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

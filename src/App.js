import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./routes/Layout";
import Home from "./routes/Home";
import Films from "./routes/Films";
import Characters from "./routes/Characters";
import Trailers from "./routes/Trailers";
import Quotes from "./routes/Quotes";
import ShortClips from "./routes/ShortClips";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <HashRouter basename="/The-Matrix/#"> */}
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="https://shaba-imran.github.io/The-Matrix/films"
              element={<Films />}
            />
            <Route
              path="https://shaba-imran.github.io/The-Matrix/characters"
              element={<Characters />}
            />
            <Route
              path="https://shaba-imran.github.io/The-Matrix/trailers"
              element={<Trailers />}
            />
            <Route
              path="https://shaba-imran.github.io/The-Matrix/quotes"
              element={<Quotes />}
            />
            <Route
              path="https://shaba-imran.github.io/The-Matrix/clips"
              element={<ShortClips />}
            />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;

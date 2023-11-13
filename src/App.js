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
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="films" element={<Films />} />
            <Route path="characters" element={<Characters />} />
            <Route path="trailers" element={<Trailers />} />
            <Route path="quotes" element={<Quotes />} />
            <Route path="clips" element={<ShortClips />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;

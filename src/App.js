import {
  HashRouter as Router,
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./routes/Home";
import Spec_Thailand from "./routes/Spec_Thailand";
import Spec_Suncheon from "./routes/Spec_Suncheon";
import Spec_Gangneung from "./routes/Spec_Gangneung";
import Spec_Songdo from "./routes/Spec_Songdo";
import Spec_Ulleungdo from "./routes/Spec_Ulleungdo";
import Spec_Japan from "./routes/Spec_Japan";
import Spec_Bolivia from "./routes/Spec_Bolivia";
import Spec_Egypt from "./routes/Spec_Egypt";
import Main from "./routes/Main";
import style from "./App.module.css";
import Menu from "./components/Menu";
import International from "./routes/International";
import Bener from "./title.png";

function App() {
  return (
    <Router>
      <header className={style.header}>
        <img src={Bener} className={style.header} />
      </header>
      <Menu />
      <div className={style.style}>
        <Routes>
          <Route path="" element={<Main />} />
          <Route path="/spot/100" element={<Spec_Gangneung />} />
          <Route path="/spot/101" element={<Spec_Songdo />} />
          <Route path="/spot/102" element={<Spec_Suncheon />} />
          <Route path="/spot/103" element={<Spec_Ulleungdo />} />
          <Route path="/spot/1000" element={<Spec_Bolivia />} />
          <Route path="/spot/1001" element={<Spec_Egypt />} />
          <Route path="/spot/1002" element={<Spec_Japan />} />
          <Route path="/spot/1003" element={<Spec_Thailand />} />
          <Route path="/domestic" element={<Home />} />
          <Route path="/international" element={<International />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

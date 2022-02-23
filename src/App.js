import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { HomePage } from './pages/Home';
import { TeamsPage } from './pages/Teams';
import { PlayersPage } from './pages/Players';
import { Navbar } from "./components/Navbar";
import './App.css';


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <>
          <Route path="/" element={<HomePage />} />
          <Route path="/players" element={<PlayersPage />} />
          <Route path="/teams" element={<TeamsPage />} />
          </>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

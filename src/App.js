import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { HomePage } from './pages/Home';
import { RQPlayers } from './pages/RQPlayers';
import { TradtionalPlayers } from './pages/TradtionalPlayers';
import { Navbar } from "./components/Navbar";
import './App.css';


function App() {
  const queryClient = new QueryClient()
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <>
            <Route path="/" element={<HomePage />} />
            <Route path="/traditional-players" element={<TradtionalPlayers />} />
            <Route path="/rq-players" element={<RQPlayers />} />
            </>
          </Routes>
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpem={false} position='bottom-right' />
      </QueryClientProvider>
    </>
  );
}

export default App;

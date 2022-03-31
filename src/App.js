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
import { RQPlayerDetails } from "./pages/RQPlayerDetails";
import { ParallelQueries } from "./pages/ParallelQueries";
import { DynamicParallelQueries } from "./pages/DynamicParallelQueries";
import { DependentQueries } from "./pages/DependentQueries";
import { PaginatedQueries } from "./pages/PaginatedQueries";


function App() {
  const queryClient = new QueryClient()
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <>
            <Route path="/rq-paginated" element={<PaginatedQueries/>} />
            <Route path="/rq-dependent" element={<DependentQueries playerId="1628389" />} />
            <Route path="/rq-dynamic-parallel" element={<DynamicParallelQueries playersId={['1628389', '201939']} />} />
            <Route path="/rq-parallel" element={<ParallelQueries />} />
            <Route path="/rq-players/:playerId" element={<RQPlayerDetails />} />
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

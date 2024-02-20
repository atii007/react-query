import "./App.css";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import HeroesPage from "./components/HeroesPage";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import RQHeroesPage from "./components/RQHeroesPage";
import RQHeroDetail from "./components/RQHeroDetail";
import ParallelQueries from "./components/ParallelQueries";
import DynamicParallel from "./components/DynamicParallel";
import DependentQueries from "./components/DependentQueries";
import PaginatedQueries from "./components/PaginatedQueries";
import InfiniteQueries from "./components/InfiniteQueries";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/heroes-page" element={<HeroesPage />} />
        <Route path="/rq-heroes" element={<RQHeroesPage />} />
        <Route path="/rq-heroes/:heroId" element={<RQHeroDetail />} />
        <Route path="rq-parallel" element={<ParallelQueries />} />
        <Route
          path="/rq-dynamic-parallel"
          element={<DynamicParallel heroIds={[1, 3]} />}
        />
        <Route
          path="/rq-dependent"
          element={<DependentQueries email="example@gmail.com" />}
        />
        <Route path="rq-paginated" element={<PaginatedQueries />} />
        <Route path="/rq-infinite" element={<InfiniteQueries />} />
      </Routes>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;

import "./App.css";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import HeroesPage from "./components/HeroesPage";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import RQHeroesPage from "./components/RQHeroesPage";
import RQHeroDetail from "./components/RQHeroDetail";

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
      </Routes>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;

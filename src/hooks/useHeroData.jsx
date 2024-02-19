import { useQuery } from "react-query";
import axios from "axios";

const fetchHeroDetail = (heroId) => {
  return axios.get(`http://localhost:3000/superheroes/${heroId}`);
};

export const useHeroData = (heroId) => {
  return useQuery(["hero", heroId], () => fetchHeroDetail(heroId));
};

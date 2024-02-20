import { useQuery, useQueryClient } from "react-query";
import axios from "axios";

const fetchHeroDetail = ({ queryKey }) => {
  const heroId = queryKey[1];
  return axios.get(`http://localhost:3000/superheroes/${heroId}`);
};

export const useHeroData = (heroId) => {
  const queryClient = useQueryClient();
  return useQuery(["hero", heroId], fetchHeroDetail, {
    initialData: () => {
      const hero = queryClient
        .getQueryData("hero")
        ?.data?.find((hero) => hero.id === parseInt(heroId));

      if (hero) {
        return {
          data: hero,
        };
      } else {
        return undefined;
      }
    },
  });
};

import { useQuery, useMutation, useQueryClient } from "react-query";
import axios from "axios";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:3000/superheroes");
};

const addSuperHeroes = (hero) => {
  return axios.post("http://localhost:3000/superheroes", hero);
};

export const useSuperHeroData = (onSuccess, onError) => {
  return useQuery("super-heroes", fetchSuperHeroes, {
    onSuccess,
    onError,
    // select: (data) => {
    //   const superHeroNames = data.data.map((hero) => hero.name);
    //   return superHeroNames;
    // },
  });
};

export const useAddHero = () => {
  const queryClient = useQueryClient();
  return useMutation(addSuperHeroes, {
    onSuccess: (data) => {
      // queryClient.invalidateQueries("super-heroes");
      queryClient.setQueryData("super-heroes", (oldQueryData) => {
        return {
          ...oldQueryData,
          data: [...oldQueryData.data, data.data],
        };
      });
    },
  });
};

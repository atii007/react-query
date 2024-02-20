import React from "react";
import { useQueries } from "react-query";
import axios from "axios";

const fetchHeroes = (heroId) => {
  return axios.get(`http://localhost:3000/superheroes/${heroId}`);
};

const DynamicParallel = ({ heroIds }) => {
  const queryResults = useQueries(
    heroIds.map((id) => {
      return {
        queryKey: ["super-hero", id],
        queryFn: () => fetchHeroes(id),
      };
    })
  );

  console.log({ queryResults });
  return (
    <>
      <div>DynamicParallel</div>
    </>
  );
};

export default DynamicParallel;

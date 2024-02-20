import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const fetchHeroes = () => {
  return axios.get("http://localhost:3000/superheroes");
};

const fetchFriends = () => {
  return axios.get("http://localhost:3000/friends");
};

const ParallelQueries = () => {
  useQuery("Heroes", fetchHeroes);
  useQuery("Friends", fetchFriends);
  return <div>ParallelQueries</div>;
};

export default ParallelQueries;

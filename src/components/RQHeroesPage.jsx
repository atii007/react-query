import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAddHero, useSuperHeroData } from "../hooks/useSuperHeroData";

const onSuccess = (data) => {
  // console.log("Perform The Side Effect after Fetching Data", data);
};

const onError = (error) => {
  // console.log("Perform The Side Effect after getting error", error);
};

const RQHeroesPage = () => {
  const [name, setName] = useState("");
  const [alterEgo, setAlterEgo] = useState("");
  const { isLoading, data, isError, error, isFetching, refetch } =
    useSuperHeroData(onSuccess, onError);

  const { mutate: addHero } = useAddHero();

  // console.log({ isLoading, isFetching });

  if (isLoading || isFetching) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }

  const handleAddHero = () => {
    console.log({ name, alterEgo });
    const hero = { name, alterEgo };
    addHero(hero);
  };
  return (
    <>
      <h2>RQ Super Heroes page</h2>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={alterEgo}
          onChange={(e) => setAlterEgo(e.target.value)}
        />
        <button onClick={handleAddHero}>Add Hero</button>
      </div>
      <button
        style={{
          backgroundColor: "#9d9d9d",
          color: "white",
          padding: "10px",
          border: "none",
          borderRadius: "5px",
        }}
        onClick={refetch}
      >
        Fetch Data
      </button>
      {data?.data.map((hero) => {
        return (
          <div key={hero.id}>
            <Link to={`/rq-heroes/${hero.id}`}>{hero.name}</Link>
          </div>
        );
      })}
      {/* {data.map((heroName) => {
        return <div key={heroName}>{heroName}</div>;
      })} */}
    </>
  );
};

export default RQHeroesPage;

import React, { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";

const fetchColors = (page) => {
  return axios.get(`http://localhost:3000/colors?_per_page=2&_page=${page}`);
};

const PaginatedQueries = () => {
  const [page, setPage] = useState(1);
  const { isLoading, isError, error, data } = useQuery({
    queryKey: ["colors", page],
    queryFn: () => fetchColors(page),
  });

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }
  console.log(data.data.data);
  return (
    <>
      <div>
        {data?.data.data.map((color) => {
          return (
            <div key={color.id}>
              <h2>
                {color.id}. {color.label}
              </h2>
            </div>
          );
        })}
      </div>
      <button
        style={{
          padding: "10px",
          margin: "10px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={() => setPage((page) => page - 1)}
        disabled={page === 1}
      >
        Prev Page
      </button>
      <button
        style={{
          padding: "10px",
          margin: "10px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={() => setPage((page) => page + 1)}
        disabled={page === 4}
      >
        Next Page
      </button>
    </>
  );
};

export default PaginatedQueries;

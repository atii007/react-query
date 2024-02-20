import { useInfiniteQuery } from "react-query";
import axios from "axios";
import { Fragment } from "react";

const fetchColors = ({ pageParam = 1 }) => {
  return axios.get(
    `http://localhost:3000/colors?_per_page=2&_page=${pageParam}`
  );
};

const InfiniteQueries = () => {
  const { isLoading, isError, error, data, hasNextPage, fetchNextPage } =
    useInfiniteQuery(["colors"], fetchColors, {
      getNextPageParam: (_lastPage, pages) => {
        if (pages.length < 4) {
          return pages.length + 1;
        } else {
          return undefined;
        }
      },
    });

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }
  return (
    <>
      <div>
        {data?.pages.map((group, i) => {
          return (
            <Fragment key={i}>
              {group.data.data.map((color) => (
                <h2 key={color.id}>
                  {color.id} {color.label}
                </h2>
              ))}
            </Fragment>
          );
        })}
      </div>
      <div>
        <button
          style={{
            padding: "10px",
            margin: "10px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          disabled={!hasNextPage}
          onClick={fetchNextPage}
        >
          Load More
        </button>
      </div>
    </>
  );
};

export default InfiniteQueries;

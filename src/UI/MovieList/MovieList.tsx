import React from "react";

import styled from "styled-components";
import MovieItem from "./MovieItem/MovieItem";
const MovieListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: black;
  & .noMovie {
    display: flex;
    align-items: center;
    width: 60%;
    height: 600px;
    color: white;
  }
`;

const MovieList: React.FC<{ list: any[]; liked: boolean }> = (props) => {
  let moviesMapped;
  if (props.list.length === 0) {
    moviesMapped = (
      <div className="noMovie">
        <p>
          No Movies Added, please swipe left or right to add Movies to the
          list's
        </p>
      </div>
    );
  } else
    moviesMapped = props.list.map((item) => (
      <MovieItem
        key={`MI${item.id}`}
        id={item.id}
        name={item.name}
        image={item.image}
        liked={props.liked}
      />
    ));
  return <MovieListWrapper>{moviesMapped}</MovieListWrapper>;
};

export default MovieList;

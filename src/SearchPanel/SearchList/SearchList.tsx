import React from "react";
import styled from "styled-components";
import MovieCard from "../../UI/MovieCard/MovieCard";
const MovieListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
  & .noMovie {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60%;
    height: 500px;
    color: white;
  }
`;

const SearchList: React.FC<{ list: any[]; liked: boolean }> = (props) => {
  const randomMovie = props.list[Math.floor(Math.random() * props.list.length)];

  return (
    <MovieListWrapper>
      {randomMovie ? (
        <p>{randomMovie.name}</p>
      ) : (
        <div className="noMovie">
          <p>Movie Not Found</p>
        </div>
      )}

      {randomMovie ? <MovieCard movie={randomMovie} onSearchList /> : ""}
    </MovieListWrapper>
  );
};

export default SearchList;

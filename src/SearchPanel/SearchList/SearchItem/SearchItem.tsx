import React from "react";
import styled from "styled-components";

const MovieWrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;

  align-items: center;
  background-color: black;
  color: white;
  padding-bottom: 0.5rem;
  & .moviePoster {
    height: 6rem;
  }
  & .trash {
    height: 2rem;
  }
`;
const SearchItem: React.FC<{
  id: string;
  name: string;
  image: string;
}> = (props) => {
  let moviePoster = props.image;

  if (props.image === "https://image.tmdb.org/t/p/original/null") {
    moviePoster = "https://allmovies.tube/assets/img/no-poster.png";
  }
  return (
    <MovieWrapper>
      <img className="moviePoster" src={moviePoster} alt={props.name} />
      <div>{props.name}</div>
    </MovieWrapper>
  );
};

export default SearchItem;

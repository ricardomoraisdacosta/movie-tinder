import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { removeFromList } from "../../../store/main.store";
import DeleteLogo from "../../../assets/delete.png";

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
const MovieItem: React.FC<{
  id: string;
  name: string;
  image: string;
  liked: boolean;
}> = (props) => {
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(removeFromList({ id: props.id, liked: props.liked }));
  };
  let moviePoster = props.image;
  if (props.image === "https://image.tmdb.org/t/p/original/null") {
    moviePoster = "https://allmovies.tube/assets/img/no-poster.png";
  }
  return (
    <MovieWrapper>
      <img className="moviePoster" src={moviePoster} alt={props.name} />
      <div>{props.name}</div>
      <img
        className="trash"
        alt="Delete"
        src={DeleteLogo}
        onClick={clickHandler}
      />
    </MovieWrapper>
  );
};

export default MovieItem;

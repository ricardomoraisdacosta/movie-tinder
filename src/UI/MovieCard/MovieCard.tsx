import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import Transition from "react-transition-group/Transition";
import {
  setInitX,
  asyncSetState,
  addLikedMovie,
  addHatedMovie,
  removeFromSearchedMovies,
} from "../../store/main.store";

const CardWrapper = styled.div`
  width: 100%;
  background-color: black;
  padding-top: 5rem;

  & img {
    width: 60%;
    border-radius: 1rem;
    box-shadow: 3px 3px 5px 3px #474747;
  }
`;

const MovieCard: React.FC<{ movie: any; onSearchList: boolean }> = (props) => {
  const mouseDown = useSelector((state: RootState) => state.main.initX);
  const visibility = useSelector(
    (state: RootState) => state.main.movieCardView
  );
  const dispatch = useDispatch();
  const mouseDownHandler = (event: any) => {
    dispatch(setInitX(event.pageX));
  };

  const mouseUpHandler = (event: any) => {
    if (mouseDown >= event.pageX) {
      //SwipeLeft dislike
      dispatch(addHatedMovie(props.movie));
    } else {
      //SwipeRight Like
      dispatch(addLikedMovie(props.movie));
    }
    if (props.onSearchList) {
      dispatch(removeFromSearchedMovies(props.movie));
    }
    dispatch(asyncSetState(1));
  };
  const preventDragHandler = (event: any) => {
    event.preventDefault();
  };

  let moviePoster = (
    <img
      onDragStart={preventDragHandler}
      alt={props.movie.name}
      src="https://allmovies.tube/assets/img/no-poster.png"
    />
  );
  if (
    props.movie.image !== "https://image.tmdb.org/t/p/original/null" &&
    props.movie.image !== "https://image.tmdb.org/t/p/original/undefined"
  ) {
    moviePoster = <img alt={props.movie.name} src={props.movie.image} />;
  }

  return (
    <CardWrapper
      onDragStart={preventDragHandler}
      onMouseDown={mouseDownHandler}
      onMouseUp={mouseUpHandler}
    >
      <Transition in={visibility} timeout={1000}>
        {(state) => (
          <div
            style={{
              transition: "opacity 1s ease-out",
              opacity: state === "exiting" ? 0 : 1,
            }}
          >
            {moviePoster}
          </div>
        )}
      </Transition>
    </CardWrapper>
  );
};

export default MovieCard;

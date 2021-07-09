import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { asyncSetState } from "../store/main.store";
import MovieCard from "../UI/MovieCard/MovieCard";

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  color: white;
`;

const MainPanel: React.FC<{}> = (props) => {
  const movie = useSelector((state: RootState) => state.main.movie);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncSetState(1));
  }, []);
  return (
    <MainWrapper>
      <p>{movie.name}</p>

      <MovieCard movie={movie} onSearchList={false} />
    </MainWrapper>
  );
};

export default MainPanel;

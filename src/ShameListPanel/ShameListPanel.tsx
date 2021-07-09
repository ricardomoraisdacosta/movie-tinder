import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";

import MovieList from "../UI/MovieList/MovieList";

const ShameListPanel: React.FC<{}> = (props) => {
  const shameList = useSelector((state: RootState) => state.main.hatedMovies);

  return (
    <div>
      <MovieList list={shameList} liked={false} />
    </div>
  );
};

export default ShameListPanel;

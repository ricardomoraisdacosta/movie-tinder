import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";

import MovieList from "../UI/MovieList/MovieList";

const FavoritesPanel: React.FC<{}> = (props) => {
  const likedList = useSelector((state: RootState) => state.main.likedMovies);

  return (
    <div>
      <MovieList list={likedList} liked={true} />
    </div>
  );
};

export default FavoritesPanel;

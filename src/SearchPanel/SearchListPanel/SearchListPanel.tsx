import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

import MovieList from "../SearchList/SearchList";

const SearchListPanel: React.FC<{}> = (props) => {
  const searchList = useSelector(
    (state: RootState) => state.main.searchedMovies
  );

  return (
    <div>
      <MovieList list={searchList} liked={false} />
    </div>
  );
};

export default SearchListPanel;

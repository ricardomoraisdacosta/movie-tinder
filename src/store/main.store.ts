import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch, AppThunk } from ".";
import { apiKey } from "../utils/keys";

export interface Movie {
  id: string;
  image: string;
  name: string;
}

const main = createSlice({
  name: "main",
  initialState: {
    initX: 0,
    movie: {
      id: "",
      image: "",
      name: "",
    },
    movieCardView: false,
    likedMovies: [] as any,
    hatedMovies: [] as any,
    searchedMovies: [] as any,
  },
  reducers: {
    removeFromSearchedMovies(state, action: PayloadAction<any>) {
      state.searchedMovies = state.searchedMovies.filter((movie: any) => {
        return movie.id !== action.payload.id;
      });
    },
    setSearchedMovies(state, action: PayloadAction<any>) {
      state.searchedMovies = action.payload.map((item: any) => {
        const movie = {
          id: item.id,
          name: item.title,
          image: `https://image.tmdb.org/t/p/original/${item.poster_path}`,
        };

        return movie;
      });
    },
    setMovie(state, action: PayloadAction<any>) {
      state.movie.id = action.payload.id;
      state.movie.image = `https://image.tmdb.org/t/p/original/${action.payload.poster_path}`;
      state.movie.name = action.payload.original_title;
      state.movieCardView = true;
    },
    setInitX(state, action: PayloadAction<number>) {
      state.initX = action.payload;
    },
    addLikedMovie(
      state,
      action: PayloadAction<{ id: string; image: string; name: string }>
    ) {
      const addMovie: Movie = action.payload;

      state.likedMovies.push(addMovie);
      state.movieCardView = false;
    },
    addHatedMovie(
      state,
      action: PayloadAction<{ id: string; image: string; name: string }>
    ) {
      const addMovie: Movie = action.payload;
      state.hatedMovies.push(addMovie);
      state.movieCardView = false;
    },

    removeFromList(
      state,
      action: PayloadAction<{ id: string; liked: boolean }>
    ) {
      if (action.payload.liked) {
        state.likedMovies = state.likedMovies.filter((movie: any) => {
          return movie.id !== action.payload.id;
        });
      } else {
        state.hatedMovies = state.hatedMovies.filter((movie: any) => {
          return movie.id !== action.payload.id;
        });
      }
    },
  },
});

export const {
  setMovie,
  setInitX,
  addLikedMovie,
  addHatedMovie,
  removeFromList,
  setSearchedMovies,
  removeFromSearchedMovies,
} = main.actions;
export default main.reducer;

export function asyncSetState(type: number, query?: string): AppThunk {
  return async function (dispatch: AppDispatch) {
    if (type === 1) {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/latest${apiKey}`
      );
      const response = await res.json();
      const lastMovieID = response.id;
      let finalID = Math.random() * (lastMovieID - 1) + 1;
      let finalRes = await fetch(
        `https://api.themoviedb.org/3/movie/${finalID}${apiKey}`
      );
      while (finalRes.status === 404) {
        finalID = Math.random() * (lastMovieID - 1) + 1;
        finalRes = await fetch(
          `https://api.themoviedb.org/3/movie/${finalID}${apiKey}`
        );
      }
      let finalResponse = await finalRes.json();

      while (finalResponse.adult) {
        finalID = Math.random() * (lastMovieID - 1) + 1;
        finalRes = await fetch(
          `https://api.themoviedb.org/3/movie/${finalID}${apiKey}`
        );
        finalResponse = await finalRes.json();
      }

      dispatch(setMovie(finalResponse));
    }
    if (type === 2) {
      let res = await fetch(`
       https://api.themoviedb.org/3/search/movie${apiKey}&query=${query}`);
      let finalRes = await res.json();

      dispatch(setSearchedMovies(finalRes.results));
    }
  };
}

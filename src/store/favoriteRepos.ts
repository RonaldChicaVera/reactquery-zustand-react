import create from "zustand";

type favoriteReposState = {
  favoriteReposIds: number[];
};

export const useFavoriteReposStore = create(() => ({
  favoriteReposIds: [],
  //addFavoriteRepo
}));

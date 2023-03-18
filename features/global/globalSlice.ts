import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface GlobalState {
  theme: string;
  isCategoryMenu: boolean;
  isSearchMenu: boolean;
  isFiltersMenu: boolean;
  isCartMenu: boolean;
}

const initialState: GlobalState = {
  theme: "dark",
  isCategoryMenu: false,
  isSearchMenu: false,
  isFiltersMenu: false,
  isCartMenu: false,
};

export const globalSlice = createSlice({
  name: "app",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    toggleTheme: (state, actions: PayloadAction) => {
      state.theme = state.theme === "dark" ? "light" : "dark";
    },

    toggleCategoryMenu: (state, actions: PayloadAction) => {
      state.isCategoryMenu = !state.isCategoryMenu;
    },

    toggleSearchMenu: (state, actions: PayloadAction) => {
      state.isSearchMenu = !state.isSearchMenu;
    },

    toggleFiltersMenu: (state, actions: PayloadAction) => {
      state.isFiltersMenu = !state.isFiltersMenu;
    },

    toggleCartMenu: (state, actions: PayloadAction) => {
      state.isCartMenu = !state.isCartMenu;
    },
  },
});

export const { toggleTheme, toggleCartMenu, toggleSearchMenu, toggleFiltersMenu } = globalSlice.actions;
export default globalSlice.reducer;

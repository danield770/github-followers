import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { IHomePageState } from './types';

export const initialState: IHomePageState = {
  followersPages: [],
  user: '',
  isAccountName: false,
  depth: 1,
};

const HomePageSlice = createSlice({
  name: 'homePage',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
      state.followersPages = [];
      state.depth = 1;
    },
    addFollowersPage: (state, action) => {
      state.followersPages = [...state.followersPages, action.payload];
    },
    updateDepth: (state, action) => {
      state.depth += action.payload;
    },
    updateNameType: (state, action) => {
      state.isAccountName = action.payload;
    },
  },
});

export const selectUser = (state: RootState) => state.homePage.user;
export const selectNameType = (state: RootState) =>
  state.homePage.isAccountName;
export const selectDepth = (state: RootState) => state.homePage.depth;
export const selectCurrentNames = (state: RootState) =>
  state.homePage?.followersPages?.[state.homePage.depth - 1]?.names;
export const selectPaginationInfo = (state: RootState) => [
  state.homePage.followersPages?.[state.homePage.depth - 1]?.endCursor,
  state.homePage.followersPages?.[state.homePage.depth - 1]?.hasNextPage,
];

export const { addUser, addFollowersPage, updateDepth, updateNameType } =
  HomePageSlice.actions;
export default HomePageSlice.reducer;

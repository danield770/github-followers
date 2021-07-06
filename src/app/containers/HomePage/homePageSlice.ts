import { createSlice } from '@reduxjs/toolkit';
import { IHomePageState } from './types';

const initialState: IHomePageState = {
  //   user: '',
  //   depth: 1,
  //   names: [],
  //   usernames: [],
  //   isAccountNames: false,
  followers: null,
};

const HomePageSlice = createSlice({
  name: 'homePage',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.followers = action.payload;
    },
  },
});

export const { addUser } = HomePageSlice.actions;
export default HomePageSlice.reducer;

// function reducer(state, action) {
//     switch (action.type) {
//       case "ADD_USER": {
//         console.log("ADD_USER");
//         return {
//           user: action.user,
//           names: action.names.length > 0 ? [action.names] : [],
//           usernames: [],
//           depth: 1,
//           isAccountNames: action.isAccountNames
//         };
//       }
//       case "ADD_FOLLOWERS": {
//         console.log("ADD_FOLLOWERS");
//         return { ...state, names: [...state.names, action.names] };
//       }
//       case "UPDATE_DEPTH": {
//         console.log("UPDATE_DEPTH");
//         return { ...state, depth: action.depth };
//       }
//       case "UPDATE_CHECKBOX": {
//         console.log("UPDATE_CHECKBOX");
//         return { ...state, isAccountNames: action.isAccountNames };
//       }
//       case "ADD_USERNAMES": {
//         return {
//           ...state,
//           usernames: [
//             ...state.usernames.slice(0, state.depth - 1),
//             action.usernames,
//             ...state.usernames.slice(state.depth)
//           ]
//         };
//       }
//     }
//   }

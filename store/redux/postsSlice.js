import { createSlice } from "@reduxjs/toolkit";

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    items: [
      {
        userName: "Victor Gustafsson",
        userText: "Hej och hå",
        id: 1,
        comments: [
          {
            id: 1,
            commentText: "tjena"
          },
          {
            id: 2,
            commentText: "nä men tjena"
          }
        ]
      },
      {
        userName: "Victor Gustafsson",
        userText: "Idag har jag programmerat",
        id: 2
      },
      {
        userName: "Victor Gustafsson",
        userText: "LÅNG TEXT  ASDASDASDASDASDASDASDASASDASDASDASDASDASDASD",
        id: 3
      },
      {
        userName: "Victor Test",
        userText: "Hej hej och hå",
        id: 4
      },
      {
        userName: "Victor Gustafsson",
        userText: "Hej hej hej",
        id: 5
      },
      {
        userName: "Victor Test",
        userText: "Hej hej och hå",
        id: 6
      }
    ]
  },
  reducers: {
    createPost: (state, action) => {
      state.items.push(action.payload);
    },
    removePost: (state, action) => {
      state.items.splice(state.items.indexOf(action.payload));
    }
  }
});

export const { createPost, removePost } = postsSlice.actions;
export default postsSlice.reducer;

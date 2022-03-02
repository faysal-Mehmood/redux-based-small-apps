import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from '@reduxjs/toolkit';
import sub from 'date-fns/sub';
const initialState = [
  {
    id: '1',
    title: 'First Post!',
    content: 'Hello!',
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    reactions: {
      hooray: 0,
      thumbsUp: 0,
      heart: 0,
      rocket: 0,
      eyes: 0,
    },
  },
  {
    id: '2',
    title: 'Second Post',
    content: 'More text',
    date: sub(new Date(), { minutes: 5 }).toISOString(),
    reactions: {
      hooray: 0,
      thumbsUp: 0,
      heart: 0,
      rocket: 0,
      eyes: 0,
    },
  },
];
const postSLice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            date: new Date().toISOString(),
            userId,
          },
        };
      },
    },
    postEdit(state, action) {
      const post = state.find((post) => post.id === action.payload.id);
      post.title = action.payload.title;
      post.content = action.payload.content;
    },
    reactionAdded(state, action) {
      const { postid, reactionName } = action.payload;

      const post = state.find((post) => post.id === postid);
      if (post) {
        post.reactions[reactionName]++;
      }
    },
  },
});

export default postSLice.reducer;

export const totolposts = (state) => state.posts;
export const { postAdded, postEdit, reactionAdded } = postSLice.actions;

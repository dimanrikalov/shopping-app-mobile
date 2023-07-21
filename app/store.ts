import {configureStore, createSlice} from '@reduxjs/toolkit';


//created a random slice with reducer just to silence the errors
const some = createSlice({
    name: 'some-reducer',
    initialState: {value: 0},
    reducers: {
        increment: prevState => {
            prevState.value + 1;
        }
    }
});

export const store = configureStore({
    reducer: {
        some: some.reducer
    }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

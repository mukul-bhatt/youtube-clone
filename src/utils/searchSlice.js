import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "searchSlice",
    initialState: {},
    reducers: {
        addItem: (state, action) => {
            return {...state, ...action.payload};
        }
    }
})

export const {addItem} = searchSlice.actions;
export default searchSlice.reducer;


// Learning Outcome:
// Redux uses immer behing the scenes
// In redux toolkit, i can either mutate the state OR return a new state altogether
// mutating means if there is an state object, change its properties values but don't reassign it directly
// state = something something is wrong ❌
// state.key = something ✅
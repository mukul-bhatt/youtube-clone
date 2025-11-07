import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
    name: "sidebarSlice",
    initialState: {
        value: true
    },
    reducers: {
        toggleSidebar: (state) => {
            state.value = !state.value;
        },
        closeSidebar: (state) => {
            state.value = false;
        },
        openSidebar: (state) => {
            state.value = true;
        }
    }
})


export const {toggleSidebar, closeSidebar, openSidebar} = sidebarSlice.actions;
export default sidebarSlice.reducer;
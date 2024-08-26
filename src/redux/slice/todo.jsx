import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  data: null,
  error: null,
};

//Action
export const fetchTodo = createAsyncThunk("fetchTodos", async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    return response.data;
  } catch (e) {
    return e.response.data || "something went wrong";
  }
});

const todoSlice = createSlice({
  name: "todo",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodo.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchTodo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchTodo.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.data = null;
      });
  },
});

export default todoSlice.reducer;

import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    searchTerm: "",
    data: [],
  },
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    addCar(state, action) {
      state.data.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(),
      });
    },
    removeCar(state, action) {
      const data = state.data.filter((car) => {
        return car.id !== action.payload;
      });
      state.data = [...data]
    },
  },
});

export const { removeCar, addCar, changeSearchTerm } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;

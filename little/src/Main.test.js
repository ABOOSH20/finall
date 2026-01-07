import { timesReducer } from "./Main";
import { fetchAPI } from "./api";

jest.mock("./api", () => ({
  fetchAPI: jest.fn(),
}));

test("updateTimes returns times based on selected date", () => {
  const selectedDate = new Date("2024-01-01");

  fetchAPI.mockReturnValue(["18:00", "19:00"]);

  const state = [];
  const action = {
    type: "UPDATE_TIMES",
    payload: selectedDate,
  };

  const newState = timesReducer(state, action);

  expect(newState).toEqual(["18:00", "19:00"]);
});

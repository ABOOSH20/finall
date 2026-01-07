import { Routes, Route, useNavigate } from "react-router-dom";
import { useReducer } from "react";
import Homepage from "./Homepage";
import BookingPage from "./BookingPage";
import ConfirmedBooking from "./ConfirmedBooking";
import { fetchAPI, submitAPI } from "./api";

/* ---------- Initialize Times ---------- */
export const initializeTimes = () => {
  return fetchAPI(new Date());
};

/* ---------- Reducer ---------- */
export const timesReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      return fetchAPI(action.payload);
    default:
      return state;
  }
};


function Main() {
  const navigate = useNavigate();

  const [availableTimes, dispatch] = useReducer(
    timesReducer,
    [],
    initializeTimes
  );

  const submitForm = (formData) => {
    if (submitAPI(formData)) {
      navigate("/confirmed");
    }
  };

  return (
    <main>
      <Routes>
        <Route path="/" element={<Homepage />} />

        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={availableTimes}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          }
        />

        <Route
          path="/confirmed"
          element={<ConfirmedBooking />}
        />
      </Routes>
    </main>
  );
}

export default Main;

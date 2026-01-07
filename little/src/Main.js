import { Routes, Route, useNavigate } from "react-router-dom";
import { useReducer, useState } from "react";
import Homepage from "./Homepage";
import BookingPage from "./BookingPage";
import ConfirmedBooking from "./ConfirmedBooking";

// ✅ Initialize available times (STATIC fallback)
const initializeTimes = () => {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

// ✅ Reducer for available times
const timesReducer = (state, action) => {
  switch (action.type) {
    case "BOOK_TIME":
      return state.filter((time) => time !== action.payload);
    default:
      return state;
  }
};

function Main() {
  const navigate = useNavigate();

  // ✅ Available times
  const [availableTimes, dispatch] = useReducer(
    timesReducer,
    [],
    initializeTimes
  );

  // ✅ Booking data (THIS WAS MISSING)
  const [bookingData, setBookingData] = useState([]);

  // ✅ Submit form handler
  const submitForm = (formData) => {
    setBookingData((prev) => [...prev, formData]);
    navigate("/confirmed");
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
              bookingData={bookingData}
            />
          }
        />

        <Route
          path="/confirmed"
          element={<ConfirmedBooking />}
        />

        {/* Optional placeholders to avoid routing errors */}
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/menu" element={<h1>Menu</h1>} />
        <Route path="/order-online" element={<h1>Order Online</h1>} />
        <Route path="/login" element={<h1>Login</h1>} />
      </Routes>
    </main>
  );
}

export default Main;

import { useState, useEffect } from "react";

function BookingForm({ availableTimes, submitForm }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const valid =
      date !== "" &&
      time !== "" &&
      guests >= 1 &&
      guests <= 10 &&
      occasion !== "";

    setIsFormValid(valid);
  }, [date, time, guests, occasion]);

  const handleSubmit = (e) => {
    e.preventDefault();

    submitForm({
      date,
      time,
      guests,
      occasion,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      aria-label="On Click"
      style={{ display: "grid", maxWidth: "300px", gap: "20px" }}
    >
      <label htmlFor="res-date">Choose date</label>
      <input
        id="res-date"
        type="date"
        required
        aria-label="On Click"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        required
        aria-label="On Click"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      >
        <option value="">Select a time</option>
        {availableTimes.map((t) => (
          <option key={t} value={t}>
            {t}
          </option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        id="guests"
        type="number"
        min="1"
        max="10"
        required
        aria-label="On Click"
        value={guests}
        onChange={(e) => setGuests(Number(e.target.value))}
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        required
        aria-label="On Click"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <input
        type="submit"
        value="Make Your Reservation"
        aria-label="On Click"
        disabled={!isFormValid}
      />
    </form>
  );
}

export default BookingForm;

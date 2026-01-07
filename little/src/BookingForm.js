import { useState } from "react";

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      date,
      time,
      guests,
      occasion,
    };

    submitForm(formData);
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "grid", maxWidth: "300px", gap: "20px" }}>
      <label>Choose date</label>
      <input
  type="date"
  value={date}
  onChange={(e) => {
    setDate(e.target.value);
    dispatch({
      type: "UPDATE_TIMES",
      payload: new Date(e.target.value),
    });
  }}
/>



      <label>Choose time</label>
<select
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



      <label>Number of guests</label>
      <input
        type="number"
        min="1"
        max="10"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
      />

      <label>Occasion</label>
      <select value={occasion} onChange={(e) => setOccasion(e.target.value)}>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      <input type="submit" value="Make Your reservation" />
    </form>
  );
}

export default BookingForm;

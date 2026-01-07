import BookingForm from "./BookingForm";

function BookingPage({
  availableTimes,
  dispatch,
  bookingData,
  submitForm,
}) {
  return (
    <section>
      <h1>Reserve a Table</h1>

      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />

      <h2>Existing Reservations</h2>

      <table border="1">
        <thead>
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th>Guests</th>
            <th>Occasion</th>
          </tr>
        </thead>
        <tbody>
          {!bookingData || bookingData.length === 0 ? (
            <tr>
              <td colSpan="4">No reservations yet</td>
            </tr>
          ) : (
            bookingData.map((booking, index) => (
              <tr key={index}>
                <td>{booking.date}</td>
                <td>{booking.time}</td>
                <td>{booking.guests}</td>
                <td>{booking.occasion}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </section>
  );
}

export default BookingPage;

import BookingForm from "./BookingForm";

function BookingPage({ availableTimes, submitForm, bookingData }) {
  return (
    <main>
      <section aria-labelledby="booking-heading">
        <h1 id="booking-heading">Reserve a Table</h1>

        <BookingForm
          availableTimes={availableTimes}
          submitForm={submitForm}
        />
      </section>

      <section aria-labelledby="reservations-heading">
        <h2 id="reservations-heading">Existing Reservations</h2>

        <table aria-label="On Click" border="1">
          <thead>
            <tr>
              <th>Date</th>
              <th>Time</th>
              <th>Guests</th>
              <th>Occasion</th>
            </tr>
          </thead>
          <tbody>
            {bookingData.length === 0 ? (
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
    </main>
  );
}

export default BookingPage;

import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";

const mockTimes = ["17:00", "18:00"];
const mockSubmit = jest.fn();

describe("HTML5 validation tests", () => {
  test("Date input has required attribute", () => {
    render(<BookingForm availableTimes={mockTimes} submitForm={mockSubmit} />);
    const dateInput = screen.getByLabelText(/choose date/i);
    expect(dateInput).toHaveAttribute("required");
  });

  test("Time select has required attribute", () => {
    render(<BookingForm availableTimes={mockTimes} submitForm={mockSubmit} />);
    const timeSelect = screen.getByLabelText(/choose time/i);
    expect(timeSelect).toHaveAttribute("required");
  });

  test("Guests input has min and max attributes", () => {
    render(<BookingForm availableTimes={mockTimes} submitForm={mockSubmit} />);
    const guestsInput = screen.getByLabelText(/number of guests/i);

    expect(guestsInput).toHaveAttribute("min", "1");
    expect(guestsInput).toHaveAttribute("max", "10");
    expect(guestsInput).toHaveAttribute("required");
  });

  test("Occasion select has required attribute", () => {
    render(<BookingForm availableTimes={mockTimes} submitForm={mockSubmit} />);
    const occasionSelect = screen.getByLabelText(/occasion/i);
    expect(occasionSelect).toHaveAttribute("required");
  });
});
describe("JavaScript validation behavior", () => {
  test("Submit button is disabled when form is invalid", () => {
    render(<BookingForm availableTimes={mockTimes} submitForm={mockSubmit} />);
    const submitButton = screen.getByRole("button", {
      name: /make your reservation/i,
    });

    expect(submitButton).toBeDisabled();
  });

  test("Submit button is enabled when form is valid", () => {
    render(<BookingForm availableTimes={mockTimes} submitForm={mockSubmit} />);

    fireEvent.change(screen.getByLabelText(/choose date/i), {
      target: { value: "2026-01-10" },
    });

    fireEvent.change(screen.getByLabelText(/choose time/i), {
      target: { value: "17:00" },
    });

    fireEvent.change(screen.getByLabelText(/number of guests/i), {
      target: { value: "4" },
    });

    fireEvent.change(screen.getByLabelText(/occasion/i), {
      target: { value: "Birthday" },
    });

    const submitButton = screen.getByRole("button", {
      name: /make your reservation/i,
    });

    expect(submitButton).not.toBeDisabled();
  });
});


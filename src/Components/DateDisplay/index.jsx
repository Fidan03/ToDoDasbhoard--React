function DateDisplay({ currentDate }) {
  const dateOptions = { day: "2-digit", month: "2-digit", year: "numeric" };
  const formattedDate = currentDate.toLocaleDateString("en-GB", dateOptions);

  const weekdayOptions = { weekday: "long" };
  const formattedWeekday = currentDate.toLocaleDateString("en-GB", weekdayOptions);

  return (
    <div style={{ textAlign: "center" }} className="flex flex-col justify-items-start">
      <div>{formattedWeekday}</div>
      <div className="text-[var(--color-blue)]">{formattedDate}</div>
    </div>
  );
}

export default DateDisplay;

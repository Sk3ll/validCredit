import React from "react";
import "./dateCard.styl";

interface IDateCard {
  date: Array<string>;
  setDate: any;
  changeDate: any;
}

function DateCard({ date, setDate, changeDate }: IDateCard): JSX.Element {
  const limit = 2;
  return (
    <div className="creditcard-date">
      <span>Exress end</span>
      <form>
        <input
          className="date-month date"
          type="text"
          placeholder="Month"
          value={date[0]}
          onChange={(item: any) =>
            changeDate(item, date[0], setDate[0], ".date-month", limit)
          }
        />
        <span>/</span>
        <input
          className="date-year date"
          type="text"
          placeholder="Year"
          value={date[1]}
          onChange={(item: any) =>
            changeDate(item, date[1], setDate[1], ".date-year", limit)
          }
        />
      </form>
    </div>
  );
}

export default DateCard;

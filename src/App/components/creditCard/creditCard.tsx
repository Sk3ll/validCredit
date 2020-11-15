import React, { useState } from "react";
import "./creditCard.styl";
import NumberCard from "../numberCard/numberCard";
import DateCard from "../dateCard/dateCard";
import CVVCard from "../cvvCard/cvvCard";

function CreditCard(): JSX.Element {
  const [numberCard, setNumberCard] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cvv, setCvv] = useState("");
  const db: any = {
    numberCredit: "5168755609526401",
    month: "09",
    year: "23",
    cvv: "553",
  };
  const backspace = (input: any, data: string, setData: any) => {
    if (input.nativeEvent.data === null) {
      setData(data.substring(0, data.length - 1));
    }
  };
  const formatCardCode = (card: any) => {
    let memory: string;
    if (!isNaN(Number(card.nativeEvent.data))) {
      const el: any = document.querySelector(".creditcard-number");
      el.style.border = "1px solid black";

      memory = numberCard + card.nativeEvent.data;
      if (memory.length <= 19) {
        setNumberCard(
          memory
            .split("")
            .reverse()
            .join("")
            .replace(/\B(?=(\d{4})+(?!\d))/g, " ")
            .split("")
            .reverse()
            .join("")
            .trim()
        );
      }
      backspace(card, numberCard, setNumberCard);
    } else {
      const el: any = document.querySelector(".creditcard-number");
      el.style.border = "1px solid red";
    }
  };
  const formatDate = (
    input: any,
    data: any,
    setData: any,
    styles: string,
    limit: number
  ) => {
    let memory: string;
    if (!isNaN(Number(input.nativeEvent.data))) {
      const el: any = document.querySelector(styles);
      el.style.border = "1px solid black";

      memory = data + input.nativeEvent.data;
      if (memory.length <= limit) {
        setData(memory);
      }
      backspace(input, data, setData);
    } else {
      const el: any = document.querySelector(styles);
      el.style.border = "1px solid red";
    }
  };

  const chekCard = () => {
    if (
      numberCard.replace(/\s/g, "") === db.numberCredit &&
      month === db.month &&
      year === db.year &&
      cvv === db.cvv
    ) {
      alert("Success!");
      const el: any = document.querySelector("button");
      el.style.color = "white";
    } else {
      const el: any = document.querySelector("button");
      el.style.color = "red";
    }
  };

  return (
    <>
      <div className="container-creditcard">
        <NumberCard number={numberCard} change={formatCardCode}></NumberCard>
        <DateCard
          date={[month, year]}
          setDate={[setMonth, setYear]}
          changeDate={formatDate}
        />
      </div>
      <CVVCard data={cvv} setData={setCvv} changeData={formatDate} />
      <button onClick={chekCard}>Submit</button>
    </>
  );
}

export default CreditCard;

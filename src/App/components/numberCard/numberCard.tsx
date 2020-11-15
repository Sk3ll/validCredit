import React from "react";
import "./numberCard.styl";

interface INumberCard {
  number: string;
  change: any;
}

function NumberCard({ number, change }: INumberCard): JSX.Element {
  return (
    <form name="myform">
      <input
        className="creditcard-number"
        type="text"
        name="cardcode"
        placeholder="XXXX XXXX XXXX XXXX"
        value={number}
        onChange={(card: any) => change(card)}
      />
    </form>
  );
}

export default NumberCard;

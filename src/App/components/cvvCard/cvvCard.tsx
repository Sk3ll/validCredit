import React from "react";
import "./cvvCard.styl";

interface ICVVCard {
  data: string;
  setData: any;
  changeData: any;
}

function CVVCard({ data, setData, changeData }: ICVVCard): JSX.Element {
  const limit = 3;
  return (
    <div className="container-cvv">
      <div className="cvv-magnetic"></div>
      <div className="cvv-input">
        <span>CVV</span>
        <form>
          <input
            className="cvv-box"
            type="text"
            placeholder="XXX"
            value={data}
            onChange={(item: any) =>
              changeData(item, data, setData, ".cvv-box", limit)
            }
          />
        </form>
      </div>
    </div>
  );
}

export default CVVCard;

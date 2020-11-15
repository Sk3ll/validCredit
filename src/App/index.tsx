import React from "react";
import "./index.styl";
import CreditCard from "./components/creditCard/creditCard";

function App(): JSX.Element {
  return (
    <div className="main">
      <CreditCard />
    </div>
  );
}

export default App;

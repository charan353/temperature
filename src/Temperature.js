import React, { useState } from "react";

const Temperature = () => {
  const [val, setval] = useState(0);
  const adding = () => {
    setval(val + 1);
  };
  const sub = () => {
    setval(val - 1);
    if (val <= 0) {
      setval(0);
      alert("sorry!! u cnt go down");
    }
  };
  return (
    <div className="temperature">
      <div className="btn-1">
        <button onClick={adding} className="btn">
          +
        </button>
        <span className="btn">{val}</span>
        <button onClick={sub} className="btn">
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;

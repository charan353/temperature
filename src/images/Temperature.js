import React, { useState } from "react";

export const Temperature = () => {
  const [val, setval] = useState(0);
  const [a, seta] = useState("");

  const adding = () => {
    setval(val + 1);
    if (val >= 10) {
      seta("red");
    } else if (val <= 0) {
      seta("lightblue");
    }
  };
  const minus = () => {
    setval(val - 1);
    if (val <= 0) {
      seta("lightblue");
    } 
     else if (val >= 10) {
      seta("red");
    }
  };

  return (
    <>
      <div calssName="temperature">
        <div className="btn-1">
          <div className="clr1" style={{ backgroundColor: a }}>
            <h1 style={{ marginTop: "3.5rem" }}>{val} %</h1>
          </div>
          <div className="btnx">
            <button onClick={adding} className="btn p">
              {" "}
              +{" "}
            </button>
            <button onClick={minus} className="btn m">
              {" "}
              -{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Temperature;

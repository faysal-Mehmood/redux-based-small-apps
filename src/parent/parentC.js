import React, { useState } from "react";
import ChildA from "./childA";
import ChildB from "./childB";
const ParentC = () => {
  const [a, seta] = useState();
  const [b, setb] = useState();
  return (
    <div>
      <h2>parent component</h2>
      <p>value of a: {a}</p>

      <p>value of b: {b}</p>

      <div>
        <ChildA a={a} seta={seta} />
      </div>
      <div>
        <ChildB b={b} setb={setb} />
      </div>
    </div>
  );
};

export default ParentC;

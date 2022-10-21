import React from "react";

const ChildA = ({ a, seta }) => {
  return (
    <>
      <p>change value of A</p>
      <input type="text" value={a} onChange={(e) => seta(e.target.value)} />
      {/* <button onClick={}>change A</button> */}
    </>
  );
};

export default ChildA;

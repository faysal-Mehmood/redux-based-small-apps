import React from "react";

const ChildB = ({ b, setb }) => {
  return (
    <>
      <p>change value of B</p>
      <input type="text" value={b} onChange={(e) => setb(e.target.value)} />
      {/* <button onClick={}>change A</button> */}
    </>
  );
};

export default ChildB;

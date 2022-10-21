import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { increment, decrement } from "../../store/actions/counter";
import { incrementIfOdd, Count } from "../../store/reducer/counter/counter";

const Index = () => {
  const [name, setname] = useState("raja");
  const count = useSelector(Count);
  const dispatch = useDispatch();
  useEffect(() => {
    setname("faisal");

    setTimeout(() => {
      setname("mehmood");
    }, 3000);
  }, []);

  return (
    <div>
      <Link to="/">Go back</Link>
      <p>
        <span>clicked by {count} times</span>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(incrementIfOdd())}>
          inscrement if odd
        </button>
        <button>increment async</button>
        <h5>This is the useEffect test</h5>
        <p>{name}</p>
      </p>
    </div>
  );
};

export default Index;

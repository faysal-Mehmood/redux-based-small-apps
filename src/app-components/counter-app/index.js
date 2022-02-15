import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { increment, decrement } from '../../store/actions/counter';
import { incrementIfOdd, Count } from '../../store/reducer/counter/counter';

const Index = () => {
  const count = useSelector(Count);
  const dispatch = useDispatch();
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
      </p>
    </div>
  );
};

export default Index;

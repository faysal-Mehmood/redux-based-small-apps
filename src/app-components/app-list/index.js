import React from 'react';
import { Link } from 'react-router-dom';
const Index = () => {
  return (
    <>
      <Link to="/counter">Counter App</Link>
      <Link to="/todolist">To do list</Link>
    </>
  );
};

export default Index;

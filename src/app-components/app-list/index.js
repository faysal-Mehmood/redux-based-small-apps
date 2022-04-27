import React from "react";
import { Link } from "react-router-dom";
const Index = () => {
  return (
    <>
      <Link to="/counter">Counter App</Link>
      <Link to="/todolist">To do list</Link>
      <Link to="/apitodolist">To do list with api</Link>
      <Link to="/blogapp">Blog app</Link>
      <Link to="/blogapi">Blog API</Link>
      <Link to="/layout">Layout</Link>
    </>
  );
};

export default Index;

import React, { useEffect } from "react";
import { fetchUsers } from "../store/actions/apitodolist";
const Users = () => {
  useEffect(() => {
    (async () => {
      const userlist = await fetchUsers();
      console.log("data", userlist);
    })();
  }, []);

  return (
    <>
      <h2>welcome to users</h2>
    </>
  );
};

export default Users;

import React from "react";
import { Link, Outlet } from "react-router-dom";

const Profiles = () => {
  return (
    <div>
      <h3>사용자 목록</h3>
      <Link to="/profiles/user1">user1</Link>|{" "}
      <Link to="/profiles/user2">user2</Link>
      <Outlet />
    </div>
  );
};

export default Profiles;

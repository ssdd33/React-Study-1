import React from "react";
import { useParams } from "react-router-dom";

const data = {
  user1: {
    name: "Harry potter",
    description: "chosen one",
  },
  user2: {
    name: "Albus Percival Wulffric Brian Dumbldore",
    description: "most greatest wizard",
  },
};

const Profile = () => {
  let { username } = useParams();

  const profile = data[username];
  if (!profile) {
    return <div>존재하지 않는 사용자입니다.</div>;
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
};

export default Profile;

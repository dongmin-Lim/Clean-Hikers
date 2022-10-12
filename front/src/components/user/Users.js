import React, { useState } from "react";

import Profile from "./Profile";
import ProfileEdit from "./ProfileEdit";
import UserPostList from "./UserPostList";

import { TabBlock } from "./TabStyle";

function Users() {
  const [user, setUser] = useState({
    nickname: "ohyoonah",
    password: 123456789,
    checkPassword: 123456789,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/e/e9/Felis_silvestris_silvestris_small_gradual_decrease_of_quality.png",
  });

  const [isEdit, setIsEdit] = useState(false);
  const items = [
    { label: "프로필", key: "1", children: ChangeProfile() },
    { label: "작성글", key: "2", children: <UserPostList /> },
  ];

  function ChangeProfile() {
    return isEdit ? (
      <ProfileEdit user={user} setUser={setUser} setIsEdit={setIsEdit} />
    ) : (
      <Profile user={user} setUser={setUser} setIsEdit={setIsEdit} />
    );
  }

  return (
    <>
      <TabBlock items={items} />
    </>
  );
}

export default Users;

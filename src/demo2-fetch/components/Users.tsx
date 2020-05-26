import React from "react";
import { usersState, selectedUserIdState } from "../state";
import { useRecoilValue, useRecoilState } from "recoil";

export default () => {
  const [selectedUserId, setSelectedUserId] = useRecoilState(
    selectedUserIdState
  );
  const users = useRecoilValue(usersState);

  return (
    <div>
      {users.map((user) => (
        <div
          style={{
            fontWeight: selectedUserId == user.id ? 700 : 100,
          }}
          key={user.id}
          onClick={() => setSelectedUserId(user.id)}
        >
          <label>{user.name}</label>
        </div>
      ))}
    </div>
  );
};

import React from "react";
import { useRecoilValue } from "recoil";
import { friendsState } from "../state";

export default () => {
  const friends = useRecoilValue(friendsState);
  return (
    <div>
      {friends.map((friend) => (
        <div key={friend.id}>
          <label>{friend.name}</label>
        </div>
      ))}
    </div>
  );
};

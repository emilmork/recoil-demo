import { atom, selector } from "recoil";
import { fetchUsers, fetchFriends } from "./ajax";

export const selectedUserIdState = atom({
  key: "selectedUser",
  default: null,
});

export const usersState = selector({
  key: "usersState",
  get: async () => {
    return await fetchUsers();
  },
});

export const userFilterState = atom({
  key: "userFilterState",
  default: null,
});

export const friendsState = selector({
  key: "friendsSelector",
  get: async ({ get }) => {
    const users = get(usersState);
    const selectedUser = users.find(
      (user) => user.id == get(selectedUserIdState)
    );

    return await fetchFriends(selectedUser?.friends);
  },
});

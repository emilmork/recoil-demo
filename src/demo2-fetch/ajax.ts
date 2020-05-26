const users = [
  {
    id: 1,
    name: "Emil",
    friends: [2, 3],
  },
  {
    id: 2,
    name: "Pelle",
    friends: [3, 4],
  },
  {
    id: 3,
    name: "Ronny",
    friends: [1, 4],
  },
  {
    id: 4,
    name: "Petter",
    friends: [1, 2, 3],
  },
];

export async function fetchFriends(friends?: number[]) {
  if (!friends || friends.length == 0) return [];

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(users.filter((user) => friends.includes(user.id)));
    }, 3000);
  });
}

export async function fetchUsers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(users);
    }, 3000);
  });
}

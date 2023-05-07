const createUserSlice = (set, get) => ({
  users: [],
  friends: [],

  fetchUsers: async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    set({ users: await res.json() });
  },

  addToFriends: (user) => {
    set({
      friends: [...get().friends, user],
    });
  },

  removeUserFromFriends: (user) => {
    set({
      friends: get().friends.filter((friend) => friend.id !== user.id),
    });
  },
});

export default createUserSlice;

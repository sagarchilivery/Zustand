const createPostSlice = (set, get) => ({
  posts: [],
  postsFromFriends: [],
  fetchUserPosts: async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    set({ posts: await res.json() });
  },

  //   filterFriendPost: (friend) => {
  //     const postsFromFriends = get().posts.filter((post) => post.id === friend.id);
  //   },
  filterFriendPost: () => {
    const postsFromFriends = get().posts.filter((post) =>
      get().friends.find((friend) => friend.id === post.userId)
    );

    set({ postsFromFriends });
  },
});

export default createPostSlice;

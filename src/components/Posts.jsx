import { useEffect } from "react";
import useStore from "../store/useStore";
import useFriendsPostHook from "../hooks/useFriendsPostHook";

export default function Posts() {
  const fetchUserPosts = useStore((state) => state.fetchUserPosts);
  // const posts = useStore((state) => state.posts);
  const postsFromFriends = useFriendsPostHook();

  useEffect(() => {
    fetchUserPosts();
  }, [fetchUserPosts]);

  return (
    <>
      <h3>Posts</h3>
      {/* {posts.map((post) => { */}
      {postsFromFriends.map((post) => {
        return (
          <div key={post.id}>
            {post.title}
            {/* {post.body} */}
          </div>
        );
      })}
    </>
  );
}

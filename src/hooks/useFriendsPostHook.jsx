import { useEffect } from "react";
import useStore from "../store/useStore";

export default function useFriendsPostHook() {
  const friends = useStore((state) => state.friends);
  const posts = useStore((state) => state.posts);
  const postsFromFriends = useStore((state) => state.postsFromFriends);
  const filterPostsByFriends = useStore((state) => state.filterFriendPost);

  useEffect(() => {
    filterPostsByFriends();
  }, [filterPostsByFriends, friends, posts]);

  return postsFromFriends;
}

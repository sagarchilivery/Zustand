import { useEffect } from "react";
import useStore from "../store/useStore";

export default function Users() {
  const users = useStore((state) => state.users);
  const fetchUsers = useStore((state) => state.fetchUsers);
  const addToFriends = useStore((state) => state.addToFriends);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <ul>
      {users.map((user) => (
        <li onClick={() => addToFriends(user)} key={user.id}>
          {user.name}
        </li>
      ))}
    </ul>
  );
}

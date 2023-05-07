import useStore from "../store/useStore";

export default function Friends() {
  const friends = useStore((state) => state.friends);
  const removeUserFromFriends = useStore(
    (state) => state.removeUserFromFriends
  );

  return (
    <div>
      <h4>Friends ({friends.length})</h4>
      <div>
        {friends.map((friend) => {
          return (
            <div key={friend.id}>
              <span>{friend.name}</span>
              <button
                onClick={() => {
                  removeUserFromFriends(friend);
                }}
              >
                X
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

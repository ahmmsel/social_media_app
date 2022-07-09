import React from "react";
import Avatar from "../UI/Avatar";

const users = [
  {
    id: 1,
    username: "jackdoe",
    picture: "https://source.unsplash.com/random/400x400",
  },
  {
    id: 2,
    username: "koop",
    picture: "https://source.unsplash.com/random/400x600",
  },
  {
    id: 3,
    username: "tom",
    picture: "https://source.unsplash.com/random/400x300",
  },
  {
    id: 4,
    username: "peter",
    picture: "https://source.unsplash.com/random/400x800",
  },
];

function Suggestions() {
  return (
    <div className="flex flex-col space-y-4 text-sm">
      <h1 className="font-medium">suggestions for you</h1>
      <div className="flex flex-col space-y-6">
        {users.map((user) => (
          <div key={user.id} className="flex justify-between">
            <div className="flex items-center space-x-2">
              <Avatar
                src={user.picture}
                alt={user.username}
                className="w-10 h-10 md:w-14 md:h-14"
              />
              <p className="truncate font-medium">{user.username}</p>
            </div>
            <button className="lowercase font-bold text-pink-800 transition-all duration-200 hover:text-pink-700">
              follow
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Suggestions;

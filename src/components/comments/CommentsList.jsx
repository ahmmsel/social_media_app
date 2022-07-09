import React from "react";
import Comment from "./Comment";

function CommentsList({ list }) {
  return (
    <div className="space-y-6">
      <h1 className="uppercase font-semibold">comments</h1>
      <div className="flex flex-col space-y-8">
        {list?.map((item) => (
          <Comment key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}

export default CommentsList;

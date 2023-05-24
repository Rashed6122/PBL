import { useState } from "react";
import Ratingbox from "./rating_box";

function Comment({ text, date, rating, contractState, id }) {
  let [comment, setComment] = useState({ text, date, rating, contractState, id });

  return (
    <div className="commentbox">
      <Ratingbox
        rating={comment.rating}
        state={comment}
        setState={setComment}
        voteName={"rating"}
        contractState = {contractState}
      />

      <div className="commentdata">
        <span>{date}</span>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Comment;

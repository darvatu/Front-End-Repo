import { deleteApi } from "./Api";
import { useState } from "react";

export default function CommentCard({comment, authorCommentAllowedToBeDeleted}) {
  const [error, setError] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  const handleDelete = () => {
    deleteApi(`/api/comments/${comment.comment_id}`)
      .then(() => {
        setIsDeleted(true);
      })
      .catch(() => {
        setError(true);
      });
  };

  if (error) return <p>Something went wrong loading articles...</p>;
  if (isDeleted) return <p>Comment deleted successfully!</p>;

  return (
    <section className="comment">
      <p><span>Comment:</span> {comment.body}</p>
      <p><span>Created at:</span> {new Date(comment.created_at).toLocaleString()}</p>
      <p><span>Author:</span> {comment.author}</p>
      <p><span>Votes:</span> {comment.votes}</p>
      {comment.author === authorCommentAllowedToBeDeleted && (
        <button onClick={handleDelete}>Delete</button>
      )}
    </section>
  );
}

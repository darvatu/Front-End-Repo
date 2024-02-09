import { deleteApi } from "./Api";
import { useState } from "react";

export default function CommentCard({comment, authorCommentAllowedToBeDeleted, onDelete}) {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = () => {
    setIsLoading(true);
    deleteApi(`/api/comments/${comment.comment_id}`)
      .then(() => {
        window.alert("Comment deleted successfully!");
        setIsLoading(false);
        onDelete(comment.comment_id);
      })
      .catch(() => {
        setError(true);
        setIsLoading(false);
      });
  };

  if (error) return <p>Something went wrong loading articles...</p>;
  if (isLoading) return <p>Deleting comment...</p>;

  return (
    <section className="comment">
      <p><span>Comment:</span> {comment.body}</p>
      <p><span>Created at:</span> {new Date(comment.created_at).toLocaleString()}</p>
      <p><span>Author:</span> {comment.author}</p>
      <p><span>Votes:</span> {comment.votes}</p>
      {comment.author === authorCommentAllowedToBeDeleted && (
        <button onClick={handleDelete} disabled={isLoading}>Delete</button>
      )}
    </section>
  );
}
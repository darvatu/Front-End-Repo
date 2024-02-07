export default function CommentCard({ comment }) {
  return (
<section className="comment">
  <p><span>Comment:</span> {comment.body}</p>
  <p><span>Created at:</span> {new Date(comment.created_at).toLocaleString()}</p>
  <p><span>Author:</span> {comment.author}</p>
  <p><span>Votes:</span> {comment.votes}</p>
</section>
  );
}

import { getApi } from "../Api";
import { useEffect, useState } from "react";
import CommentCard from "../CommentCard";
import { useParams } from "react-router-dom";

export default function ListComments() {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const { id_article } = useParams();

  useEffect(() => {
    getApi(`/api/articles/${id_article}/comments`)
      .then((response) => {
        setComments(response.comments);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
        setError(true);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong loading articles...</p>;

  return (
    <div>
      {comments.map((element) => {
        console.log(element);
        return <CommentCard key={element.id} comment={element} />;
      })}
    </div>
  );
}

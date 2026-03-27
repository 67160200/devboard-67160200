import { useState, useEffect } from "react";
import LoadingSpinner from "./LoadingSpinner";

function CommentList({ postId }) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchComments() {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
        );

        if (!res.ok) {
          throw new Error("ดึงความคิดเห็นไม่สำเร็จ");
        }

        const data = await res.json();
        setComments(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchComments();
  }, [postId]);

  if (loading) return <LoadingSpinner />;
  if (error) return <div style={{ color: "red" }}>{error}</div>;

  return (
    <div style={{ marginTop: "1rem" }}>
      <h4>ความคิดเห็น ({comments.length})</h4>

      {comments.map((comment) => (
        <div
          key={comment.id}
          style={{
            borderTop: "1px solid #e2e8f0",
            padding: "0.5rem 0",
          }}
        >
          <strong>{comment.name}</strong>
          <p style={{ margin: "0.25rem 0" }}>{comment.body}</p>
        </div>
      ))}
    </div>
  );
}

export default CommentList;
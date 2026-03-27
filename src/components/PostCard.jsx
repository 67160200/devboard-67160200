import { useState } from "react";
import CommentList from "./CommentList";

function PostCard({ post, isFavorite, onToggleFavorite }) {
  const [showComments, setShowComments] = useState(false);

  return (
    <div
      style={{
        border: "1px solid #e2e8f0",
        borderRadius: "8px",
        padding: "1rem",
        marginBottom: "1rem",
        background: "white",
      }}
    >
      <h3 style={{ margin: "0 0 0.5rem", color: "#1e40af" }}>
        {post.title}
      </h3>

      <p
        style={{ margin: "0 0 0.75rem", color: "#4a5568", lineHeight: 1.6 }}
      >
        {post.body}
      </p>

      {/* ปุ่มถูกใจ */}
      <button
        onClick={onToggleFavorite}
        style={{
          border: "none",
          background: "transparent",
          cursor: "pointer",
          fontSize: "1rem",
          color: isFavorite ? "#dc2626" : "#718096",
        }}
      >
        {isFavorite ? "❤️ ถูกใจแล้ว" : "🤍 ถูกใจ"}
      </button>

      {/* ปุ่มดูความคิดเห็น */}
      <button
        onClick={() => setShowComments((prev) => !prev)}
        style={{
          marginLeft: "1rem",
          border: "1px solid #e2e8f0",
          padding: "0.25rem 0.75rem",
          borderRadius: "4px",
          cursor: "pointer",
          background: "white",
        }}
      >
        {showComments ? "▲ ซ่อนความคิดเห็น" : "▼ ดูความคิดเห็น"}
      </button>

      {/* แสดง CommentList เมื่อกด */}
      {showComments && <CommentList postId={post.id} />}
    </div>
  );
}

export default PostCard;

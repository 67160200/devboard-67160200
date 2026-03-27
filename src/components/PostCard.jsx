function PostCard({ title, body, isFavorite, onToggleFavorite }) {
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
        {title}
      </h3>

      <p style={{ margin: "0 0 0.75rem", color: "#4a5568", lineHeight: 1.6 }}>
        {body}
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
    </div>
  );
}

export default PostCard;
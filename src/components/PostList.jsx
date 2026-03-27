import { useState, useEffect } from "react";
import PostCard from "./PostCard";
import LoadingSpinner from "./LoadingSpinner";

function PostList({ favorites, onToggleFavorite }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  // ✅ แยก fetch logic ออกมา
  async function fetchPosts() {
    try {
      setLoading(true);
      setError(null);

      const res = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );

      if (!res.ok) throw new Error("ดึงข้อมูลไม่สำเร็จ");

      const data = await res.json();
      setPosts(data.slice(0, 20));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  // ✅ โหลดครั้งแรกตอน mount
  useEffect(() => {
    fetchPosts();
  }, []);

  const filtered = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <LoadingSpinner />;

  if (error)
    return (
      <div style={{ color: "red", padding: "1rem" }}>
        เกิดข้อผิดพลาด: {error}
      </div>
    );

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1rem",
        }}
      >
        <h3 style={{ margin: 0 }}>โพสต์ล่าสุด</h3>

        {/* ✅ ปุ่มโหลดใหม่ */}
        <button
          onClick={fetchPosts}
          style={{
            border: "1px solid #e2e8f0",
            padding: "0.25rem 0.75rem",
            borderRadius: "6px",
            cursor: "pointer",
            background: "white",
          }}
        >
          🔄 โหลดใหม่
        </button>
      </div>

      <input
        type="text"
        placeholder="ค้นหาโพสต์..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: "0.5rem",
          marginBottom: "1rem",
        }}
      />

      {filtered.length === 0 && <p>ไม่พบโพสต์ที่ค้นหา</p>}

      {filtered.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          isFavorite={favorites.includes(post.id)}
          onToggleFavorite={() => onToggleFavorite(post.id)}
        />
      ))}
    </div>
  );
}

export default PostList;
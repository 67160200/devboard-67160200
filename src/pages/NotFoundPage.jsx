import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div
      style={{
        minHeight: "70vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "4rem", marginBottom: "1rem" }}>404</h1>

      <p style={{ fontSize: "1.2rem", color: "#718096" }}>
        ไม่พบหน้าที่คุณต้องการ
      </p>

      <Link
        to="/"
        style={{
          marginTop: "1.5rem",
          color: "#1e40af",
          textDecoration: "none",
          fontSize: "1rem",
        }}
      >
        ← กลับหน้าหลัก
      </Link>
    </div>
  );
}

export default NotFoundPage;
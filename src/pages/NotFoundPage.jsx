// import Link จาก react-router-dom
// ใช้สำหรับสร้างลิงก์นำทางไปหน้าอื่น (ไม่ reload หน้า)
import { Link } from "react-router-dom";

// Component สำหรับหน้า 404 (ไม่พบหน้าเว็บ)
function NotFoundPage() {
  return (
    // div ครอบทั้งหมดของหน้า 404
    // ใช้ flex จัดให้อยู่กึ่งกลางทั้งแนวตั้งและแนวนอน
    <div
      style={{
        minHeight: "70vh",            // ความสูงขั้นต่ำของหน้า
        display: "flex",              // ใช้ flex layout
        flexDirection: "column",      // เรียงองค์ประกอบจากบนลงล่าง
        justifyContent: "center",     // จัดกึ่งกลางแนวตั้ง
        alignItems: "center",          // จัดกึ่งกลางแนวนอน
        textAlign: "center",           // จัดข้อความให้อยู่กลาง
      }}
    >
      {/* หัวข้อหลัก แสดงรหัส error */}
      <h1 style={{ fontSize: "4rem", marginBottom: "1rem" }}>
        404
      </h1>

      {/* ข้อความอธิบายว่าไม่พบหน้า */}
      <p style={{ fontSize: "1.2rem", color: "#718096" }}>
        ไม่พบหน้าที่คุณต้องการ
      </p>

      {/* ลิงก์กลับไปหน้าหลัก */}
      {/* ใช้ Link แทน <a> เพื่อไม่ reload หน้า */}
      <Link
        to="/"                         // ไปหน้า root (หน้าหลัก)
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

// export component เพื่อให้ไฟล์อื่น import ไปใช้ได้
export default NotFoundPage;
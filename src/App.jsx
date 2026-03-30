// import ตัวที่จำเป็นจาก react-router-dom
// - BrowserRouter: ครอบแอปเพื่อเปิดใช้งาน routing
// - Routes: กล่องรวม route ทั้งหมด
// - Route: กำหนด path → component
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import FavoritesProvider จาก Context
// ใช้สำหรับแชร์ state favorites ให้ทั้งแอป
import { FavoritesProvider } from "./context/FavoritesContext";

// import component หลัก
import Navbar from "./components/Navbar";

// import page components
import HomePage from "./pages/HomePage";
import PostDetailPage from "./pages/PostDetailPage";
import ProfilePage from "./pages/ProfilePage";
import FavoritesPage from "./pages/FavoritesPage";
import NotFoundPage from "./pages/NotFoundPage";

// component หลักของแอป
function App() {
  return (
    // ครอบทั้งแอปด้วย FavoritesProvider
    // เพื่อให้ทุกหน้าเข้าถึง favorites ได้ผ่าน Context
    <FavoritesProvider>

      {/* BrowserRouter เปิดระบบ routing ของ React */}
      <BrowserRouter>

        {/* Navbar แสดงทุกหน้า (วางนอก Routes) */}
        <Navbar />

        {/* กล่องรวม route ทั้งหมด */}
        <Routes>

          {/* หน้าแรก */}
          <Route path="/" element={<HomePage />} />

          {/* หน้าแสดงรายละเอียดโพสต์ */}
          {/* :id คือ route parameter */}
          <Route path="/posts/:id" element={<PostDetailPage />} />

          {/* หน้าโปรไฟล์ผู้ใช้ */}
          <Route path="/profile" element={<ProfilePage />} />

          {/* หน้ารวมโพสต์ที่ถูกใจ */}
          <Route path="/favorites" element={<FavoritesPage />} />

          {/* ถ้าไม่ match route ไหนเลย → 404 */}
          <Route path="*" element={<NotFoundPage />} />

        </Routes>
      </BrowserRouter>
    </FavoritesProvider>
  );
}

// export App เพื่อให้ index.jsx เรียกใช้งาน
export default App;
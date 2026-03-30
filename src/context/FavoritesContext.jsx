// import ฟังก์ชันหลักจาก React
// - createContext: สร้าง Context สำหรับแชร์ข้อมูล
// - useContext: ดึงข้อมูลจาก Context
// - useState: จัดการ state
// - useEffect: ทำ side effect (เช่น sync localStorage)
import { createContext, useContext, useState, useEffect } from "react";

// สร้าง Context สำหรับเก็บข้อมูล favorites (❤️)
const FavoritesContext = createContext();

// Provider Component
// มีหน้าที่เตรียม state และส่งให้ component ลูกทั้งหมด
export function FavoritesProvider({ children }) {

  // สร้าง state favorites
  // ใช้ function ใน useState เพื่ออ่านค่าเริ่มต้นจาก localStorage แค่ครั้งเดียว
  const [favorites, setFavorites] = useState(() => {
    try {
      // อ่านค่า favorites ที่เคยบันทึกไว้
      const saved = localStorage.getItem("favorites");

      // ถ้ามีข้อมูล → แปลงจาก string เป็น array
      // ถ้าไม่มี → ใช้ array ว่าง
      return saved ? JSON.parse(saved) : [];
    } catch {
      // กันกรณี JSON.parse พัง
      return [];
    }
  });

  // ฟังก์ชัน toggle ถูกใจ
  // ถ้ามี postId อยู่แล้ว → เอาออก
  // ถ้ายังไม่มี → เพิ่มเข้าไป
  function toggleFavorite(postId) {
    setFavorites((prev) =>
      prev.includes(postId)
        ? prev.filter((id) => id !== postId) // ยกเลิกถูกใจ
        : [...prev, postId]                  // เพิ่มถูกใจ
    );
  }

  // ทุกครั้งที่ favorites เปลี่ยน
  // จะบันทึกค่าใหม่ลง localStorage
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // ส่งค่า favorites และ toggleFavorite
  // ให้ component ลูกทั้งหมดผ่าน Context
  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

// Custom Hook
// ใช้เรียก Context ได้ง่ายขึ้น
// แทนที่จะต้องเขียน useContext(FavoritesContext) ยาว ๆ
export function useFavorites() {
  return useContext(FavoritesContext);
}
import { useEffect, useState } from "react";
import LeftColumn from "./layout/LeftColumn";
import MobileNav from "./layout/MobileNav";
import RightColumn from "./layout/RightColumn";
import Body from "./layout/Body";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Archive from "./Archieve";

export default function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (ev) => {
      setMousePosition({
        x: ev.clientX + window.scrollX,
        y: ev.clientY + window.scrollY,
      });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="relative bg-slate-900">
              <div
                className="pointer-events-none fixed top-0 inset-0 z-30 transition duration-300 lg:absolute w-full bg-red-100"
                style={{
                  background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
                }}
              ></div>
              <Body>
                <LeftColumn />
                <RightColumn />
              </Body>
            </div>
          }
        />
        <Route
          path="/archive"
          element={
            <div className="relative bg-slate-900">
              <div
                className="pointer-events-none fixed top-0 inset-0 z-30 transition duration-300 lg:absolute w-full bg-red-100"
                style={{
                  background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
                }}
              ></div>
             
                <Archive />
              
            </div>
          }
        />
        <Route path="*" />
      </Routes>
    </Router>
  );
}

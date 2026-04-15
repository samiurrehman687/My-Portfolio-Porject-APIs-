import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function MaintenanceChecker() {
  const navigate = useNavigate();
  const location = useLocation();
  const API = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const check = async () => {
      try {
        const res = await fetch(`${API}/api/maintenance/`, {
          cache: "no-store"
        });

        const data = await res.json();

        console.log("MAINTENANCE:", data);

        if (data.maintenance === true) {
          if (location.pathname !== "/underconstruction") {
            navigate("/underconstruction", { replace: true });
          }
        } else {
          if (location.pathname === "/underconstruction") {
            navigate("/", { replace: true });
          }
        }

      } catch (err) {
        console.log(err);
      }
    };

    check();
  }, [location.pathname]); // 🔥 IMPORTANT FIX

  return null;
}
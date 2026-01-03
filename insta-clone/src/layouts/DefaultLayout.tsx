import { useStyletron } from "baseui";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import BottomNav from "../components/BottomNavigation";
import { useState } from "react";

export default function DefaultLayout() {
  const [css, $theme] = useStyletron();
  const [activeDrawer, setActiveDrawer] = useState<"none" | "search" | "notifications" | "messages">("none");

  const isCondensed = activeDrawer !== "none";
  const condensedWidth = "72px";
  const expandedWidth = "250px";

  return (
    <div
      className={css({
        display: "flex",
        width: "100%",
        minHeight: "100vh",
      })}
    >
      {/* Sidebar Container */}
      <div
        className={css({
          width: isCondensed ? condensedWidth : expandedWidth,
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          borderRight: `1px solid ${$theme.colors.mono400}`,
          backgroundColor: "#fff",
          zIndex: 10,
          display: "none",
          transition: "width 0.3s ease",
          [$theme.mediaQuery.medium]: {
            display: "block",
            width: condensedWidth,
          },
          [$theme.mediaQuery.large]: {
            width: isCondensed ? condensedWidth : expandedWidth,
          },
        })}
      >
        <Sidebar activeDrawer={activeDrawer} setActiveDrawer={setActiveDrawer} />
      </div>

      {/* Main Content Area */}
      <div
        className={css({
          display: "flex",
          flexDirection: "column",
          width: "100%",
          flex: 1,
          transition: "margin-left 0.3s ease",
          [$theme.mediaQuery.medium]: {
            marginLeft: condensedWidth,
          },
          [$theme.mediaQuery.large]: {
            marginLeft: isCondensed ? condensedWidth : expandedWidth,
          },
        })}
      >
        <div
          className={css({
            flex: "1 0 auto",
            width: "100%",
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 20px",
          })}
        >
          <Outlet />
        </div>

        <Footer />
      </div>

      <BottomNav />
    </div>
  );
}

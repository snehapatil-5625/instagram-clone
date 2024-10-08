import { useStyletron } from "baseui";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import BottomNav from "../components/BottomNavigation";

export default function DefaultLayout() {
  const [css, $theme] = useStyletron();
  return (
    <div
      className={css({
        display: "flex",
        width: "100%",
        position: "relative",
        height: "100%",
        paddingLeft: 0,
        paddingRight: 0,
        [$theme.mediaQuery.medium]: {
          paddingLeft: $theme.sizing.scale500,
          paddingRight: $theme.sizing.scale500,
        },
      })}
    >
      <div
        className={css({
          width: "250px",
          height: "100%",
          position: "fixed",
        })}
      >
        <Sidebar />
      </div>
      <div
        className={css({
          width: "1px",
          height: "100vh",
          backgroundColor: $theme.colors.mono500,
          position: "fixed",
          left: "0px",
          top: 0,
          zIndex: "-1",
          [$theme.mediaQuery.medium]: {
            left: "80px",
          },
          [$theme.mediaQuery.large]: {
            left: "280px",
          },
        })}
      ></div>
      <div
        className={css({
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          minHeight: "100vh",
          paddingLeft: $theme.sizing.scale500,
          paddingRight: $theme.sizing.scale500,
          paddingTop: $theme.sizing.scale800,
          paddingBottom: $theme.sizing.scale800,
          [$theme.mediaQuery.medium]: {
            width: "calc(100% - 80px)",
            marginLeft: "80px",
            marginRight: $theme.sizing.scale200,
          },
          [$theme.mediaQuery.large]: {
            marginLeft: "280px",
            width: "calc(100% - 280px)",
          },
        })}
      >
        <div
          className={css({
            flex: " 1 0 auto",
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

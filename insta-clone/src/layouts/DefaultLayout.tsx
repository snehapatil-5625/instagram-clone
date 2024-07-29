import { useStyletron } from "baseui";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

export default function DefaultLayout() {
  const [css, $theme] = useStyletron();
  return (
    <div
      className={css({
        display: "flex",
        width: "100%",
        position: "relative",
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
          width: "100%",
          paddingRight: $theme.sizing.scale800,
          paddingTop: $theme.sizing.scale800,
          paddingBottom: $theme.sizing.scale800,
          [$theme.mediaQuery.medium]: {
            width: "calc(100% - 80px)",
            marginLeft: "80px",
          },
          [$theme.mediaQuery.large]: {
            marginLeft: "280px",
            width: "calc(100% - 280px)",
          },
        })}
      >
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

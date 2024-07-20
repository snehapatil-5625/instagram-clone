import { useStyletron } from "baseui";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

export default function DefaultLayout() {
  const [css, $theme] = useStyletron();
  return (
    <div
      className={css({
        display: "flex",
        width: "100%",
        position: "relative",
        paddingLeft: $theme.sizing.scale500,
        paddingRight: $theme.sizing.scale500,
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
          left: "280px",
          top: 0,
        })}
      ></div>
      <div
        className={css({
          width: "calc(100% - 280px)",
          marginLeft: "280px",
          paddingLeft: $theme.sizing.scale800,
          paddingRight: $theme.sizing.scale800,
          paddingTop: $theme.sizing.scale800,
          paddingBottom: $theme.sizing.scale800,
        })}
      >
        <Outlet />
      </div>
    </div>
  );
}

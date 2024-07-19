import { useStyletron } from "baseui";
import Sidebar from "../components/Sidebar";

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
          width: "200px",
          height: "100%",
          position: "fixed",
        })}
      >
        <Sidebar />
      </div>
      <div
        className={css({
          width: "100%",
        })}
      ></div>
    </div>
  );
}

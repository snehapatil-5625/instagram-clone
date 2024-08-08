import { useStyletron } from "baseui";
import ProfileInfo from "../../components/ProfileInfo";
import Highlights from "../../components/Hightlights";
export default function ProfilePage() {
  const [css, $theme] = useStyletron();
  return (
    <div
      className={css({
        paddingTop: $theme.sizing.scale500,
        paddingBottom: $theme.sizing.scale500,
        paddingLeft: $theme.sizing.scale2400,
        paddingRight: $theme.sizing.scale2400,
      })}
    >
      <div
        className={css({
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "800px",
          margin: "0 auto",
        })}
      >
        <img
          className={css({
            width: "160px",
            height: "100%",
          })}
          src="/src/assets/profile.png"
        />
        <div>
          <ProfileInfo />
        </div>
      </div>
      <Highlights label={"New"} />
      <div
        className={css({
          width: "100%  ",
          borderBottom: `1px solid ${$theme.colors.mono400}`,
          paddingTop: $theme.sizing.scale500,
          paddingBottom: $theme.sizing.scale500,
          position: "relative",
        })}
      ></div>
    </div>
  );
}

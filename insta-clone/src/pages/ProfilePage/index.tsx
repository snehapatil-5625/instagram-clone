import { useStyletron } from "baseui";
import ProfileInfo from "../../components/ProfileInfo";
import Highlights from "../../components/Hightlights";
import FollowersDesign from "../../components/FollowersDesign";
export default function ProfilePage() {
  const [css, $theme] = useStyletron();
  return (
    <div
      className={css({
        paddingTop: $theme.sizing.scale500,
        paddingBottom: $theme.sizing.scale500,
        width: "100%",
        [$theme.mediaQuery.medium]: {
          width: "calc(100% - 20px)",
        },
        [$theme.mediaQuery.large]: {
          width: "calc(100% - 160px)",
          paddingLeft: "70px",
        },
      })}
    >
      <div
        className={css({
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "800px",
          margin: "0 auto",
          gap: "20px",
          //  flexWrap: "wrap",
          whiteSpace: "wrap",
          [$theme.mediaQuery.large]: {
            justifyContent: "space-between",
          },
        })}
      >
        <img
          className={css({
            maxWidth: "80px",
            height: "100%",
            [$theme.mediaQuery.medium]: {
              maxWidth: "120px",
            },
            [$theme.mediaQuery.large]: {
              maxWidth: "160px",
            },
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
          display: "block",
          width: "100%",
          [$theme.mediaQuery.medium]: {
            display: "none",
          },
        })}
      >
        <FollowersDesign />
      </div>
      <div
        className={css({
          width: "calc(100% + 24px)",
          borderBottom: `1px solid ${$theme.colors.mono400}`,
          paddingTop: $theme.sizing.scale500,
          paddingBottom: $theme.sizing.scale500,
          [$theme.mediaQuery.medium]: {
            width: "100%",
          },
        })}
      ></div>
    </div>
  );
}

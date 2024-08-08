import * as React from "react";
import { useStyletron } from "baseui";

export default function BottomNav() {
  const [css, $theme] = useStyletron();
  // const navigate = useNavigate();
  // const handleNavigation = (path: any) => {
  //   navigate(path);
  // };

  return (
    <div
      className={css({
        width: "100%",
        height: "30px",
        display: "flex",
        position: "fixed",
        bottom: 0,
        alignItems: "flex-end",
        paddingTop: $theme.sizing.scale500,
        paddingBottom: $theme.sizing.scale500,
        borderTop: `1px solid ${$theme.colors.mono500}`,
        justifyContent: "space-between",
        [$theme.mediaQuery.medium]: {
          display: "none",
        },
      })}
    >
      {nav.map((item) => (
        <div
          className={css({
            display: "flex",
            marginLeft: $theme.sizing.scale500,
            marginRight: $theme.sizing.scale500,
          })}
        >
          <div
            className={css({
              display: "flex",
              position: "relative",
              transition: "transform 0.3s ease-in-out",
              ":hover": {
                transform: "scale(1.1)",
                cursor: "pointer",
              },
            })}
          >
            <img
              className={css({
                width: "25px",
                height: "25px",
              })}
              src={item.icon}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

const nav = [
  {
    icon: "/src/assets/home.png",
    path: "/",
  },
  {
    icon: "/src/assets/compass.png",
    path: "/explore",
  },
  {
    icon: "/src/assets/reel.png",
    path: "/reels",
  },
  {
    icon: "/src/assets/add.png",
    path: "",
  },
  {
    icon: "/src/assets/chat-new.png",
    path: "/direct/index",
  },
  {
    icon: "/src/assets/profile.png",
    path: "/profile",
  },
];

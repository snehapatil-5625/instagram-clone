import { useStyletron } from "baseui";
import { Button } from "baseui/button";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const [css, $theme] = useStyletron();
  const navigate = useNavigate();

  const handleNavigation = (path: any) => {
    if (path) {
      navigate(path);
    } else {
      console.error("Navigation path is undefined");
    }
  };
  return (
    <div
      className={css({
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        alignItems: "flex-start",
        width: "100%",
        justifyContent: "flex-start",
        paddingTop: $theme.sizing.scale1000,
        paddingBottom: $theme.sizing.scale1000,
      })}
    >
      <img
        className={css({
          width: "60%",
          marginLeft: $theme.sizing.scale500,
          marginRight: $theme.sizing.scale500,
          marginBottom: $theme.sizing.scale700,
        })}
        src="/src/assets/insta_logo1.png"
      />

      {Items.map((item) => (
        <div
          className={css({
            display: "flex",
            marginLeft: $theme.sizing.scale200,
            marginRight: $theme.sizing.scale200,
            alignItems: "center",
            gap: "20px",
            width: "100%",
          })}
        >
          <Button
            onClick={() => handleNavigation(item.path)}
            kind="tertiary"
            overrides={{
              BaseButton: {
                style: {
                  width: "100%",
                  textTransform: "capitalize",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "20px",
                  ...$theme.typography.LabelLarge,
                  justifyContent: "flex-start",
                },
              },
            }}
          >
            {item.icon && (
              <img
                className={css({
                  width: "25px",
                  height: "25px",
                })}
                src={item.icon}
                alt="image"
              />
            )}
            {item.name}
          </Button>
        </div>
      ))}
      <div
        className={css({
          width: "100%",
          display: "flex",
          alignItems: "center",
          marginLeft: $theme.sizing.scale200,
          marginRight: $theme.sizing.scale200,
          marginTop: $theme.sizing.scale800,
        })}
      >
        <Button
          overrides={{
            BaseButton: {
              style: {
                width: "100%",
                textTransform: "capitalize",
                display: "flex",
                alignItems: "flex-start",
                gap: "20px",
                ...$theme.typography.LabelLarge,
                justifyContent: "flex-start",
              },
            },
          }}
          kind="tertiary"
        >
          <img
            className={css({
              width: "25px",
              height: "25px",
            })}
            src="/src/assets/hamburger.png"
          />
          More
        </Button>
      </div>
    </div>
  );
}

const Items = [
  {
    icon: "/src/assets/home.png",
    name: "home",
    path: "/",
  },
  {
    icon: "/src/assets/loupe.png",
    name: "search",
    path: "/",
  },
  {
    icon: "/src/assets/compass.png",
    name: "explore",
    path: "/explore",
  },
  {
    icon: "/src/assets/reel.png",
    name: "reels",
    path: "/reels",
  },
  {
    icon: "/src/assets/chat-new.png",
    name: "messages",
    path: "/direct/index",
  },
  {
    icon: "/src/assets/favorite.png",
    name: "notifications",
  },
  {
    icon: "/src/assets/add.png",
    name: "create",
  },
  {
    icon: "/src/assets/profile.png",
    name: "profile",
    path: "/profile",
  },
];

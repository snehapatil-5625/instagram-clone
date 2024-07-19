import { useStyletron } from "baseui";
import { Button } from "baseui/button";

export default function Sidebar() {
  const [css, $theme] = useStyletron();
  return (
    <div
      className={css({
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        alignItems: "flex-start",
        width: "100%",
      })}
    >
      {Items.map((item) => (
        <div
          className={css({
            display: "flex",
            marginLeft: $theme.sizing.scale500,
            marginRight: $theme.sizing.scale500,
            alignItems: "flex-start",
            gap: "20px",
          })}
        >
          <Button
            kind="tertiary"
            overrides={{
              BaseButton: {
                style: {
                  width: "100%",
                  textTransform: "capitalize",
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  ...$theme.typography.LabelLarge,
                },
              },
            }}
          >
            {item.icon && (
              <img
                className={css({
                  width: "25px",
                  height: "25px",
                  fontWeight: 600,
                })}
                src={item.icon}
                alt="image"
              />
            )}
            {item.name}
          </Button>
        </div>
      ))}
    </div>
  );
}

const Items = [
  {
    icon: "/src/assets/home.png",
    name: "home",
  },
  {
    icon: "/src/assets/search.png",
    name: "search",
  },
  {
    icon: "/src/assets/compass.png",
    name: "explore",
  },
  {
    icon: "/src/assets/igtv.png",
    name: "reels",
  },
  {
    icon: "/src/assets/chat.png",
    name: "messages",
  },
  {
    icon: "/src/assets/like.png",
    name: "notifications",
  },
  {
    icon: "/src/assets/add.png",
    name: "create",
  },
  {
    icon: "/src/assets/user.png",
    name: "profile",
  },
];

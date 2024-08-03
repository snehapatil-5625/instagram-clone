import { useStyletron } from "baseui";
import { Button } from "baseui/button";

export default function MoreOptions() {
  const [css, $theme] = useStyletron();
  const Divider = () => (
    <div
      className={css({
        width: "calc(100% + 30px)",
        height: "4px",
        backgroundColor: $theme.colors.mono300,
        margin: "10px -15px",
      })}
    />
  );
  return (
    <div>
      <div
        className={css({
          height: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        })}
      >
        {items.map((item, index) => (
          <div
            className={css({
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              flexGrow: 1,
              justifyContent: "flex-start",
              alignItems: "flex-start",
            })}
          >
            {item.name === "Threads" && <Divider />}
            <Button
              overrides={{
                BaseButton: {
                  style: {
                    textTransform: "capitalize",
                    width: "100%",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "20px",
                    ...$theme.typography.LabelMedium,
                    justifyContent: "flex-start",
                    fontWeight: 500,
                  },
                },
              }}
              kind="tertiary"
            >
              {item.icon && (
                <img
                  className={css({
                    width: "20px",
                    height: "20px",
                    transition: "transform 0.3s ease-in-out",
                    ":hover": {
                      transform: "scale(1.1)",
                    },
                  })}
                  src={item.icon}
                />
              )}

              <span
                className={css({
                  display: "flex",
                })}
              >
                {item.name}
              </span>
            </Button>
            {item.name === "Threads" && <Divider />}
          </div>
        ))}
      </div>
    </div>
  );
}

const items = [
  {
    name: "Settings",
    icon: "/src/assets/settings.png",
    path: "",
  },
  {
    name: "Your activity",
    icon: "/src/assets/activity.png",
    path: "",
  },
  {
    name: "Saved",
    icon: "/src/assets/bookmark.png",
    path: "",
  },
  {
    name: "Switch appearance",
    icon: "/src/assets/history.png",
    path: "",
  },
  {
    name: "Report a problem",
    icon: "/src/assets/problem.png",
    path: "",
  },
  {
    name: "Threads",
    icon: "/src/assets/",
    path: "",
  },
  {
    name: "Switch accounts",
    path: "",
  },
  {
    name: "Log out",
    path: "",
  },
];

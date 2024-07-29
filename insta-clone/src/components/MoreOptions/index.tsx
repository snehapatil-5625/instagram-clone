import { useStyletron } from "baseui";
import { Button } from "baseui/button";

export default function MoreOptions() {
  const [css, $theme] = useStyletron();
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
            <Button
              overrides={{
                BaseButton: {
                  style: {
                    textTransform: "capitalize",
                    display: "none",
                    alignItems: "flex-start",
                    gap: "20px",
                    ...$theme.typography.LabelLarge,
                    justifyContent: "flex-start",
                    [$theme.mediaQuery.medium]: {
                      width: "100%",
                      display: "flex",
                    },
                  },
                },
              }}
              kind="tertiary"
            >
              {item.icon && (
                <img
                  className={css({
                    width: "25px",
                    height: "25px",
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
                  display: "none",
                  [$theme.mediaQuery.large]: {
                    display: "flex",
                  },
                })}
              >
                {item.name}
              </span>
            </Button>
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

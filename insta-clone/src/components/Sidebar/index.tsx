import { useStyletron } from "baseui";
import { Button } from "baseui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MoreOptions from "../MoreOptions";
import { PLACEMENT, StatefulPopover } from "baseui/popover";
import NotificationDrawer from "../NotificationDrawer";
import CreateMenu from "../CreateMenu";

export default function Sidebar() {
  const [css, $theme] = useStyletron();
  const [isOpen, setIsOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();

  const handleNavigation = (path: any) => {
    if (path) {
      navigate(path);
    } else {
      console.error("Navigation path is undefined");
    }
  };

  const handleNotificationsClick = () => {
    setIsDrawerOpen(true);
  };

  return (
    <div
      className={css({
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        alignItems: "flex-start",
        width: "100%",
        justifyContent: "space-between",
        height: "calc(100% - 40px)",
        paddingTop: $theme.sizing.scale1000,
        paddingBottom: $theme.sizing.scale1000,
      })}
    >
      <div
        className={css({
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        })}
      >
        <img
          className={css({
            width: "50%",
            marginLeft: $theme.sizing.scale500,
            marginRight: $theme.sizing.scale500,
            marginBottom: $theme.sizing.scale700,
            display: "none",
            [$theme.mediaQuery.large]: {
              display: "flex",
            },
          })}
          src="/src/assets/insta_logo1.png"
        />

        <div
          className={css({
            width: "100%",
            display: "flex",
            alignItems: "center",
            marginLeft: $theme.sizing.scale200,
            marginRight: $theme.sizing.scale200,
            marginBottom: $theme.sizing.scale700,
            [$theme.mediaQuery.large]: {
              display: "none",
            },
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
                    display: "flex",
                  },
                  [$theme.mediaQuery.large]: {
                    display: "none",
                  },
                },
              },
            }}
            kind="tertiary"
          >
            <img
              className={css({
                width: "25px",
                height: "25px",
                transition: "transform 0.3s ease-in-out",
                ":hover": {
                  transform: "scale(1.1)",
                },
              })}
              src="/src/assets/instagram.png"
            />
          </Button>
        </div>
        <div
          className={css({
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            [$theme.mediaQuery.large]: {
              alignItems: "center",
              width: "100%",
            },
          })}
        >
          {navigation.map((item, index) => (
            <div
              key={index}
              className={css({
                display: "flex",
                marginLeft: $theme.sizing.scale200,
                marginRight: $theme.sizing.scale200,
                marginTop: $theme.sizing.scale200,
                alignItems: "center",
                [$theme.mediaQuery.large]: {
                  width: "100%",
                },
              })}
            >
              <Button
                size="compact"
                onClick={() => {
                  if (item.name === "notifications") {
                    handleNotificationsClick();
                  } else if (item.name === "create") {
                    setIsMenuOpen(!isMenuOpen);
                  } else {
                    handleNavigation(item.path);
                  }
                }}
                kind="tertiary"
                overrides={{
                  BaseButton: {
                    style: {
                      textTransform: "capitalize",
                      display: "none",
                      alignItems: "flex-start",
                      gap: "20px",
                      ...$theme.typography.LabelLarge,
                      justifyContent: "flex-start",
                      paddingTop: $theme.sizing.scale500,
                      paddingBottom: $theme.sizing.scale500,
                      [$theme.mediaQuery.medium]: {
                        display: "flex",
                        width: "100%",
                      },
                    },
                  },
                }}
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
                    alt="image"
                  />
                )}
                <span
                  className={css({
                    display: "none",
                    [$theme.mediaQuery.large]: {
                      display: "inline",
                    },
                  })}
                >
                  {" "}
                  {item.name}
                </span>
              </Button>
            </div>
          ))}
        </div>
      </div>
      <div
        className={css({
          display: "flex",
          alignItems: "center",
          [$theme.mediaQuery.large]: {
            width: "100%",
          },
        })}
      >
        <StatefulPopover
          content={() => (
            <>
              <MoreOptions />
            </>
          )}
          placement={PLACEMENT.top}
          returnFocus
          autoFocus
          overrides={{
            Inner: {
              style: {
                width: "280px",
                height: "100%",
                backgroundColor: "#FFF",
                padding: "10px",
                borderRadius: "20px",
              },
            },
            Body: {
              style: {
                marginLeft: $theme.sizing.scale500,
                borderRadius: "20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
              },
            },
          }}
        >
          <Button
            onClick={() => {
              setIsOpen(!isOpen);
            }}
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
            <img
              className={css({
                width: "25px",
                height: "25px",
                transition: "transform 0.3s ease-in-out",
                ":hover": {
                  transform: "scale(1.1)",
                },
              })}
              src="/src/assets/hamburger.png"
            />
            <span
              className={css({
                display: "none",
                [$theme.mediaQuery.large]: {
                  display: "flex",
                },
              })}
            >
              {" "}
              More
            </span>
          </Button>
        </StatefulPopover>
      </div>
      {isOpen && <MoreOptions />}
      <NotificationDrawer isOpen={isDrawerOpen} setIsOpen={setIsDrawerOpen} />
      {isMenuOpen && <CreateMenu />}
    </div>
  );
}

const navigation = [
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

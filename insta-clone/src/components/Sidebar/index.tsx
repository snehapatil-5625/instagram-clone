import { useStyletron } from "baseui";
import { Button } from "baseui/button";
import { useNavigate } from "react-router-dom";
import MoreOptions from "../MoreOptions";
import { PLACEMENT, StatefulPopover } from "baseui/popover";
import NotificationDrawer from "../NotificationDrawer";
import SearchDrawer from "../SearchDrawer";
import MessagesDrawer from "../MessagesDrawer";
import CreateMenu from "../CreateMenu";
import { Avatar } from "baseui/avatar";
import PostModel from "../PostModal";
import LiveVideoModal from "../LiveVideoModal";
import CreateAdsModal from "../CreateAdsModal";
import LoginModal from "../LoginModal";
import { useState } from "react";

interface SidebarProps {
  activeDrawer: "none" | "search" | "notifications" | "messages";
  setActiveDrawer: (drawer: "none" | "search" | "notifications" | "messages") => void;
}

export default function Sidebar({ activeDrawer, setActiveDrawer }: SidebarProps) {
  const [css, $theme] = useStyletron();
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);
  const [isLiveVideoModalOpen, setIsLiveVideoModalOpen] = useState(false);
  const [isAdsModalOpen, setIsAdsModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const navigate = useNavigate();

  const handleNavigation = (path: any) => {
    setActiveDrawer("none");
    if (path) {
      navigate(path);
    } else {
      console.error("Navigation path is undefined");
    }
  };

  const isCondensed = activeDrawer !== "none";

  return (
    <div
      className={css({
        display: "flex",
        flexDirection: "column",
        alignItems: isCondensed ? "center" : "flex-start",
        width: "100%",
        height: "100%",
        padding: isCondensed ? "20px 0px" : "20px 12px",
        boxSizing: "border-box",
        backgroundColor: "#fff",
        transition: "width 0.3s ease, padding 0.3s ease",
        zIndex: 10,
        position: "relative",
      })}
    >
      {/* Logo Section */}
      <div
        className={css({
          padding: isCondensed ? "12px 0" : "12px",
          marginBottom: "20px",
          width: "100%",
          display: "flex",
          justifyContent: isCondensed ? "center" : "flex-start",
          boxSizing: "border-box",
        })}
      >
        {!isCondensed ? (
          <img
            className={css({
              width: "103px",
              display: "block",
              [$theme.mediaQuery.medium]: { display: "none" },
              [$theme.mediaQuery.large]: { display: "block" },
            })}
            src="/src/assets/insta_logo1.png"
            alt="Instagram"
          />
        ) : null}
        <img
          className={css({
            width: "24px",
            display: isCondensed ? "block" : "none",
            [$theme.mediaQuery.medium]: { display: isCondensed ? "block" : "none" },
            [$theme.mediaQuery.large]: { display: isCondensed ? "block" : "none" },
          })}
          src="/src/assets/instagram.png"
          alt="Logo"
        />
        {!isCondensed && (
          <img
            className={css({
              width: "24px",
              display: "none",
              [$theme.mediaQuery.medium]: { display: "block" },
              [$theme.mediaQuery.large]: { display: "none" },
            })}
            src="/src/assets/instagram.png"
            alt="Logo"
          />
        )}
      </div>

      {/* Navigation Section */}
      <div className={css({ flex: 1, width: "100%", display: "flex", flexDirection: "column", alignItems: "center" })}>
        {navigation.map((item, index) => (
          <div key={index} className={css({ margin: "4px", width: "100%", display: "flex", justifyContent: "center" })}>
            {item.name.toLowerCase() === "create" ? (
              <StatefulPopover
                content={({ close }) => (
                  <CreateMenu
                    onClose={close}
                    onPostClick={() => {
                      setIsPostModalOpen(true);
                      close();
                    }}
                    onLiveVideoClick={() => {
                      setIsLiveVideoModalOpen(true);
                      close();
                    }}
                    onAdsClick={() => {
                      setIsAdsModalOpen(true);
                      close();
                    }}
                  />
                )}
                placement={PLACEMENT.bottom}
                overrides={{
                  Inner: { style: { borderRadius: "12px", padding: "0", overflow: "hidden" } },
                }}
              >
                <Button
                  onClick={() => setActiveDrawer("none")}
                  kind="tertiary"
                  overrides={{
                    BaseButton: {
                      style: {
                        width: isCondensed ? "48px" : "100%",
                        height: isCondensed ? "48px" : "auto",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: isCondensed ? "center" : "flex-start",
                        gap: "16px",
                        padding: isCondensed ? "0" : "12px",
                        borderRadius: isCondensed ? "50%" : "8px",
                        ":hover": { backgroundColor: "rgba(0, 0, 0, 0.05)" },
                      },
                    },
                  }}
                >
                  <div className={css({ position: "relative", display: "flex", alignItems: "center" })}>
                    <img
                      className={css({
                        width: "24px",
                        height: "24px",
                        transition: "transform 0.2s ease",
                        transform: activeDrawer === item.name.toLowerCase() ? "scale(1.1)" : "none",
                      })}
                      src={item.icon}
                      alt={item.name}
                    />
                  </div>
                  {!isCondensed && (
                    <span
                      className={css({
                        fontSize: "16px",
                        fontWeight: activeDrawer === item.name.toLowerCase() ? 700 : 400,
                        display: "none",
                        [$theme.mediaQuery.large]: { display: "inline" },
                      })}
                    >
                      {item.name}
                    </span>
                  )}
                </Button>
              </StatefulPopover>
            ) : (
              <Button
                onClick={() => {
                  const itemName = item.name.toLowerCase();
                  if (itemName === "search") {
                    setActiveDrawer(activeDrawer === "search" ? "none" : "search");
                  } else if (itemName === "notifications") {
                    setActiveDrawer(activeDrawer === "notifications" ? "none" : "notifications");
                  } else if (itemName === "messages") {
                    setActiveDrawer(activeDrawer === "messages" ? "none" : "messages");
                  } else {
                    handleNavigation(item.path);
                  }
                }}
                kind="tertiary"
                overrides={{
                  BaseButton: {
                    style: {
                      width: isCondensed ? "48px" : "100%",
                      height: isCondensed ? "48px" : "auto",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: isCondensed ? "center" : "flex-start",
                      gap: "16px",
                      padding: isCondensed ? "0" : "12px",
                      borderRadius: isCondensed ? "50%" : "8px",
                      border:
                        activeDrawer === item.name.toLowerCase()
                          ? `1px solid ${$theme.colors.mono400}`
                          : "none",
                      ":hover": { backgroundColor: "rgba(0, 0, 0, 0.05)" },
                    },
                  },
                }}
              >
                <div className={css({ position: "relative", display: "flex", alignItems: "center" })}>
                  {item.name.toLowerCase() === "profile" ? (
                    <Avatar name="profile" size="24px" src="/src/assets/profile.png" />
                  ) : (
                    <img
                      className={css({
                        width: "24px",
                        height: "24px",
                        transition: "transform 0.2s ease",
                        transform: activeDrawer === item.name.toLowerCase() ? "scale(1.1)" : "none",
                      })}
                      src={item.icon}
                      alt={item.name}
                    />
                  )}
                  {item.name.toLowerCase() === "notifications" && (
                    <div
                      className={css({
                        position: "absolute",
                        top: "-2px",
                        right: "-4px",
                        backgroundColor: "#ff3040",
                        color: "#fff",
                        borderRadius: "50%",
                        fontWeight: 700,
                        border: "2px solid #fff",
                        width: "8px",
                        height: "8px",
                      })}
                    >
                    </div>
                  )}
                </div>
                {!isCondensed && (
                  <span
                    className={css({
                      fontSize: "16px",
                      fontWeight: activeDrawer === item.name.toLowerCase() ? 700 : 400,
                      display: "none",
                      [$theme.mediaQuery.large]: { display: "inline" },
                    })}
                  >
                    {item.name}
                  </span>
                )}
              </Button>
            )}
          </div>
        ))}
      </div>

      {/* Bottom Section */}
      <div
        className={css({
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        })}
      >
        <div
          className={css({
            width: "100%",
            borderTop: isCondensed ? "none" : `1px solid ${$theme.colors.mono300}`,
            paddingTop: "12px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          })}
        >
          {/* More Button */}
          <StatefulPopover
            content={({ close }) => (
              <MoreOptions
                onSwitchAccount={() => {
                  setIsLoginModalOpen(true);
                  close();
                }}
              />
            )}
            placement={PLACEMENT.topRight}
            overrides={{
              Inner: { style: { borderRadius: "12px", padding: "8px", width: "266px" } },
            }}
          >
            <div className={css({ width: "100%", display: "flex", justifyContent: "center", marginBottom: "12px" })}>
              <Button
                kind="tertiary"
                overrides={{
                  BaseButton: {
                    style: {
                      width: isCondensed ? "48px" : "100%",
                      height: isCondensed ? "48px" : "auto",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: isCondensed ? "center" : "flex-start",
                      gap: "16px",
                      padding: isCondensed ? "0" : "12px",
                      borderRadius: isCondensed ? "50%" : "8px",
                      ":hover": { backgroundColor: "rgba(0, 0, 0, 0.05)" },
                    },
                  },
                }}
              >
                <img src="/src/assets/hamburger.png" style={{ width: "24px" }} alt="More" />
                {!isCondensed && (
                  <span
                    className={css({
                      fontSize: "16px",
                      display: "none",
                      [$theme.mediaQuery.large]: { display: "inline" },
                    })}
                  >
                    More
                  </span>
                )}
              </Button>
            </div>
          </StatefulPopover>

          {/* Also from Meta */}
          <div className={css({ width: "100%", display: "flex", justifyContent: "center", marginBottom: "12px" })}>
            <Button
              kind="tertiary"
              overrides={{
                BaseButton: {
                  style: {
                    width: isCondensed ? "48px" : "100%",
                    height: isCondensed ? "48px" : "auto",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: isCondensed ? "center" : "flex-start",
                    gap: "16px",
                    padding: isCondensed ? "0" : "12px",
                    borderRadius: isCondensed ? "50%" : "8px",
                    ":hover": { backgroundColor: "rgba(0, 0, 0, 0.05)" },
                  },
                },
              }}
            >
              <img src="/src/assets/infinity-logo.png" style={{ width: "24px" }} alt="Meta" />
              {!isCondensed && (
                <span
                  className={css({
                    fontSize: "16px",
                    display: "none",
                    [$theme.mediaQuery.large]: { display: "inline" },
                  })}
                >
                  Also from Meta
                </span>
              )}
            </Button>
          </div>
        </div>
      </div>

      <SearchDrawer isOpen={activeDrawer === "search"} onClose={() => setActiveDrawer("none")} />
      <NotificationDrawer
        isOpen={activeDrawer === "notifications"}
        onClose={() => setActiveDrawer("none")}
      />
      <MessagesDrawer isOpen={activeDrawer === "messages"} onClose={() => setActiveDrawer("none")} />

      <PostModel
        isOpen={isPostModalOpen}
        close={() => setIsPostModalOpen(false)}
      />

      <LiveVideoModal
        isOpen={isLiveVideoModalOpen}
        onClose={() => setIsLiveVideoModalOpen(false)}
      />

      <CreateAdsModal
        isOpen={isAdsModalOpen}
        onClose={() => setIsAdsModalOpen(false)}
      />

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
    </div>
  );
}

const navigation = [
  { icon: "/src/assets/home.png", name: "Home", path: "/" },
  { icon: "/src/assets/loupe.png", name: "Search" },
  { icon: "/src/assets/compass.png", name: "Explore", path: "/explore" },
  { icon: "/src/assets/reel.png", name: "Reels", path: "/reels" },
  { icon: "/src/assets/chat-new.png", name: "Messages" },
  { icon: "/src/assets/favorite.png", name: "Notifications" },
  { icon: "/src/assets/add.png", name: "Create" },
  { icon: "/src/assets/timeline.png", name: "Dashboard", path: "/dashboard" },
  { name: "profile", path: "/profile" },
];

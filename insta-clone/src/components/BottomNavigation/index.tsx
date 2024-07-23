import * as React from "react";
import { BottomNavigation, NavItem } from "baseui/bottom-navigation";
import { useStyletron } from "baseui";

export default function BottomNav() {
  const [activeKey, setActiveKey] = React.useState<React.Key>(0);
  const [css, $theme] = useStyletron();
  return (
    <div>
      <BottomNavigation
        overrides={{
          Root: {
            style: {
              position: "absolute",
              bottom: 0,
              display: "flex",
              [$theme.mediaQuery.medium]: {
                display: "none",
              },
            },
          },
        }}
        activeKey={activeKey}
        onChange={({ activeKey }) => setActiveKey(activeKey)}
      >
        {nav.map((item) => (
          <div>{item.icon}</div>
        ))}
      </BottomNavigation>
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

import { useStyletron } from "baseui";
import { Drawer } from "baseui/drawer";
import React from "react";

export default function NotificationDrawer() {
  const [css, $theme] = useStyletron();
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div>
      <Drawer
        anchor="left"
        isOpen={isOpen}
        autoFocus
        onClose={() => setIsOpen(false)}
      >
        <div>drawer content</div>
      </Drawer>
    </div>
  );
}

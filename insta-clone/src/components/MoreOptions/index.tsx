import { useStyletron } from "baseui";
import { Button } from "baseui/button";
import {
  Settings,
  Activity,
  Bookmark,
  Sun,
  AlertCircle,
  Disc,
  ExternalLink
} from "lucide-react";

interface MoreOptionsProps {
  onSwitchAccount?: () => void;
}

export default function MoreOptions({ onSwitchAccount }: MoreOptionsProps) {
  const [css] = useStyletron();

  const primaryItems = [
    { name: "Settings", icon: <Settings size={20} /> },
    { name: "Your activity", icon: <Activity size={20} /> },
    { name: "Saved", icon: <Bookmark size={20} /> },
    { name: "Switch appearance", icon: <Sun size={20} /> },
    { name: "Report a problem", icon: <AlertCircle size={20} /> },
  ];

  const businessItem = {
    name: "Meta Business Suite",
    icon: <Disc size={20} />,
    hasExternalIcon: true
  };

  const accountItems = [
    {
      name: "Switch accounts",
      onClick: onSwitchAccount
    },
    { name: "Log out", isDistinct: true },
  ];

  const ItemRow = ({ item }: { item: any }) => (
    <Button
      onClick={item.onClick}
      kind="tertiary"
      overrides={{
        BaseButton: {
          style: {
            width: "100%",
            justifyContent: "space-between",
            display: "flex",
            alignItems: "center",
            padding: "16px",
            backgroundColor: item.isDistinct ? "#f2f2f2" : "transparent",
            borderRadius: item.isDistinct ? "12px" : "8px",
            margin: item.isDistinct ? "8px 0" : "0",
            ":hover": {
              backgroundColor: item.isDistinct ? "#e6e6e6" : "#fafafa",
            },
          },
        },
      }}
    >
      <div className={css({ display: "flex", alignItems: "center", gap: "12px" })}>
        {item.icon && <div className={css({ display: "flex", alignItems: "center" })}>{item.icon}</div>}
        <span className={css({ fontSize: "14px", fontWeight: 400, color: "#000" })}>
          {item.name}
        </span>
      </div>
      {item.hasExternalIcon && <ExternalLink size={16} color="#8e8e8e" />}
    </Button>
  );

  return (
    <div className={css({
      width: "266px",
      backgroundColor: "#fff",
      display: "flex",
      flexDirection: "column",
      padding: "8px",
    })}>
      {/* Top Section */}
      <div className={css({ display: "flex", flexDirection: "column" })}>
        {primaryItems.map((item, idx) => (
          <ItemRow key={idx} item={item} />
        ))}
      </div>

      {/* Divider */}
      <div className={css({
        height: "1px",
        backgroundColor: "#efefef",
        margin: "8px 0"
      })} />

      {/* Middle Section */}
      <ItemRow item={businessItem} />

      {/* Another Divider-like space or small divider */}
      <div className={css({
        height: "1px",
        backgroundColor: "#efefef",
        margin: "8px 0"
      })} />

      {/* Bottom Section */}
      <div className={css({ display: "flex", flexDirection: "column" })}>
        {accountItems.map((item, idx) => (
          <ItemRow key={idx} item={item} />
        ))}
      </div>
    </div>
  );
}

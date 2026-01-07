import { useStyletron } from "baseui";
import {
  SquarePlay,
  Radio,
  TrendingUp,
  Sparkles,
} from "lucide-react";
interface CreateMenuProps {
  onPostClick?: () => void;
  onLiveVideoClick?: () => void;
  onAdsClick?: () => void;
  onClose?: () => void;
}

export default function CreateMenu({ onPostClick, onLiveVideoClick, onAdsClick, onClose }: CreateMenuProps) {
  const [css] = useStyletron();

  const handleItemClick = (onClick?: () => void) => {
    if (onClick) onClick();
    if (onClose) onClose();
  };

  const menuItems = [
    {
      label: "Post",
      icon: <SquarePlay size={20} />,
      onClick: onPostClick
    },
    {
      label: "Live video",
      icon: <Radio size={20} />,
      onClick: onLiveVideoClick
    },
    {
      label: "Ad",
      icon: <TrendingUp size={20} />,
      onClick: onAdsClick
    },
    { label: "AI", icon: <Sparkles size={18} /> },
  ];

  return (
    <div className={css({
      display: "flex",
      flexDirection: "column",
      width: "200px",
      backgroundColor: "#fff",
    })}>
      {/* Items */}
      {menuItems.map((item, index) => (
        <div
          key={index}
          onClick={() => handleItemClick(item.onClick)}
          className={css({
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "12px 16px",
            cursor: "pointer",
            borderBottom: index === menuItems.length - 1 ? "none" : "1px solid #efefef",
            ":hover": {
              backgroundColor: "#fafafa",
            },
          })}
        >
          <span className={css({ fontSize: "14px", fontWeight: 400 })}>{item.label}</span>
          <div className={css({ color: "#262626" })}>
            {item.icon}
          </div>
        </div>
      ))}
    </div>
  );
}

import { useStyletron } from "baseui";
import {
  SquarePlay,
  Radio,
  TrendingUp,
  Sparkles,
  Plus
} from "lucide-react";
import PostModel from "../PostModal";
import { useState } from "react";

interface CreateMenuProps {
  onClose?: () => void;
}

export default function CreateMenu({ onClose }: CreateMenuProps) {
  const [css] = useStyletron();
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);

  const handleItemClick = (onClick?: () => void) => {
    if (onClick) onClick();
    if (onClose) onClose();
  };

  const menuItems = [
    {
      label: "Post",
      icon: <SquarePlay size={20} />,
      onClick: () => setIsPostModalOpen(true)
    },
    { label: "Live video", icon: <Radio size={20} /> },
    { label: "Ad", icon: <TrendingUp size={20} /> },
    { label: "AI", icon: <Sparkles size={18} /> },
  ];

  return (
    <div className={css({
      display: "flex",
      flexDirection: "column",
      width: "266px",
      backgroundColor: "#fff",
    })}>
      {/* Header */}
      <div className={css({
        padding: "12px 16px",
        display: "flex",
        alignItems: "center",
        gap: "12px",
        borderBottom: "1px solid #efefef"
      })}>
        <Plus size={24} />
        <span className={css({ fontSize: "16px", fontWeight: 600 })}>Create</span>
      </div>

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

      {isPostModalOpen && (
        <PostModel
          isOpen={isPostModalOpen}
          close={() => {
            setIsPostModalOpen(false);
            if (onClose) onClose();
          }}
        />
      )}
    </div>
  );
}

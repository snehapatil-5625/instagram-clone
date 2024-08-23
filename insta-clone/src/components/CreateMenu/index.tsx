import { useStyletron } from "baseui";
import { StatefulMenu } from "baseui/menu";
import { useEffect, useRef, useState } from "react";
import PostModel from "../PostModal";

export default function CreateMenu() {
  const [css, $theme] = useStyletron();
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleItemClick = (itemLabel: string) => {
    setSelectedItem(itemLabel);
    setIsModalOpen(true);
  };
  function close() {
    setIsModalOpen(false);
  }

  return (
    <>
      <div
        ref={menuRef}
        className={css({
          position: "absolute",
          zIndex: 1000,
          left: "120px",
          bottom: "60px",
          [$theme.mediaQuery.medium]: {
            bottom: "65px",
            left: 0,
          },
        })}
      >
        <StatefulMenu
          items={List}
          overrides={{
            List: {
              style: {
                width: "200px",
                padding: 0,
                margin: 0,
                borderRadius: "5px",
                ":hover": {
                  cursor: "pointer",
                },
              },
            },
            ListItem: {
              component: (props) => (
                <>
                  <div
                    onClick={() => handleItemClick(props.item.label)}
                    className={css({
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "10px 15px",
                      ":hover": {
                        backgroundColor: $theme.colors.backgroundSecondary,
                      },
                    })}
                  >
                    <span
                      className={css({
                        fontSize: "16px",
                      })}
                    >
                      {props.item.label}
                    </span>

                    <img
                      className={css({
                        width: "25px",
                        height: "25px",
                      })}
                      src={props.item.icon}
                    />
                  </div>
                  {props.item.label === "Post" && (
                    <div
                      className={css({
                        borderBottom: `1px solid ${$theme.colors.backgroundTertiary}`,
                        width: "100%",
                      })}
                    />
                  )}
                </>
              ),
            },
          }}
        />
        {isModalOpen && <PostModel isOpen={isModalOpen} close={close} />}
      </div>
    </>
  );
}

const List = [
  {
    label: "Post",
    icon: "/src/assets/media.png",
  },
  {
    label: "Live Video",
    icon: "/src/assets/live.png",
  },
];

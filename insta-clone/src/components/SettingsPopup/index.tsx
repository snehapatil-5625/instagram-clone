import { useStyletron } from "baseui";
import { Modal } from "baseui/modal";

export default function SettingsPopup({
  isOpen,
  close,
}: {
  isOpen: any;
  close: any;
}) {
  const [css, $theme] = useStyletron();
  return (
    <div>
      <Modal
        overrides={{
          Dialog: {
            style: {
              maxWidth: "400px",
            },
          },
        }}
        onClose={close}
        isOpen={isOpen}
      >
        <div
          className={css({
            width: "100%",
          })}
        >
          {List.map((item, index) => (
            <div
              className={css({
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderBottom:
                  index < List.length - 1
                    ? `1px solid ${$theme.colors.mono500}`
                    : "none",
                paddingTop: $theme.sizing.scale550,
                paddingBottom: $theme.sizing.scale550,
                cursor: "pointer",
              })}
            >
              <div
                className={css({
                  fontSize: "15px",
                  fontWeight: 400,
                })}
              >
                {item.name}
              </div>
            </div>
          ))}
        </div>
      </Modal>
    </div>
  );
}

const List = [
  {
    name: "Apps and websites",
    href: "",
  },
  {
    name: "Professional account",
    href: "",
  },
  {
    name: "QR code",
    href: "",
  },
  {
    name: "Notifications",
    href: "",
  },
  {
    name: "Settings and privacy",
    href: "",
  },
  {
    name: "Supervision",
    href: "",
  },
  {
    name: "Embed",
    href: "",
  },
  {
    name: "Log Out",
    href: "",
  },
  {
    name: "Cancel",
    href: "",
  },
];

import { useStyletron } from "baseui";
import { Modal, ModalBody, ROLE } from "baseui/modal";
import { Image as ImageIcon } from "lucide-react";
import { useRef } from "react";

export default function PostModel({
  isOpen,
  close,
}: {
  isOpen: boolean;
  close: () => void;
}) {
  const [css] = useStyletron();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSelectClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      console.log("File selected:", file.name);
      // Further implementation would go here (e.g., preview)
    }
  };

  return (
    <Modal
      onClose={close}
      isOpen={isOpen}
      animate
      autoFocus
      role={ROLE.dialog}
      overrides={{
        Root: {
          style: {
            zIndex: 1000,
          },
        },
        Dialog: {
          style: {
            width: "560px",
            height: "600px",
            maxWidth: "95vw",
            maxHeight: "95vh",
            borderRadius: "12px",
            backgroundColor: "#fff",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
          },
        },
      }}
    >
      <div className={css({ display: "flex", flexDirection: "column", height: "100%" })}>
        {/* Header */}
        <div
          className={css({
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "10px 16px",
            borderBottom: "1px solid #efefef",
            position: "relative",
            minHeight: "42px",
          })}
        >
          <span className={css({ fontSize: "16px", fontWeight: 600 })}>
            Create new post
          </span>
        </div>

        {/* Body */}
        <ModalBody
          className={css({
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px",
            margin: 0,
          })}
        >
          <div className={css({ marginBottom: "16px", color: "#262626" })}>
            <ImageIcon size={96} strokeWidth={1} />
          </div>
          <span className={css({
            fontSize: "20px",
            fontWeight: 400,
            marginBottom: "24px",
            textAlign: "center",
            color: "#262626"
          })}>
            Drag photos and videos here
          </span>

          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            style={{ display: "none" }}
            accept="image/*,video/*"
          />

          <button
            onClick={handleSelectClick}
            className={css({
              backgroundColor: "#0095f6",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              padding: "7px 16px",
              fontSize: "14px",
              fontWeight: 600,
              cursor: "pointer",
              transition: "background-color 0.2s",
              ":hover": {
                backgroundColor: "#1877f2",
              },
              ":active": {
                opacity: 0.7,
              },
            })}
          >
            Select from computer
          </button>
        </ModalBody>
      </div>
    </Modal>
  );
}

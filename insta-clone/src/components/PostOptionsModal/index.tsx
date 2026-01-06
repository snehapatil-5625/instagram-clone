import { useStyletron } from "baseui";
import { Modal, ModalBody, ROLE } from "baseui/modal";

interface PostOptionsModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function PostOptionsModal({ isOpen, onClose }: PostOptionsModalProps) {
    const [css] = useStyletron();

    const options = [
        { label: "Report", color: "#ed4956", fontWeight: 700 },
        { label: "Not interested", color: "#ed4956", fontWeight: 700 },
        { label: "Go to post" },
        { label: "Share to..." },
        { label: "Copy link" },
        { label: "Embed" },
        { label: "About this account" },
        { label: "Cancel", isCancel: true },
    ];

    return (
        <Modal
            onClose={onClose}
            isOpen={isOpen}
            animate
            autoFocus
            size="default"
            role={ROLE.dialog}
            overrides={{
                Dialog: {
                    style: {
                        width: "400px",
                        borderRadius: "12px",
                        backgroundColor: "#fff",
                        overflow: "hidden",
                    },
                },
            }}
        >
            <ModalBody $style={{ margin: 0, padding: 0 }}>
                <div className={css({ display: "flex", flexDirection: "column" })}>
                    {options.map((option, index) => (
                        <div
                            key={index}
                            onClick={onClose}
                            className={css({
                                padding: "16px",
                                textAlign: "center",
                                fontSize: "14px",
                                cursor: "pointer",
                                fontWeight: option.fontWeight || 400,
                                color: option.color || "#000",
                                borderBottom: index === options.length - 1 ? "none" : "1px solid #efefef",
                                ":active": {
                                    backgroundColor: "#fafafa",
                                },
                                ":hover": {
                                    backgroundColor: "#fafafa"
                                }
                            })}
                        >
                            {option.label}
                        </div>
                    ))}
                </div>
            </ModalBody>
        </Modal>
    );
}

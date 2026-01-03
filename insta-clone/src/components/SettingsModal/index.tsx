import { useStyletron } from "baseui";
import { Modal, ModalBody, ROLE } from "baseui/modal";

interface SettingsModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function SettingsModal({ isOpen, onClose }: SettingsModalProps) {
    const [css] = useStyletron();

    const options = [
        { label: "Apps and websites", onClick: onClose },
        { label: "Professional account", onClick: onClose },
        { label: "QR code", onClick: onClose },
        { label: "Notifications", onClick: onClose },
        { label: "Settings and privacy", onClick: onClose },
        { label: "Meta Verified", onClick: onClose },
        { label: "Supervision", onClick: onClose },
        { label: "Login activity", onClick: onClose },
        { label: "Log Out", onClick: onClose, color: "#ed4956", fontWeight: 700 },
        { label: "Cancel", onClick: onClose },
    ];

    return (
        <Modal
            onClose={onClose}
            closeable={false}
            isOpen={isOpen}
            animate
            autoFocus
            size="default"
            role={ROLE.dialog}
            overrides={{
                Root: {
                    style: {
                        zIndex: 10,
                    },
                },
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
            <ModalBody
                overrides={{
                    Block: {
                        style: {
                            margin: 0,
                            padding: 0,
                        }
                    }
                }}
            >
                <div className={css({ display: "flex", flexDirection: "column" })}>
                    {options.map((option, index) => (
                        <div
                            key={index}
                            onClick={option.onClick}
                            className={css({
                                padding: "16px",
                                borderBottom: index === options.length - 1 ? "none" : "1px solid #efefef",
                                textAlign: "center",
                                cursor: "pointer",
                                fontSize: "14px",
                                color: option.color || "#262626",
                                fontWeight: option.fontWeight || 400,
                                ":active": {
                                    backgroundColor: "#fafafa",
                                },
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

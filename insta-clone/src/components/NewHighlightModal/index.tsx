import { useStyletron } from "baseui";
import { Modal, ModalBody, ROLE } from "baseui/modal";
import { Input } from "baseui/input";
import { X } from "lucide-react";
import { useState } from "react";

interface NewHighlightModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function NewHighlightModal({ isOpen, onClose }: NewHighlightModalProps) {
    const [css] = useStyletron();
    const [name, setName] = useState("");

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
                        display: "flex",
                        flexDirection: "column",
                    },
                },
            }}
        >
            <ModalBody>
                <div className={css({
                    display: "flex",
                    flexDirection: "column",
                    margin: 0,
                    padding: 0
                })}>
                    {/* Header */}
                    <div
                        className={css({
                            display: "flex",
                            alignItems: "center",
                            padding: "12px 16px",
                            borderBottom: "1px solid #efefef",
                            position: "relative"
                        })}
                    >
                        <X
                            size={24}
                            cursor="pointer"
                            onClick={onClose}
                        />
                        <span className={css({
                            position: "absolute",
                            left: "50%",
                            transform: "translateX(-50%)",
                            fontSize: "16px",
                            fontWeight: 600
                        })}>
                            New Highlight
                        </span>
                    </div>

                    {/* Input Area */}
                    <div className={css({ padding: "16px" })}>
                        <Input
                            value={name}
                            onChange={(e) => setName(e.currentTarget.value)}
                            placeholder="Highlight Name"
                            overrides={{
                                Root: {
                                    style: {
                                        backgroundColor: "#fafafa",
                                        border: "1px solid #dbdbdb",
                                        borderRadius: "8px",
                                    },
                                },
                                Input: {
                                    style: {
                                        backgroundColor: "transparent",
                                        fontSize: "14px",
                                    },
                                },
                                InputContainer: {
                                    style: {
                                        backgroundColor: "transparent",
                                    },
                                },
                            }}
                        />
                    </div>

                    {/* Footer */}
                    <div
                        className={css({
                            display: "flex",
                            justifyContent: "center",
                            padding: "20px 16px",
                            borderTop: "1px solid #efefef",
                            cursor: "pointer",
                            ":active": {
                                backgroundColor: "#fafafa"
                            }
                        })}
                    >
                        <span className={css({
                            fontSize: "14px",
                            fontWeight: 600,
                            color: name.trim() ? "#0095f6" : "#8e8e8e"
                        })}>
                            Next
                        </span>
                    </div>
                </div>
            </ModalBody>
        </Modal>
    );
}

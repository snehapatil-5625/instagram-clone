import { useStyletron } from "baseui";
import { Modal, ModalBody, ROLE } from "baseui/modal";
import { Input } from "baseui/input";
import { Select } from "baseui/select";
import { Button } from "baseui/button";
import { Radio } from "lucide-react";
import { useState } from "react";

interface LiveVideoModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function LiveVideoModal({ isOpen, onClose }: LiveVideoModalProps) {
    const [css] = useStyletron();
    const [title, setTitle] = useState("");
    const [audience, setAudience] = useState<any>([]);

    const audienceOptions = [
        { label: "Public", id: "public" },
        { label: "Practice", id: "practice" },
    ];

    return (
        <Modal
            onClose={onClose}
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
                        height: "auto",
                        maxWidth: "95vw",
                        maxHeight: "95vh",
                        borderRadius: "15px",
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
                        minHeight: "42px",
                    })}
                >
                    <span className={css({ fontSize: "16px", fontWeight: 600 })}>
                        Live video
                    </span>
                </div>

                {/* Body */}
                <ModalBody
                    className={css({
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        padding: "32px 64px",
                        margin: 0,
                    })}
                >
                    <div className={css({
                        marginBottom: "24px",
                        color: "#262626",
                        width: "100px",
                        height: "100px",
                        borderRadius: "50%",
                        border: "2px solid #262626",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    })}>
                        <Radio size={48} strokeWidth={1} />
                    </div>

                    <h2 className={css({
                        fontSize: "24px",
                        fontWeight: 600,
                        marginBottom: "12px",
                        textAlign: "center",
                        margin: 0
                    })}>
                        Add live video details
                    </h2>

                    <p className={css({
                        fontSize: "14px",
                        color: "#737373",
                        textAlign: "center",
                        marginBottom: "24px",
                        lineHeight: "1.4"
                    })}>
                        Go live by connecting to your choice of streaming software. To get started, add a title and select the audience for your live video.
                    </p>

                    <div className={css({ width: "100%", marginBottom: "16px" })}>
                        <Input
                            value={title}
                            onChange={(e) => setTitle(e.currentTarget.value)}
                            placeholder="Add a title..."
                            overrides={{
                                Root: {
                                    style: {
                                        borderRadius: "8px",
                                        backgroundColor: "#fafafa",
                                        borderLeftWidth: "1px",
                                        borderRightWidth: "1px",
                                        borderTopWidth: "1px",
                                        borderBottomWidth: "1px",
                                        borderColor: "#dbdbdb",
                                    }
                                },
                                InputContainer: {
                                    style: {
                                        backgroundColor: "transparent"
                                    }
                                }
                            }}
                        />
                    </div>

                    <div className={css({ width: "100%", marginBottom: "32px" })}>
                        <Select
                            options={audienceOptions}
                            value={audience}
                            placeholder="Audience"
                            onChange={(params) => setAudience(params.value)}
                            overrides={{
                                ControlContainer: {
                                    style: {
                                        borderRadius: "8px",
                                        backgroundColor: "#fff",
                                        borderColor: "#dbdbdb",
                                    }
                                },
                                ValueContainer: {
                                    style: {
                                        paddingLeft: "12px"
                                    }
                                }
                            }}
                        />
                    </div>

                    <Button
                        disabled={!title || audience.length === 0}
                        onClick={() => console.log("Next clicked", { title, audience })}
                        overrides={{
                            BaseButton: {
                                style: {
                                    width: "100%",
                                    borderRadius: "8px",
                                    backgroundColor: "#0095f6",
                                    color: "#fff",
                                    fontWeight: 600,
                                    ":hover": {
                                        backgroundColor: "#1877f2"
                                    },
                                    ":disabled": {
                                        backgroundColor: "#b2dffc",
                                        color: "#fff"
                                    }
                                }
                            }
                        }}
                    >
                        Next
                    </Button>
                </ModalBody>
            </div>
        </Modal>
    );
}

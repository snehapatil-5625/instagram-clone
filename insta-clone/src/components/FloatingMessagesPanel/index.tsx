import { useStyletron } from "baseui";
import { useState } from "react";
import { X, Maximize2, SquarePen, ChevronLeft } from "lucide-react";

interface FloatingMessagesPanelProps {
    onClose: () => void;
}

export default function FloatingMessagesPanel({ onClose }: FloatingMessagesPanelProps) {
    const [css] = useStyletron();
    const [view, setView] = useState<"recent" | "new_message">("recent");

    return (
        <div
            className={css({
                position: "fixed",
                bottom: "80px",
                right: "20px",
                width: "400px",
                height: "560px",
                backgroundColor: "#fff",
                borderRadius: "16px",
                boxShadow: "0 12px 28px 0 rgba(0, 0, 0, 0.2), 0 2px 4px 0 rgba(0, 0, 0, 0.1)",
                display: "flex",
                flexDirection: "column",
                zIndex: 100,
                overflow: "hidden",
            })}
        >
            {/* Header */}
            <div
                className={css({
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "16px 20px",
                    borderBottom: "1px solid #efefef",
                })}
            >
                <div className={css({ display: "flex", alignItems: "center", gap: "12px" })}>
                    {view === "new_message" && (
                        <button
                            onClick={() => setView("recent")}
                            className={css({
                                background: "none",
                                border: "none",
                                padding: 0,
                                cursor: "pointer",
                                display: "flex",
                                alignItems: "center",
                            })}
                        >
                            <ChevronLeft size={28} />
                        </button>
                    )}
                    <span className={css({ fontWeight: 700, fontSize: view === "new_message" ? "16px" : "20px" })}>
                        {view === "new_message" ? "New message" : "Messages"}
                    </span>
                </div>
                <div className={css({ display: "flex", alignItems: "center", gap: "16px" })}>
                    {view === "recent" && (
                        <button
                            onClick={() => { }}
                            className={css({
                                background: "none",
                                border: "none",
                                padding: 0,
                                cursor: "pointer",
                            })}
                        >
                            <Maximize2 size={22} />
                        </button>
                    )}
                    <button
                        onClick={onClose}
                        className={css({
                            background: "none",
                            border: "none",
                            padding: 0,
                            cursor: "pointer",
                        })}
                    >
                        <X size={28} />
                    </button>
                </div>
            </div>

            {/* Body */}
            {view === "recent" ? (
                <div
                    className={css({
                        flex: 1,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "20px",
                    })}
                >
                    <span className={css({ color: "#000", fontSize: "16px" })}>
                        No messages found.
                    </span>
                </div>
            ) : (
                <div className={css({ flex: 1, display: "flex", flexDirection: "column" })}>
                    <div
                        className={css({
                            display: "flex",
                            alignItems: "center",
                            padding: "16px 20px",
                            borderBottom: "1px solid #efefef",
                            gap: "12px",
                        })}
                    >
                        <span className={css({ fontWeight: 600, fontSize: "16px" })}>To:</span>
                        <input
                            placeholder="Search..."
                            autoFocus
                            className={css({
                                border: "none",
                                outline: "none",
                                flex: 1,
                                fontSize: "14px",
                                "::placeholder": {
                                    color: "#8e8e8e",
                                },
                            })}
                        />
                    </div>
                    <div className={css({ flex: 1 })} />
                    {/* Footer for New Message View */}
                    <div className={css({ padding: "16px 20px" })}>
                        <button
                            className={css({
                                width: "100%",
                                padding: "12px",
                                backgroundColor: "#cbdcf7",
                                color: "#fff",
                                border: "none",
                                borderRadius: "8px",
                                fontWeight: 600,
                                fontSize: "14px",
                                cursor: "default",
                            })}
                        >
                            Chat
                        </button>
                    </div>
                </div>
            )}

            {/* Internal FAB - Only in Recent View */}
            {view === "recent" && (
                <div
                    className={css({
                        position: "absolute",
                        bottom: "20px",
                        right: "20px",
                    })}
                >
                    <button
                        onClick={() => setView("new_message")}
                        className={css({
                            width: "56px",
                            height: "56px",
                            backgroundColor: "#fff",
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                            border: "1px solid #efefef",
                            cursor: "pointer",
                            ":hover": {
                                backgroundColor: "#fafafa",
                            },
                        })}
                    >
                        <SquarePen size={28} color="#000" />
                    </button>
                </div>
            )}
        </div>
    );
}

import { useStyletron } from "baseui";
import { Avatar } from "baseui/avatar";
import { Input } from "baseui/input";
import { useState } from "react";
import { ChevronDown, Edit, Search } from "lucide-react";

interface MessagesDrawerProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function MessagesDrawer({ isOpen }: MessagesDrawerProps) {
    const [css] = useStyletron();
    const [activeTab, setActiveTab] = useState("Primary");

    const tabs = ["Primary", "General", "Requests"];

    return (
        <div
            className={css({
                position: "fixed",
                top: 0,
                left: "72px",
                width: "397px",
                height: "100vh",
                backgroundColor: "#fff",
                borderLeft: "1px solid #efefef",
                borderRight: "1px solid #efefef",
                zIndex: 11,
                transform: isOpen ? "translateX(0)" : "translateX(-100%)",
                transition: "transform 0.3s ease-in-out",
                visibility: isOpen ? "visible" : "hidden",
                overflow: "hidden",
            })}
        >
            <div className={css({ display: "flex", flexDirection: "column", height: "100%" })}>
                {/* Header */}
                <div
                    className={css({
                        padding: "24px 24px 12px 24px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    })}
                >
                    <div className={css({ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" })}>
                        <span className={css({ fontSize: "20px", fontWeight: 700 })}>anthaathico</span>
                        <ChevronDown size={20} />
                    </div>
                    <div className={css({ cursor: "pointer" })}>
                        <Edit size={24} />
                    </div>
                </div>

                {/* Tabs */}
                <div
                    className={css({
                        display: "flex",
                        padding: "0 24px",
                        borderBottom: "1px solid #efefef",
                        marginBottom: "12px",
                    })}
                >
                    {tabs.map((tab) => (
                        <div
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={css({
                                flex: 1,
                                padding: "12px 0",
                                textAlign: "center",
                                fontSize: "14px",
                                fontWeight: 600,
                                color: activeTab === tab ? "#000" : "#8e8e8e",
                                cursor: "pointer",
                                borderBottom: activeTab === tab ? "1px solid #000" : "none",
                                transition: "all 0.2s ease",
                                ":hover": {
                                    color: "#000",
                                },
                            })}
                        >
                            {tab}
                        </div>
                    ))}
                </div>

                <div className={css({ padding: "0 24px", flex: 1, overflowY: "auto" })}>
                    {/* Search Bar */}
                    <Input
                        placeholder="Search"
                        startEnhancer={<Search size={16} color="#8e8e8e" />}
                        overrides={{
                            Root: {
                                style: {
                                    backgroundColor: "#efefef",
                                    border: "none",
                                    borderRadius: "10px",
                                    marginBottom: "24px",
                                    height: "36px",
                                },
                            },
                            Input: {
                                style: {
                                    backgroundColor: "transparent",
                                    fontSize: "14px",
                                    "::placeholder": {
                                        color: "#8e8e8e",
                                    },
                                },
                            },
                            InputContainer: {
                                style: {
                                    backgroundColor: "transparent",
                                },
                            },
                            StartEnhancer: {
                                style: {
                                    backgroundColor: "transparent",
                                    paddingRight: 0,
                                },
                            },
                        }}
                    />

                    {/* Notes Section */}
                    <div className={css({ marginBottom: "24px" })}>
                        <div className={css({ position: "relative", width: "84px", textAlign: "center" })}>
                            {/* Thought Bubble */}
                            <div
                                className={css({
                                    position: "absolute",
                                    top: "-20px",
                                    left: "50%",
                                    transform: "translateX(-50%)",
                                    backgroundColor: "#fff",
                                    border: "1px solid #efefef",
                                    borderRadius: "16px",
                                    padding: "8px 12px",
                                    fontSize: "12px",
                                    color: "#8e8e8e",
                                    width: "100px",
                                    boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
                                    zIndex: 2,
                                })}
                            >
                                Obsessed with...
                            </div>

                            <div className={css({ display: "inline-block", position: "relative" })}>
                                <Avatar
                                    name="anthaathico"
                                    size="72px"
                                    src=""
                                    overrides={{
                                        Root: {
                                            style: {
                                                backgroundColor: "#000",
                                                border: "1px solid #efefef",
                                            }
                                        }
                                    }}
                                />
                                {/* Plus icon for adding note */}
                                <div className={css({
                                    position: "absolute",
                                    top: "0",
                                    left: "0",
                                    width: "20px",
                                    height: "20px",
                                    backgroundColor: "#fff",
                                    borderRadius: "50%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    border: "1px solid #efefef",
                                    fontSize: "16px",
                                    color: "#000",
                                    fontWeight: "bold",
                                    zIndex: 1
                                })}>+</div>
                            </div>
                            <div className={css({ fontSize: "12px", color: "#8e8e8e", marginTop: "8px" })}>Your note</div>
                        </div>
                    </div>

                    {/* Empty State */}
                    <div
                        className={css({
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            marginTop: "40px",
                            color: "#8e8e8e",
                            fontSize: "14px",
                            lineHeight: "1.4",
                        })}
                    >
                        Chats will appear here after you send or receive a message
                    </div>
                </div>
            </div>
        </div>
    );
}

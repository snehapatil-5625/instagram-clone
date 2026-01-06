import { useStyletron } from "baseui";
import { Button } from "baseui/button";
import { ChevronDown, ChevronRight, Info, Plus, CreditCard } from "lucide-react";

export default function DashboardPage() {
    const [css] = useStyletron();

    return (
        <div
            className={css({
                padding: "36px 50px",
                maxWidth: "1000px",
                margin: "0 auto",
                color: "#262626",
            })}
        >
            {/* Header */}
            <h1 className={css({ fontSize: "24px", fontWeight: 700, marginBottom: "24px" })}>
                Professional dashboard
            </h1>

            {/* Pills */}
            <div className={css({ display: "flex", gap: "8px", marginBottom: "32px" })}>
                <Button
                    kind="secondary"
                    size="compact"
                    overrides={{
                        BaseButton: {
                            style: {
                                backgroundColor: "#fff",
                                border: "1px solid #dbdbdb",
                                borderRadius: "8px",
                                display: "flex",
                                gap: "4px",
                                padding: "6px 16px",
                                fontWeight: 600,
                            },
                        },
                    }}
                >
                    Insights <ChevronDown size={16} />
                </Button>
                <Button
                    kind="secondary"
                    size="compact"
                    overrides={{
                        BaseButton: {
                            style: {
                                backgroundColor: "#efefef",
                                border: "none",
                                borderRadius: "8px",
                                padding: "6px 16px",
                                fontWeight: 600,
                            },
                        },
                    }}
                >
                    Ad tools
                </Button>
            </div>

            <div className={css({ borderTop: "1px solid #efefef", margin: "0 -50px 32px -50px" })} />

            {/* Main Layout */}
            <div className={css({ display: "flex", gap: "60px" })}>
                {/* Left Section - Manage Ads */}
                <div className={css({ flex: 1, textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" })}>
                    <div className={css({ display: "flex", alignItems: "center", gap: "4px", marginBottom: "40px" })}>
                        <span className={css({ fontWeight: 700, fontSize: "16px" })}>Manage ads</span>
                        <Info size={16} color="#8e8e8e" />
                    </div>

                    <div
                        className={css({
                            width: "60px",
                            height: "60px",
                            marginBottom: "16px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        })}
                    >
                        <svg
                            width="48"
                            height="48"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#E1306C"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <rect x="2" y="3" width="20" height="14" rx="2" />
                            <path d="M8 21h8" />
                            <path d="M12 17v4" />
                            <path d="M7 8l3 3 3-3" />
                        </svg>
                    </div>

                    <p className={css({ fontSize: "16px", fontWeight: 500, marginBottom: "8px" })}>
                        Let more people see what you're creating
                    </p>
                    <p className={css({ fontSize: "14px", color: "#8e8e8e", marginBottom: "24px" })}>
                        Boost your content into ads.
                    </p>
                    <Button
                        overrides={{
                            BaseButton: {
                                style: {
                                    backgroundColor: "#0095f6",
                                    color: "#fff",
                                    borderRadius: "8px",
                                    padding: "8px 24px",
                                    fontWeight: 600,
                                    ":hover": { backgroundColor: "#1877f2" },
                                },
                            },
                        }}
                    >
                        Boost content
                    </Button>
                </div>

                {/* Right Section - Other Tools */}
                <div className={css({ flex: 1, borderLeft: "1px solid #efefef", paddingLeft: "60px" })}>
                    <div className={css({ marginBottom: "32px" })}>
                        <h2 className={css({ fontSize: "16px", fontWeight: 700, marginBottom: "20px" })}>
                            Create your next ad
                        </h2>
                        <div className={css({ display: "flex", flexDirection: "column", gap: "24px" })}>
                            {/* Top Post */}
                            <div className={css({ display: "flex", alignItems: "center", gap: "16px", cursor: "pointer" })}>
                                <img
                                    src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=100&auto=format&fit=crop"
                                    className={css({ width: "44px", height: "44px", borderRadius: "4px", objectFit: "cover" })}
                                />
                                <div className={css({ flex: 1 })}>
                                    <p className={css({ fontSize: "14px", fontWeight: 600 })}>Your current top post</p>
                                    <p className={css({ fontSize: "14px", color: "#8e8e8e" })}>
                                        Reach more people with your most liked post in the last 28 days.
                                    </p>
                                </div>
                                <ChevronRight size={20} color="#8e8e8e" />
                            </div>

                            {/* Create Ad */}
                            <div className={css({ display: "flex", alignItems: "center", gap: "16px", cursor: "pointer" })}>
                                <div
                                    className={css({
                                        width: "44px",
                                        height: "44px",
                                        border: "1px solid #dbdbdb",
                                        borderRadius: "8px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    })}
                                >
                                    <Plus size={24} />
                                </div>
                                <div className={css({ flex: 1 })}>
                                    <p className={css({ fontSize: "14px", fontWeight: 600 })}>Create ad</p>
                                </div>
                                <ChevronRight size={20} color="#8e8e8e" />
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className={css({ fontSize: "16px", fontWeight: 700, marginBottom: "20px" })}>
                            Other tools
                        </h2>
                        <div className={css({ display: "flex", alignItems: "center", gap: "16px", cursor: "pointer" })}>
                            <CreditCard size={20} />
                            <div className={css({ flex: 1 })}>
                                <p className={css({ fontSize: "14px", fontWeight: 600 })}>Billing & payments</p>
                            </div>
                            <ChevronRight size={20} color="#8e8e8e" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

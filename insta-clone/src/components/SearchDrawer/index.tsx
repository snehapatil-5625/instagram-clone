import { useStyletron } from "baseui";
import { HeadingMedium } from "baseui/typography";
import { Input } from "baseui/input";

interface SearchDrawerProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function SearchDrawer({ isOpen, onClose }: SearchDrawerProps) {
    const [css, $theme] = useStyletron();

    return (
        <div
            className={css({
                position: "fixed",
                top: 0,
                left: "72px",
                width: "397px",
                height: "100vh",
                backgroundColor: "#fff",
                borderTopRightRadius: "16px",
                borderBottomRightRadius: "16px",
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
                zIndex: 9,
                transform: isOpen ? "translateX(0)" : "translateX(-100%)",
                transition: "transform 0.3s ease-in-out",
                visibility: isOpen ? "visible" : "hidden",
                overflow: "hidden",
            })}
        >
            <div className={css({ display: "flex", flexDirection: "column", height: "100%", padding: "24px" })}>
                <HeadingMedium margin="12px 0 36px 0" className={css({ fontWeight: 600, fontSize: "24px" })}>
                    Search
                </HeadingMedium>

                <Input
                    placeholder="Search"
                    overrides={{
                        Root: {
                            style: {
                                backgroundColor: "#efefef",
                                border: "none",
                                borderRadius: "8px",
                                marginBottom: "24px",
                                height: "40px",
                            },
                        },
                        Input: {
                            style: {
                                backgroundColor: "transparent",
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
                    }}
                />

                <div
                    className={css({
                        borderTop: `1px solid ${$theme.colors.mono300}`,
                        paddingTop: "16px",
                        flex: 1,
                    })}
                >
                    <div
                        className={css({
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginBottom: "16px",
                        })}
                    >
                        <span className={css({ fontWeight: 600, fontSize: "16px" })}>Recent</span>
                        <span
                            className={css({
                                color: "#0095f6",
                                fontSize: "14px",
                                fontWeight: 600,
                                cursor: "pointer",
                                ":hover": {
                                    color: "#00376b",
                                },
                            })}
                        >
                            Clear all
                        </span>
                    </div>

                    <div
                        className={css({
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "200px",
                            color: "#8e8e8e",
                            fontSize: "14px",
                        })}
                    >
                        No recent searches.
                    </div>
                </div>
            </div>
        </div>
    );
}

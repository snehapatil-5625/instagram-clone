import { useStyletron } from "baseui";
import { Avatar } from "baseui/avatar";
import { Button } from "baseui/button";

export default function RightSidebar() {
    const [css, $theme] = useStyletron();

    const suggestions = [
        {
            username: "Instagram",
            desc: "Popular",
            avatar: "https://www.instagram.com/static/images/ico/favicon-192.png/b306e01298c4.png",
            isVerified: true,
        },
        {
            username: "Pradnya Patil ❤️",
            desc: "Suggested for you",
            avatar: "https://avatars.dicebear.com/api/human/pradnya.svg",
        },
        {
            username: "Pravin Wagh",
            desc: "Followed by nana.wagh.796",
            avatar: "https://avatars.dicebear.com/api/human/pravin.svg",
        },
        {
            username: "Mahesh Inamdar",
            desc: "Suggested for you",
            avatar: "https://avatars.dicebear.com/api/human/mahesh.svg",
        },
        {
            username: "Om Ghante",
            desc: "Suggested for you",
            avatar: "https://avatars.dicebear.com/api/human/om.svg",
        },
    ];

    return (
        <div
            className={css({
                padding: "20px 0",
                width: "320px",
                display: "none",
                [$theme.mediaQuery.large]: {
                    display: "block",
                },
            })}
        >
            {/* Current User */}
            <div
                className={css({
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "20px",
                })}
            >
                <div className={css({ display: "flex", alignItems: "center", gap: "12px" })}>
                    <Avatar
                        name="anthaathico"
                        size="scale1600"
                        src="https://avatars.dicebear.com/api/human/user.svg"
                    />
                    <div>
                        <div className={css({ fontWeight: 600, fontSize: "14px" })}>anthaathico</div>
                        <div className={css({ color: "#8e8e8e", fontSize: "14px" })}>
                            Anthaathi Private Limited
                        </div>
                    </div>
                </div>
                <Button
                    kind="tertiary"
                    size="mini"
                    overrides={{
                        BaseButton: {
                            style: {
                                color: "#0095f6",
                                fontWeight: 700,
                                fontSize: "12px",
                                ":hover": { backgroundColor: "transparent" },
                            },
                        },
                    }}
                >
                    Switch
                </Button>
            </div>

            {/* Suggestions Header */}
            <div
                className={css({
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "16px",
                })}
            >
                <div className={css({ color: "#8e8e8e", fontWeight: 600, fontSize: "14px" })}>
                    Suggested for you
                </div>
                <Button
                    kind="tertiary"
                    size="mini"
                    overrides={{
                        BaseButton: {
                            style: {
                                color: "#000",
                                fontWeight: 600,
                                fontSize: "12px",
                                ":hover": { backgroundColor: "transparent" },
                            },
                        },
                    }}
                >
                    See All
                </Button>
            </div>

            {/* Suggestions List */}
            <div className={css({ marginBottom: "30px" })}>
                {suggestions.map((user, i) => (
                    <div
                        key={i}
                        className={css({
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginBottom: "16px",
                        })}
                    >
                        <div className={css({ display: "flex", alignItems: "center", gap: "12px" })}>
                            <Avatar name={user.username} size="scale1200" src={user.avatar} />
                            <div>
                                <div className={css({ display: "flex", alignItems: "center", gap: "4px" })}>
                                    <span className={css({ fontWeight: 600, fontSize: "14px" })}>{user.username}</span>
                                    {user.isVerified && (
                                        <img
                                            src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Twitter_Verified_Badge.svg"
                                            style={{ width: "12px" }}
                                            alt="verified"
                                        />
                                    )}
                                </div>
                                <div
                                    className={css({
                                        color: "#8e8e8e",
                                        fontSize: "12px",
                                        maxWidth: "150px",
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        whiteSpace: "nowrap",
                                    })}
                                >
                                    {user.desc}
                                </div>
                            </div>
                        </div>
                        <Button
                            kind="tertiary"
                            size="mini"
                            overrides={{
                                BaseButton: {
                                    style: {
                                        color: "#0095f6",
                                        fontWeight: 700,
                                        fontSize: "12px",
                                        ":hover": { backgroundColor: "transparent" },
                                    },
                                },
                            }}
                        >
                            Follow
                        </Button>
                    </div>
                ))}
            </div>

            {/* Footer Links */}
            <div className={css({ color: $theme.colors.mono500, fontSize: "12px", lineHeight: "1.5" })}>
                <div className={css({ display: "flex", flexWrap: "wrap", gap: "5px", marginBottom: "15px" })}>
                    {["About", "Help", "Press", "API", "Jobs", "Privacy", "Terms", "Locations", "Language", "Meta Verified"].map(
                        (link, i) => (
                            <span key={link}>
                                {link} {i !== 9 && "•"}
                            </span>
                        )
                    )}
                </div>
                <div>© 2026 INSTAGRAM FROM META</div>
            </div>
        </div>
    );
}

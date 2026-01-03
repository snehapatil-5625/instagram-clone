import { useStyletron } from "baseui";
import { Avatar } from "baseui/avatar";
import { Button } from "baseui/button";
import { useState } from "react";

interface PostProps {
    username: string;
    avatar: string;
    time: string;
    image: string;
    likes: string;
    caption: string;
    hashtags: string[];
    commentsCount: number;
}

export default function Post({
    username,
    avatar,
    time,
    image,
    likes,
    caption,
    hashtags,
    commentsCount,
}: PostProps) {
    const [css, $theme] = useStyletron();
    const [isLiked, setIsLiked] = useState(false);

    return (
        <div
            className={css({
                width: "100%",
                maxWidth: "470px",
                margin: "0 auto",
                marginBottom: "20px",
                borderBottom: `1px solid ${$theme.colors.mono400}`,
                paddingBottom: "20px",
            })}
        >
            <div
                className={css({
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "10px 0",
                })}
            >
                <div
                    className={css({
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                    })}
                >
                    <Avatar name={username} size="scale1000" src={avatar} />
                    <div className={css({ display: "flex", alignItems: "center", gap: "5px" })}>
                        <span className={css({ fontWeight: 600, fontSize: "14px" })}>{username}</span>
                        <span className={css({ color: $theme.colors.mono700, fontSize: "14px" })}>• {time}</span>
                        <Button
                            kind="tertiary"
                            size="mini"
                            overrides={{
                                BaseButton: {
                                    style: {
                                        color: "#0095f6",
                                        fontWeight: 600,
                                        padding: 0,
                                        ":hover": { backgroundColor: "transparent", color: "#00376b" },
                                    },
                                },
                            }}
                        >
                            Follow
                        </Button>
                    </div>
                </div>
                <Button
                    kind="tertiary"
                    size="mini"
                    overrides={{
                        BaseButton: {
                            style: {
                                padding: 0,
                                ":hover": { backgroundColor: "transparent" },
                            },
                        },
                    }}
                >
                    <img src="/src/assets/hamburger.png" style={{ width: "20px" }} alt="more" />
                </Button>
            </div>

            <div
                className={css({
                    width: "100%",
                    borderRadius: "4px",
                    overflow: "hidden",
                    border: `1px solid ${$theme.colors.mono400}`,
                })}
            >
                <img src={image} className={css({ width: "100%", display: "block" })} alt="post" />
            </div>

            <div className={css({ paddingTop: "12px" })}>
                <div
                    className={css({
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: "8px",
                    })}
                >
                    <div className={css({ display: "flex", gap: "16px" })}>
                        <img
                            src={isLiked ? "/src/assets/favorite.png" : "/src/assets/favorite.png"} // Should have an unliked version
                            className={css({ width: "24px", height: "24px", cursor: "pointer" })}
                            onClick={() => setIsLiked(!isLiked)}
                            alt="like"
                        />
                        <img
                            src="/src/assets/chat.png"
                            className={css({ width: "24px", height: "24px", cursor: "pointer" })}
                            alt="comment"
                        />
                        <img
                            src="/src/assets/send.png"
                            className={css({ width: "24px", height: "24px", cursor: "pointer" })}
                            alt="share"
                        />
                    </div>
                    <img
                        src="/src/assets/bookmark.png"
                        className={css({ width: "24px", height: "24px", cursor: "pointer" })}
                        alt="save"
                    />
                </div>

                <div className={css({ fontWeight: 600, fontSize: "14px", marginBottom: "8px" })}>
                    {likes} likes
                </div>

                <div className={css({ fontSize: "14px", lineHeight: "1.4" })}>
                    <span className={css({ fontWeight: 600, marginRight: "5px" })}>{username}</span>
                    {caption}
                    <div className={css({ marginTop: "4px" })}>
                        {hashtags.map((tag, i) => (
                            <span key={i} className={css({ color: "#00376b", marginRight: "5px", cursor: "pointer" })}>
                                #{tag}
                            </span>
                        ))}
                    </div>
                </div>

                <div
                    className={css({
                        color: $theme.colors.mono700,
                        fontSize: "14px",
                        marginTop: "8px",
                        cursor: "pointer",
                    })}
                >
                    View all {commentsCount} comments
                </div>
            </div>
        </div>
    );
}

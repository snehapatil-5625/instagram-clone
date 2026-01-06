import { useStyletron } from "baseui";
import { ArrowLeft, History } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ArchivePage() {
    const [css] = useStyletron();
    const navigate = useNavigate();

    const footerLinks = [
        "Meta", "About", "Blog", "Jobs", "Help", "API", "Privacy", "Terms",
        "Locations", "Instagram Lite", "Meta AI", "Threads",
        "Contact Uploading & Non-Users", "Meta Verified"
    ];

    return (
        <div className={css({
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
            backgroundColor: "#fff",
            width: "100%",
        })}>
            {/* Header */}
            <header className={css({
                padding: "12px 20px",
                display: "flex",
                alignItems: "center",
                gap: "32px",
                marginTop: "20px"
            })}>
                <ArrowLeft
                    size={24}
                    cursor="pointer"
                    onClick={() => navigate(-1)}
                />
                <span className={css({ fontSize: "16px", fontWeight: 600 })}>Archive</span>
            </header>

            {/* Tabs */}
            <div className={css({
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                borderBottom: "1px solid #efefef",
                marginTop: "40px",
                width: "100%",
            })}>
                <div className={css({
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "12px 16px",
                    borderBottom: "1px solid #000",
                    cursor: "pointer"
                })}>
                    <History size={16} />
                    <span className={css({ fontSize: "12px", fontWeight: 600, letterSpacing: "1px" })}>STORIES</span>
                </div>
            </div>

            {/* Empty State */}
            <div className={css({
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "0 20px",
                textAlign: "center"
            })}>
                <div className={css({
                    width: "62px",
                    height: "62px",
                    borderRadius: "50%",
                    border: "2px solid #000",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "24px"
                })}>
                    <History size={32} />
                </div>
                <h2 className={css({ fontSize: "16px", fontWeight: 600, marginBottom: "8px" })}>
                    Add to your story
                </h2>
                <p className={css({
                    fontSize: "14px",
                    color: "#000",
                    maxWidth: "350px",
                    lineHeight: "1.4"
                })}>
                    Keep your stories in your archive after they disappear, so you can look back on your memories. Only you can see what's in your archive.
                </p>
            </div>

            {/* Footer */}
            <footer className={css({
                padding: "24px 20px 48px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "16px"
            })}>
                <div className={css({
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: "16px",
                })}>
                    {footerLinks.map((link) => (
                        <span
                            key={link}
                            className={css({
                                fontSize: "12px",
                                color: "#737373",
                                cursor: "pointer",
                                ":hover": { textDecoration: "underline" }
                            })}
                        >
                            {link}
                        </span>
                    ))}
                </div>
                <div className={css({ display: "flex", gap: "16px", alignItems: "center", color: "#737373", fontSize: "12px" })}>
                    <div className={css({ display: "flex", alignItems: "center", gap: "4px", cursor: "pointer" })}>
                        English <div className={css({ borderLeft: "4px solid transparent", borderRight: "4px solid transparent", borderTop: "4px solid #737373" })} />
                    </div>
                    <span>© 2026 Instagram from Meta</span>
                </div>
            </footer>

        </div>
    );
}

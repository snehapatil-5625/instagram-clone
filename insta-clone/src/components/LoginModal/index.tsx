
import { useStyletron } from "baseui";
import { Modal, ROLE } from "baseui/modal";
import { X } from "lucide-react";
import { useState } from "react";

interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
    const [css] = useStyletron();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

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
                        width: "400px",
                        height: "auto",
                        maxWidth: "95vw",
                        borderRadius: "12px",
                        backgroundColor: "#fff",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        position: "relative",
                    },
                },
                Close: {
                    style: {
                        display: 'none'
                    }
                }
            }}
        >
            <div className={css({ width: "100%", padding: "20px", position: "relative", boxSizing: "border-box" })}>
                <button
                    onClick={onClose}
                    className={css({
                        position: "absolute",
                        top: "10px",
                        right: "10px",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        padding: "5px",
                    })}
                >
                    <X size={24} color="#000" />
                </button>

                <div className={css({
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginTop: "20px"
                })}>
                    {/* Logo */}
                    <div className={css({ marginBottom: "30px" })}>
                        <span className={css({
                            fontFamily: "'Grand Hotel', cursive",
                            fontSize: "50px",
                            // Use image if font is not available, but user didn't mention adding fonts. 
                            // Alternatively use the image asset from sidebar.
                            // Let's use the image asset since it's reliable.
                            display: "none"
                        })}>Instagram</span>
                        <img
                            src="/src/assets/insta_logo1.png"
                            alt="Instagram"
                            className={css({ width: "175px", objectFit: "contain" })}
                        />
                    </div>

                    <form className={css({ width: "100%", display: "flex", flexDirection: "column", gap: "8px" })} onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="text"
                            placeholder="Phone number, username, or email"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className={css({
                                width: "100%",
                                padding: "9px 8px",
                                border: "1px solid #dbdbdb",
                                borderRadius: "3px",
                                backgroundColor: "#fafafa",
                                fontSize: "12px",
                                boxSizing: "border-box",
                                outline: "none",
                                ":focus": {
                                    border: "1px solid #a8a8a8",
                                },
                            })}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className={css({
                                width: "100%",
                                padding: "9px 8px",
                                border: "1px solid #dbdbdb",
                                borderRadius: "3px",
                                backgroundColor: "#fafafa",
                                fontSize: "12px",
                                boxSizing: "border-box",
                                outline: "none",
                                ":focus": {
                                    border: "1px solid #a8a8a8",
                                },
                            })}
                        />

                        <div className={css({ display: "flex", alignItems: "center", width: "100%", marginTop: "8px", marginBottom: "8px" })}>
                            <label className={css({ display: "flex", alignItems: "center", cursor: "pointer", fontSize: "12px", color: "#262626" })}>
                                <input type="checkbox" className={css({ marginRight: "8px" })} />
                                Save login info
                            </label>
                        </div>

                        <button
                            className={css({
                                backgroundColor: "#0095f6",
                                color: "#fff",
                                border: "none",
                                borderRadius: "8px",
                                padding: "7px 16px",
                                fontSize: "14px",
                                fontWeight: 600,
                                cursor: "pointer",
                                width: "100%",
                                marginTop: "8px",
                                marginBottom: "16px",
                                opacity: username && password.length >= 6 ? 1 : 0.7,
                                ":disabled": {
                                    cursor: "default"
                                }
                            })}
                            disabled={!username || password.length < 6}
                        >
                            Log in
                        </button>

                        <div className={css({ width: "100%", textAlign: "center" })}>
                            <a href="#" className={css({ color: "#00376b", fontSize: "12px", textDecoration: "none" })}>Forgot password?</a>
                        </div>
                    </form>
                </div>
            </div>
        </Modal>
    );
}

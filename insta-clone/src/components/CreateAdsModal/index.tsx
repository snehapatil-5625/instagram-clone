import { useStyletron } from "baseui";
import { Modal, ModalBody, ROLE } from "baseui/modal";
import { X, ChevronRight, Image as ImageIcon, Grid, Layers } from "lucide-react";

interface CreateAdsModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function CreateAdsModal({ isOpen, onClose }: CreateAdsModalProps) {
    const [css] = useStyletron();

    const adOptions = [
        {
            title: "Run an ad that won't show on profile",
            description: "Just upload new photos and videos.",
            icon: <ImageIcon size={24} />,
        },
        {
            title: "Boost content from profile",
            description: "Turn a post, story or reel from your grid into an ad.",
            icon: <Grid size={24} />,
        },
        {
            title: "Compare 2 posts",
            description: "Choose 2 posts to boost and see which one performs better as an ad.",
            icon: <div className={css({ position: "relative", width: "32px", height: "32px" })}>
                <Layers size={20} className={css({ position: "absolute", top: 0, left: 0, opacity: 0.5 })} />
                <Layers size={20} className={css({ position: "absolute", bottom: 0, right: 0 })} />
            </div>,
            isSpecial: true
        },
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
            <div className={css({ display: "flex", flexDirection: "column" })}>
                {/* Header */}
                <div
                    className={css({
                        display: "flex",
                        alignItems: "center",
                        padding: "12px 16px",
                        borderBottom: "1px solid #efefef",
                        minHeight: "42px",
                        position: "relative"
                    })}
                >
                    <button
                        onClick={onClose}
                        className={css({
                            background: "none",
                            border: "none",
                            cursor: "pointer",
                            padding: "4px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        })}
                    >
                        <X size={24} color="#262626" />
                    </button>
                    <span className={css({
                        position: "absolute",
                        left: "50%",
                        transform: "translateX(-50%)",
                        fontSize: "16px",
                        fontWeight: 600
                    })}>
                        Create ad
                    </span>
                </div>

                {/* Body */}
                <ModalBody
                    className={css({
                        padding: "16px",
                        margin: 0,
                    })}
                >
                    <div className={css({ display: "flex", flexDirection: "column", gap: "12px" })}>
                        {adOptions.map((option, index) => (
                            <div
                                key={index}
                                className={css({
                                    display: "flex",
                                    alignItems: "center",
                                    padding: "16px",
                                    borderRadius: "12px",
                                    cursor: "pointer",
                                    backgroundColor: option.isSpecial ? "#f8f8f8" : "transparent",
                                    border: "1px solid #efefef",
                                    ":hover": {
                                        backgroundColor: "#fafafa"
                                    },
                                    transition: "background-color 0.2s"
                                })}
                            >
                                <div className={css({
                                    width: "48px",
                                    height: "48px",
                                    borderRadius: "8px",
                                    border: "1px solid #dbdbdb",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginRight: "16px",
                                    backgroundColor: "#fff"
                                })}>
                                    {option.icon}
                                </div>

                                <div className={css({ flex: 1 })}>
                                    <div className={css({ fontSize: "16px", fontWeight: 600, color: "#262626" })}>
                                        {option.title}
                                    </div>
                                    <div className={css({ fontSize: "14px", color: "#737373", marginTop: "2px" })}>
                                        {option.description}
                                    </div>
                                </div>

                                <ChevronRight size={20} color="#737373" />
                            </div>
                        ))}
                    </div>
                </ModalBody>
            </div>
        </Modal>
    );
}

import { useStyletron } from "baseui";
import { Avatar } from "baseui/avatar";
import { Button } from "baseui/button";
import {
  Bookmark,
  Heart,
  MessageCircle,
  MoreHorizontal,
  Send,
  Volume2,
  VolumeX,
} from "lucide-react";
import { useState } from "react";

interface ReelsDesignProps {
  videoSrc: string;
  text: string;
  profileImage: string;
  username: string;
  likes: string;
  comments: string;
  shares: string;
  audioTitle: string;
}

export default function ReelsDesign({
  videoSrc,
  text,
  profileImage,
  username,
  likes,
  comments,
  shares,
  audioTitle,
}: ReelsDesignProps) {
  const [css] = useStyletron();
  const [isMuted, setIsMuted] = useState(true);

  return (
    <div
      className={css({
        display: "flex",
        alignItems: "flex-end",
        gap: "12px",
        height: "calc(100vh - 40px)",
        maxWidth: "550px",
        margin: "0 auto",
        position: "relative",
        padding: "20px 0",
      })}
    >
      {/* Video Container */}
      <div
        className={css({
          width: "500px",
          height: "100%",
          backgroundColor: "#000",
          borderRadius: "8px",
          position: "relative",
          overflow: "hidden",
          boxShadow: "0 8px 16px rgba(0,0,0,0.15)",
        })}
      >
        <video
          className={css({
            width: "100%",
            height: "100%",
            objectFit: "cover",
          })}
          src={videoSrc}
          autoPlay
          loop
          muted={isMuted}
          playsInline
        />

        {/* Mute Toggle Overlay */}
        <div
          className={css({
            position: "absolute",
            top: "16px",
            right: "16px",
            zIndex: 3,
          })}
        >
          <Button
            onClick={() => setIsMuted(!isMuted)}
            kind="tertiary"
            overrides={{
              BaseButton: {
                style: {
                  backgroundColor: "rgba(0,0,0,0.2)",
                  color: "#fff",
                  borderRadius: "50%",
                  padding: "8px",
                  ":hover": { backgroundColor: "rgba(0,0,0,0.4)" },
                },
              },
            }}
          >
            {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
          </Button>
        </div>

        {/* Bottom Info Overlay */}
        <div
          className={css({
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            padding: "16px",
            background: "linear-gradient(transparent, rgba(0,0,0,0.8))",
            color: "#fff",
            zIndex: 2,
          })}
        >
          <div className={css({ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" })}>
            <Avatar name={username} size="32px" src={profileImage} />
            <span className={css({ fontWeight: 600, fontSize: "14px" })}>{username}</span>
            <span className={css({ fontSize: "14px", opacity: 0.8, cursor: "pointer" })}>•</span>
            <Button
              kind="tertiary"
              overrides={{
                BaseButton: {
                  style: {
                    color: "#fff",
                    fontWeight: 600,
                    fontSize: "14px",
                    padding: 0,
                    ":hover": { backgroundColor: "transparent", opacity: 0.8 },
                  },
                },
              }}
            >
              Follow
            </Button>
          </div>

          <p className={css({ fontSize: "14px", lineHeight: "1.4", marginBottom: "8px", overflow: "hidden", display: "-webkit-box", WebkitLineClamp: "2", WebkitBoxOrient: "vertical" })}>
            {text}
          </p>

          <div className={css({ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px" })}>
            <span className={css({ fontSize: "16px" })}>♪</span>
            <span className={css({ opacity: 0.9, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" })}>{audioTitle}</span>
          </div>
        </div>
      </div>

      {/* Right Side Actions */}
      <div
        className={css({
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          paddingBottom: "16px",
        })}
      >
        <ActionButton icon={<Heart size={24} />} label={likes} />
        <ActionButton icon={<MessageCircle size={24} />} label={comments} />
        <ActionButton icon={<Send size={24} />} label={shares} />
        <ActionButton icon={<Bookmark size={24} />} />
        <ActionButton icon={<MoreHorizontal size={24} />} />
        <div
          className={css({
            width: "24px",
            height: "24px",
            borderRadius: "4px",
            border: "2px solid #ccc",
            overflow: "hidden",
            cursor: "pointer",
          })}
        >
          <img src={profileImage} className={css({ width: "100%", height: "100%", objectFit: "cover" })} />
        </div>
      </div>
    </div>
  );
}

function ActionButton({ icon, label }: { icon: React.ReactNode; label?: string }) {
  const [css] = useStyletron();
  return (
    <div className={css({ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" })}>
      <Button
        kind="tertiary"
        overrides={{
          BaseButton: {
            style: {
              backgroundColor: "transparent",
              color: "#262626",
              padding: "8px",
              borderRadius: "50%",
              ":hover": { backgroundColor: "#f2f2f2" },
            },
          },
        }}
      >
        {icon}
      </Button>
      {label && <span className={css({ fontSize: "12px", fontWeight: 600, color: "#262626" })}>{label}</span>}
    </div>
  );
}

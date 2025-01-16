import { useStyletron } from "baseui";
import { Avatar } from "baseui/avatar";
import { Block } from "baseui/block";
import { Button } from "baseui/button";
import {
  Bookmark,
  Heart,
  MessageCircle,
  MoreHorizontal,
  Share2,
  Volume2,
} from "lucide-react";

interface ReelsDesignProps {
  videoSrc: string;
  text: string;
  profileImage: string;
  username: string;
  likes: string;
  comments: string;
  audioTitle: string;
}
export default function ReelsDesign({
  videoSrc,
  text,
  profileImage,
  username,
  likes,
  comments,
  audioTitle,
}: ReelsDesignProps) {
  const [css] = useStyletron();

  return (
    <div
      className={css({
        width: "100%",
        height: "100vh",
        backgroundColor: "#FFFFFF80",
        position: "relative",
      })}
    >
      <div
        className={css({
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          ":before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "linear-gradient(0deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.2) 100%)",
            zIndex: 1,
          },
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
          muted
          playsInline
        />
      </div>

      {/* Content Overlay */}
      <div
        className={css({
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 2,
        })}
      >
        <Block
          position="absolute"
          top="16px"
          right="16px"
          display="flex"
          alignItems="center"
        >
          <Button
            kind="tertiary"
            size="mini"
            overrides={{
              BaseButton: {
                style: {
                  backgroundColor: "#FFFFFF80",
                  color: "white",
                  borderRadius: "50%",
                },
              },
            }}
          >
            <Volume2 size={20} />
          </Button>
        </Block>

        {/* Right Side Actions */}

        {/* Bottom Content */}
        <Block position="absolute" bottom="0" left="0" right="0" padding="16px">
          {/* User Info */}
          <Block display="flex" alignItems="center" marginBottom="12px">
            <Avatar
              name={username}
              size="scale1000"
              src={profileImage}
              overrides={{
                Root: {
                  style: {
                    border: "2px solid white",
                  },
                },
              }}
            />
            <Block marginLeft="12px" marginRight="auto">
              <Block
                color="white"
                className={css({
                  fontSize: "15px",
                  fontWeight: 600,
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                })}
              >
                {username}
              </Block>
            </Block>
            <Button
              size="mini"
              overrides={{
                BaseButton: {
                  style: {
                    borderRadius: "4px",
                    border: "1px solid white",
                    backgroundColor: "transparent",
                    color: "white",
                    fontSize: "12px",
                    fontWeight: "600",
                    ":hover": {
                      backgroundColor: "transparent",
                      opacity: 0.9,
                    },
                  },
                },
              }}
            >
              Follow
            </Button>
          </Block>

          {/* Caption */}
          <Block
            color="white"
            marginBottom="8px"
            className={css({
              fontSize: "14px",
              lineHeight: "1.4",
              textShadow: "0 1px 2px rgba(0,0,0,0.2)",
            })}
          >
            {text}
          </Block>

          {/* Audio Attribution */}
          <Block
            display="flex"
            alignItems="center"
            color="white"
            marginTop="8px"
            className={css({
              fontSize: "14px",
              opacity: 0.9,
              textShadow: "0 1px 2px rgba(0,0,0,0.2)",
            })}
          >
            <span className={css({ marginRight: "4px" })}>♪</span>
            {audioTitle}
          </Block>
        </Block>
      </div>
      <Block
        position="absolute"
        right="-60px"
        bottom="10px"
        display="flex"
        flexDirection="column"
        gridRowGap="20px"
      >
        <ActionButton icon={<Heart size={28} color="#000" />} label={likes} />
        <ActionButton
          icon={<MessageCircle size={28} color="#000" />}
          label={comments}
        />
        <ActionButton icon={<Share2 size={28} color="#000" />} />
        <ActionButton icon={<Bookmark size={28} color="#000" />} />
        <ActionButton icon={<MoreHorizontal size={28} color="#000" />} />
      </Block>
    </div>
  );
}

function ActionButton({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label?: string;
}) {
  const [css] = useStyletron();
  return (
    <div
      className={css({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "4px",
      })}
    >
      <Button
        kind="tertiary"
        size="mini"
        overrides={{
          BaseButton: {
            style: {
              backgroundColor: "transparent",
              color: "white",
              padding: "4px",
              ":hover": {
                backgroundColor: "rgba(255,255,255,0.1)",
              },
            },
          },
        }}
      >
        {icon}
      </Button>
      {label && (
        <span
          className={css({
            color: "black",
            fontSize: "13px",
            fontWeight: 600,
            textShadow: "0 1px 2px rgba(0,0,0,0.2)",
          })}
        >
          {label}
        </span>
      )}
    </div>
  );
}

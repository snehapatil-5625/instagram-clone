import { useStyletron } from "baseui";
import { Avatar } from "baseui/avatar";
import { Block } from "baseui/block";
import { Button } from "baseui/button";
import { Card, StyledBody, StyledAction } from "baseui/card";

export default function ReelsDesign({
  videoSrc,
  text,
  profileImage,
  username,
  likes,
  comments,
}: any) {
  const [css, $theme] = useStyletron();
  return (
    <div
      className={css({
        width: "100%",
        height: "100%",
        position: "relative",
        // boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
      })}
    >
      <Card
        overrides={{
          Root: {
            style: {
              position: "relative",
              width: "100%",
              height: "100%",
              border: "none",
              borderRadius: "none",
              //textAlign: "center",
            },
          },
        }}
      >
        <div
          className={css({
            position: "relative",
          })}
        >
          <video
            style={{
              width: "90%",
              height: "100%",
              objectFit: "fill",
            }}
            src={videoSrc}
            controls
            autoPlay
            loop
          />
          <Block
            overrides={{
              Block: {
                style: {
                  position: "absolute",
                  bottom: "160px",
                  textalign: "center",
                  color: "#fff",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  fontSize: "18px",
                  fontWeight: "bold",
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
                },
              },
            }}
          >
            {text}
          </Block>
          <Block
            overrides={{
              Block: {
                style: {
                  position: "absolute",
                  bottom: "20px",
                  left: "16px",
                  display: "flex",
                  alignItems: "center",
                  color: "#fff",
                },
              },
            }}
          >
            <Avatar name={username} src={profileImage} size="scale1200" />
            <div
              className={css({
                color: "#fff",
                fontSize: "18px",
              })}
            >
              {username}
            </div>
            <Button
              overrides={{
                BaseButton: {
                  style: {
                    marginLeft: "8px",
                    backgroundColor: "white",
                    color: "black",
                    borderRadius: "20px",
                    paddingLeft: "12px",
                    paddingRight: "12px",
                    fontSize: "14px",
                  },
                },
              }}
            >
              Follow
            </Button>
          </Block>
        </div>
        <div>
          <Block
            overrides={{
              Block: {
                style: {
                  position: "absolute",
                  right: "0px",
                  bottom: "80px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  color: "#fff",
                  gap: "20px",
                },
              },
            }}
          >
            <Button
              overrides={{
                BaseButton: {
                  style: {
                    display: "flex",
                    flexDirection: "column",
                    fontSize: "14px",
                  },
                },
              }}
              kind="tertiary"
              size="mini"
            >
              <img
                className={css({
                  width: "22px",
                  height: "22px",
                })}
                src="/src/assets/favorite.png"
              />
              {likes}
            </Button>
            <Button
              overrides={{
                BaseButton: {
                  style: {
                    display: "flex",
                    flexDirection: "column",
                    fontSize: "14px",
                  },
                },
              }}
              size="mini"
              kind="tertiary"
            >
              <img
                className={css({
                  width: "22px",
                  height: "22px",
                })}
                src="/src/assets/chat.png"
              />
              {comments}
            </Button>
            <Button kind="tertiary" size="mini">
              <img
                className={css({
                  width: "22px",
                  height: "22px",
                })}
                src="/src/assets/send.png"
              />
            </Button>
            <Button kind="tertiary" size="mini">
              <img
                src="/src/assets/bookmark.png"
                className={css({
                  width: "22px",
                  height: "22px",
                })}
              />
            </Button>
          </Block>
        </div>
      </Card>
    </div>
  );
}

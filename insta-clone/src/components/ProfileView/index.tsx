import { useStyletron } from "baseui";
import { Avatar } from "baseui/avatar";
import FollowersDesign from "../FollowersDesign";
import { Button } from "baseui/button";

export default function ProfileView({
  userName,
  name,
}: {
  userName: string;
  name: string;
}) {
  const [css, $theme] = useStyletron();
  return (
    <div
      className={css({
        width: "100%",
        display: "flex",
        flexDirection: "column",
        color: "#000",
        paddingTop: $theme.sizing.scale500,
        paddingBottom: $theme.sizing.scale500,
      })}
    >
      <div
        className={css({
          display: "flex",
          alignItems: "center",
          paddingBottom: $theme.sizing.scale500,
        })}
      >
        <Avatar
          overrides={{
            Root: {
              style: {
                ":hover": {
                  cursor: "pointer",
                },
              },
            },
          }}
          name="Jane Doe"
          size="scale1200"
          src="https://avatars.dicebear.com/api/human/yard.svg?width=285&mood=happy"
        />
        <div
          className={css({
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            marginLeft: $theme.sizing.scale600,
          })}
        >
          <h4
            className={css({
              fontSize: "16px",
              fontWeight: 600,
              margin: 0,
            })}
          >
            {userName}
          </h4>
          {name && (
            <p
              className={css({
                margin: 0,
                fontSize: "16px",
                color: $theme.colors.mono700,
              })}
            >
              {name}
            </p>
          )}
        </div>
      </div>
      <div
        className={css({
          marginTop: $theme.sizing.scale700,
          marginBottom: $theme.sizing.scale500,
        })}
      >
        <FollowersDesign />
      </div>
      <Divider />
      <div
        className={css({
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "4px",
        })}
      >
        <img
          className={css({
            width: "60px",
            height: "60px",
          })}
          src="/src/assets/padlock.png"
        />
        <h3
          className={css({
            margin: 0,
            fontSize: "16px",
            fontWeight: 600,
          })}
        >
          This account is private
        </h3>
        <p
          className={css({
            margin: 0,
            fontSize: "14px",
            color: $theme.colors.mono700,
          })}
        >
          Follow this account to see their photos and videos
        </p>
      </div>
      <Divider />

      <Button
        overrides={{
          BaseButton: {
            style: {
              backgroundColor: "#0095f6",
              ":hover": {
                backgroundColor: "#4c68d7",
              },
              fontSize: "16px",
              fontWeight: "600",
              borderRadius: "9px",
              marginTop: $theme.sizing.scale200,
            },
          },
        }}
        // startEnhancer={() => {
        //   return (
        //     <img
        //       className={css({
        //         width: "25px",
        //         height: "25px",
        //         color: "#fff",
        //       })}
        //       src="/src/assets/add-user.png"
        //     />
        //   );
        // }}
        size="compact"
      >
        Follow
      </Button>
    </div>
  );
}

const Divider = () => {
  const [css, $theme] = useStyletron();
  return (
    <div
      className={css({
        borderBottom: `1px solid ${$theme.colors.mono600}`,
        width: "calc(100% + 32px)",
        marginTop: $theme.sizing.scale500,
        marginBottom: $theme.sizing.scale500,
        marginLeft: "-16px",
        marginRight: "-16px",
      })}
    ></div>
  );
};

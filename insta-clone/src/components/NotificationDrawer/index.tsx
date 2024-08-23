import { useStyletron } from "baseui";
import { Avatar } from "baseui/avatar";
import { Button } from "baseui/button";
import { Drawer } from "baseui/drawer";
import { HeadingMedium, HeadingXSmall } from "baseui/typography";

interface NotificationProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function NotificationDrawer({
  isOpen,
  setIsOpen,
}: NotificationProps) {
  const [css, $theme] = useStyletron();

  return (
    <div>
      <Drawer
        overrides={{
          DrawerContainer: {
            style: {
              borderTopRightRadius: "25px",
              borderBottomRightRadius: "25px",
              width: "420px",
            },
          },
          DrawerBody: {
            style: {
              marginLeft: "0",
              marginRight: 0,
            },
          },
        }}
        anchor="left"
        isOpen={isOpen}
        autoFocus
        onClose={() => setIsOpen(false)}
      >
        <div
          className={css({
            marginLeft: "32px",
            marginRight: "32px",
          })}
        >
          <HeadingMedium margin="0">Notifications</HeadingMedium>
          <HeadingXSmall marginTop="15px" marginBottom="10px">
            This Month
          </HeadingXSmall>
          <Requests userName={"sneha_123"} time={"2w"} />
          <div
            className={css({
              width: "calc(100% + 64px)",
              borderBottom: `1px solid ${$theme.colors.mono500}`,
              marginTop: "10px",
              marginLeft: "-32px",
              marginRight: "-32px",
            })}
          />
          <div>
            <HeadingXSmall marginTop="15px" marginBottom="15px">
              Earlier
            </HeadingXSmall>
            <div
              className={css({
                display: "flex",
                alignItems: "center",
                gap: "20px",
              })}
            >
              <img
                className={css({
                  width: "50px",
                  height: "50px",
                })}
                src="/src/assets/infinity-logo.png"
              />
              <p
                className={css({
                  fontSize: "16px",
                })}
              >
                This is a yearly reminder of Instagram's Terms of Use. Learn
                more{" "}
                <span
                  className={css({
                    color: $theme.colors.mono700,
                  })}
                >
                  9w
                </span>
              </p>
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
}

const Requests = ({ userName, time }: { userName: string; time: string }) => {
  const [css, $theme] = useStyletron();
  return (
    <div
      className={css({
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: $theme.sizing.scale300,
      })}
    >
      <div
        className={css({
          display: "flex",
          gap: "15px",
          alignItems: "center",
        })}
      >
        <Avatar
          name="Jane Doe"
          size="scale1000"
          src="https://avatars.dicebear.com/api/human/yard.svg?width=285&mood=happy"
        />
        <p
          className={css({
            fontSize: "16px",
          })}
        >
          <span
            className={css({
              fontSize: "18px",
              fontWeight: 600,
            })}
          >
            {userName}{" "}
          </span>
          started follwing you.{" "}
          <span
            className={css({
              color: $theme.colors.mono700,
            })}
          >
            {time}
          </span>
        </p>
      </div>
      <div>
        <Button
          size="compact"
          overrides={{
            BaseButton: {
              style: {
                backgroundColor: "#0095f6",
                ":hover": {
                  backgroundColor: "#4c68d7",
                },
                fontSize: "16px",
                fontWeight: 700,
                paddingLeft: $theme.sizing.scale700,
                paddingRight: $theme.sizing.scale700,
                borderRadius: "9px",
                marginLeft: "10px",
              },
            },
          }}
        >
          Follow
        </Button>
      </div>
    </div>
  );
};

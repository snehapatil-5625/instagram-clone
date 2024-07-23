import { useStyletron } from "baseui";
import { Button } from "baseui/button";
import { Avatar } from "baseui/avatar";

export default function HomePage() {
  const [css, $theme] = useStyletron();
  return (
    <div
      className={css({
        width: "100%",
        [$theme.mediaQuery.medium]: {
          maxWidth: "650px",
          margin: "0 auto",
        },
      })}
    >
      <h2
        className={css({
          fontSize: "18px",
          fontWeight: 600,
        })}
      >
        Suggested for you
      </h2>
      {Users.map((user, index) => (
        <UserList
          key={index}
          userName={user.userName}
          name={user.name}
          pic={user.pic}
        />
      ))}
    </div>
  );
}

const UserList = ({
  userName,
  name,
  pic,
}: {
  userName: string;
  name: string;
  pic: any;
}) => {
  const [css, $theme] = useStyletron();
  return (
    <div>
      <div
        className={css({
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: $theme.sizing.scale700,
          paddingBottom: $theme.sizing.scale500,
        })}
      >
        <div
          className={css({
            display: "flex",
            alignItems: "center",
          })}
        >
          <Avatar
            name="Jane Doe"
            size="scale1200"
            src="https://avatars.dicebear.com/api/human/yard.svg?width=285&mood=happy"
          />

          <div
            className={css({
              marginLeft: $theme.sizing.scale500,
            })}
          >
            <h4
              className={css({
                margin: 0,
                fontSize: "16px",
                fontWeight: 600,
              })}
            >
              {userName}
            </h4>
            {name && (
              <p
                className={css({
                  margin: 0,
                  fontSize: "15px",
                  fontWeight: 400,
                  color: $theme.colors.mono700,
                })}
              >
                {name}
              </p>
            )}

            <p
              className={css({
                margin: 0,
                fontSize: "14px",
                fontWeight: 400,
                color: $theme.colors.mono700,
              })}
            >
              Suggested for you
            </p>
          </div>
        </div>

        <div>
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
                  paddingLeft: $theme.sizing.scale700,
                  paddingRight: $theme.sizing.scale700,
                  borderRadius: "9px",
                },
              },
            }}
            size="compact"
          >
            Follow
          </Button>
        </div>
      </div>
    </div>
  );
};

const Users = [
  {
    userName: "abc_123",
    name: "sneha",
    pic: "",
  },
  {
    userName: "abc_123",
    name: "sneha",
    pic: "",
  },
  {
    userName: "abc_123",
    name: "sneha",
    pic: "",
  },
];

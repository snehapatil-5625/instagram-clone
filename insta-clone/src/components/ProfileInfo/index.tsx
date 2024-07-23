import { useStyletron } from "baseui";
import { Button } from "baseui/button";

export default function ProfileInfo() {
  const [css, $theme] = useStyletron();
  return (
    <div
      className={css({
        display: "flex",
        flexDirection: "column",
      })}
    >
      <div
        className={css({
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "10px",
        })}
      >
        <p
          className={css({
            margin: 0,
            fontSize: "18px",
            fontWeight: 400,
            paddingRight: $theme.sizing.scale500,
          })}
        >
          UserName
        </p>
        <Button
          overrides={{
            BaseButton: {
              style: {
                ...$theme.typography.LabelMedium,
                fontWeight: "bold",
              },
            },
          }}
          kind="secondary"
          size="compact"
        >
          Edit profile
        </Button>
        <Button
          overrides={{
            BaseButton: {
              style: {
                ...$theme.typography.LabelMedium,
                fontWeight: "bold",
              },
            },
          }}
          kind="secondary"
          size="compact"
        >
          View archive
        </Button>
        <Button
          overrides={{
            BaseButton: {
              style: {
                ...$theme.typography.LabelMedium,
                fontWeight: "bold",
              },
            },
          }}
          kind="secondary"
          size="compact"
        >
          Ad tools
        </Button>
        <Button
          overrides={{
            BaseButton: {
              style: {
                ":hover": {
                  backgroundColor: "none",
                },
              },
            },
          }}
          kind="tertiary"
          size="compact"
        >
          <img
            className={css({
              width: "25px",
              height: "25px",
            })}
            src="/src/assets/settings.png"
          />
        </Button>
      </div>
      <div
        className={css({
          display: "flex",
          gap: "30px",
          paddingTop: $theme.sizing.scale800,
        })}
      >
        <p
          className={css({
            ...$theme.typography.LabelLarge,
            display: "flex",
            alignItems: "center",
            margin: 0,
          })}
        >
          <span
            className={css({
              fontWeight: "bold",
              marginRight: $theme.sizing.scale200,
            })}
          >
            3
          </span>
          posts
        </p>
        <p
          className={css({
            ...$theme.typography.LabelLarge,
            margin: 0,
            cursor: "pointer",
          })}
        >
          <span
            className={css({
              fontWeight: "bold",
              marginRight: $theme.sizing.scale200,
            })}
          >
            20
          </span>{" "}
          followers
        </p>
        <p
          className={css({
            ...$theme.typography.LabelLarge,
            margin: 0,
            cursor: "pointer",
          })}
        >
          <span
            className={css({
              fontWeight: "bold",
              marginRight: $theme.sizing.scale200,
            })}
          >
            0
          </span>
          following
        </p>
      </div>
      <Information
        name={"Anthaathi private limited"}
        des={" At Anthaathi, We Turn Ideas into Digital Realities."}
        address={
          "Dhanvantari bavan,near bus stand,Beside tourist hotel, Kolhapur 416001"
        }
        service={"Product/service"}
      />
    </div>
  );
}

const Information = ({
  name,
  des,
  address,
  service,
}: {
  name: string;
  des: string;
  address: string;
  service: string;
}) => {
  const [css, $theme] = useStyletron();
  return (
    <div
      className={css({
        paddingTop: $theme.sizing.scale800,
        paddingBottom: $theme.sizing.scale500,
        color: $theme.colors.primaryA,
      })}
    >
      {name && (
        <h4
          className={css({
            margin: 0,
          })}
        >
          {name}
        </h4>
      )}
      {service && (
        <p
          className={css({
            margin: 0,
            fontSize: "15px",
            color: $theme.colors.mono700,
          })}
        >
          {service}
        </p>
      )}
      {des && (
        <p
          className={css({
            margin: 0,
            fontSize: "15px",
          })}
        >
          {des}
        </p>
      )}

      {address && (
        <p
          className={css({
            margin: 0,
            fontSize: "15px",
            color: $theme.colors.mono700,
          })}
        >
          {address}
        </p>
      )}

      <p
        className={css({
          marginTop: $theme.sizing.scale500,
          fontSize: "15px",
        })}
      >
        1 account reached in the last 30 days.{" "}
        <span
          className={css({
            fontWeight: 600,
            cursor: "pointer",
          })}
        >
          View insights
        </span>
      </p>
    </div>
  );
};

import { useStyletron } from "baseui";
import { Button } from "baseui/button";
import { useState } from "react";
import SettingsPopup from "../SettingsPopup";

export default function ProfileInfo() {
  const [css, $theme] = useStyletron();
  const [isOpen, setIsOpen] = useState(false);
  function close() {
    setIsOpen(false);
  }
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
          alignItems: "center",
          gap: "10px",
          flexWrap: "wrap",
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
                fontSize: "15px",
                fontWeight: "bold",
                padding: "8px 12px",
                borderRadius: "8px",
              },
            },
          }}
          kind="secondary"
          size="mini"
        >
          Edit profile
        </Button>
        <Button
          overrides={{
            BaseButton: {
              style: {
                fontSize: "15px",
                fontWeight: "bold",
                padding: "8px 12px",
                borderRadius: "8px",
              },
            },
          }}
          kind="secondary"
          size="mini"
        >
          View archive
        </Button>
        <Button
          overrides={{
            BaseButton: {
              style: {
                fontSize: "15px",
                fontWeight: "bold",
                padding: "8px 12px",
                borderRadius: "8px",
              },
            },
          }}
          kind="secondary"
          size="mini"
        >
          Ad tools
        </Button>
        <Button
          onClick={() => setIsOpen(true)}
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
          size="mini"
        >
          <img
            className={css({
              width: "22px",
              height: "22px",
            })}
            src="/src/assets/settings.png"
          />
        </Button>
      </div>
      <div
        className={css({
          display: "none",
          gap: "30px",
          paddingTop: $theme.sizing.scale800,
          [$theme.mediaQuery.medium]: {
            display: "flex",
          },
        })}
      >
        <p
          className={css({
            ...$theme.typography.LabelMedium,
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
            ...$theme.typography.LabelMedium,
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
            ...$theme.typography.LabelMedium,
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
      {isOpen && <SettingsPopup isOpen={isOpen} close={close} />}
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
            ...$theme.typography.LabelMedium,
            fontWeight: 600,
            textTransform: "capitalize",
          })}
        >
          {name}
        </h4>
      )}
      {service && (
        <p
          className={css({
            margin: 0,
            fontSize: "14px",
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
            fontSize: "14px",
          })}
        >
          {des}
        </p>
      )}

      {address && (
        <p
          className={css({
            margin: 0,
            fontSize: "14px",
            color: $theme.colors.mono700,
          })}
        >
          {address}
        </p>
      )}

      <p
        className={css({
          marginTop: $theme.sizing.scale500,
          fontSize: "14px",
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

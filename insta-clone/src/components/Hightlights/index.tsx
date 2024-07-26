import { useStyletron } from "baseui";
import { Button } from "baseui/button";

export default function Highlights({ label }: { label: string }) {
  const [css, $theme] = useStyletron();
  return (
    <div
      className={css({
        width: "100%",
        display: "flex",
        flexDirection: "column",
        paddingTop: $theme.sizing.scale1200,
        paddingBottom: $theme.sizing.scale800,
        justifyContent: "flex-start",
        gap: $theme.sizing.scale200,
        alignItems: "center",
      })}
    >
      <Button
        overrides={{
          BaseButton: {
            style: {
              width: "90px",
              height: "90px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              borderRadius: "50%",
              backgroundColor: $theme.colors.mono100,
              border: `1px solid ${$theme.colors.mono400}`,
              ":hover": {
                backgroundColor: "none",
              },
            },
          },
        }}
        shape="circle"
        size="large"
        kind="tertiary"
      >
        <img
          className={css({
            width: "80px",
          })}
          src="/src/assets/plus-new.png"
        />
      </Button>
      <div
        className={css({
          ...$theme.typography.LabelMedium,
          color: $theme.colors.black,
        })}
      >
        {label}
      </div>
    </div>
  );
}

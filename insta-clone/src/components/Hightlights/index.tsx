import { useStyletron } from "baseui";
import { Button } from "baseui/button";

export default function Highlights() {
  const [css, $theme] = useStyletron();
  return (
    <div
      className={css({
        display: "flex",
        flexDirection: "column",
        paddingTop: $theme.sizing.scale500,
        paddingBottom: $theme.sizing.scale500,
        // alignItems: "center",
        justifyContent: "center",
        gap: $theme.sizing.scale200,
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
        <div></div>
      </Button>
    </div>
  );
}

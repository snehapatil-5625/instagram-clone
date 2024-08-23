import { useStyletron } from "baseui";

export default function FollowersDesign() {
  const [css, $theme] = useStyletron();
  return (
    <div
      className={css({
        display: "flex",
        justifyContent: "space-around",
        width: "100%",
      })}
    >
      {Data.map((item) => (
        <div
          className={css({
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          })}
        >
          <div
            className={css({
              fontSize: "14px",
              fontWeight: 600,
            })}
          >
            {item.count}
          </div>
          <div
            className={css({
              fontSize: "14px",
              color: $theme.colors.mono700,
            })}
          >
            {item.title}
          </div>
        </div>
      ))}
    </div>
  );
}

const Data = [
  {
    title: "posts",
    count: "3",
  },
  {
    title: "followers",
    count: "20",
  },
  {
    title: "following",
    count: "0",
  },
];

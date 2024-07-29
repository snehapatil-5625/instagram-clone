import { useStyletron } from "baseui";

export default function Footer() {
  const [css, $theme] = useStyletron();
  return (
    <div
      className={css({
        maxWidth: "1200px",
        margin: "0 auto",
        display: "flex",
        justifyContent: "space-between",
      })}
    >
      {items.map((item) => (
        <div>
          <a
            href={item.href}
            className={css({
              color: $theme.colors.mono700,
              ...$theme.typography.LabelMedium,
              textDecoration: "none",
            })}
          >
            {item.name}
          </a>
        </div>
      ))}
    </div>
  );
}

const items = [
  {
    name: "Meta",
    href: "",
  },
  {
    name: "About",
    href: "",
  },
  {
    name: "Blog",
    href: "",
  },
  {
    name: "Jobs",
    href: "",
  },
  {
    name: "Help",
    href: "",
  },
  {
    name: "API",
    href: "",
  },
  {
    name: "Privacy",
    href: "",
  },
  {
    name: "Terms",
    href: "",
  },
  {
    name: "Locations",
    href: "",
  },
  {
    name: "Instagram Lite",
    href: "",
  },
  {
    name: "Threads",
    href: "",
  },
  {
    name: "Contact Uploading & Non-Users",
    href: "",
  },
  {
    name: "Meta Verified",
    href: "",
  },
];

import { useStyletron } from "baseui";
import { Select, Value } from "baseui/select";
import React from "react";

export default function Footer() {
  const [css, $theme] = useStyletron();
  const [value, setValue] = React.useState<Value>([{ id: "English" }]);
  return (
    <div
      className={css({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      })}
    >
      <div
        className={css({
          display: "none",
          [$theme.mediaQuery.medium]: {
            width: "100%",
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            alignContent: "center",
            gap: "10px",
            padding: $theme.sizing.scale600,
          },
          [$theme.mediaQuery.large]: {
            maxWidth: "900px",
            margin: "0 auto",
          },
        })}
      >
        {items.map((item) => (
          <div>
            <a
              href={item.href}
              className={css({
                color: $theme.colors.mono700,
                fontSize: "12px",
                textDecoration: "none",
              })}
            >
              {item.name}
            </a>
          </div>
        ))}
      </div>
      <div
        className={css({
          display: "none",
          alignItems: "center",
          gap: "10px",
          [$theme.mediaQuery.medium]: {
            display: "flex",
          },
        })}
      >
        <Select
          overrides={{
            ControlContainer: {
              style: {
                backgroundColor: "none",
                border: "none",
              },
            },
            ValueContainer: {
              style: {
                paddingTop: 0,
                paddingBottom: 0,
              },
            },
          }}
          options={[
            { id: "English" },
            { id: "Marathi" },
            { id: "Hindi" },
            { id: "English (UK)" },
          ]}
          labelKey="id"
          onChange={({ value }) => setValue(value)}
          value={value}
        />
        <p
          className={css({
            fontSize: "12px",
            color: $theme.colors.mono700,
            margin: 0,
            whiteSpace: "nowrap",
          })}
        >
          © 2024 Instagram from Meta
        </p>
      </div>
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

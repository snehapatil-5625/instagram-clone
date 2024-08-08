import { StatefulMenu } from "baseui/menu";

export default function CreateMenu() {
  return (
    <div>
      <StatefulMenu
        items={[
          {
            label: "Post",
          },
          {
            label: "Live Video",
          },
        ]}
      />
    </div>
  );
}

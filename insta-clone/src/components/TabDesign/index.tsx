import { useStyletron } from "baseui";
import { StatefulTabs, Tab } from "baseui/tabs";

export default function TabDesign() {
  const [css, $theme] = useStyletron();
  return (
    <div
      className={css({
        display: "flex",
      })}
    >
      <StatefulTabs initialState={{ activeKey: "0" }} renderAll>
        <Tab>Tab 1 content</Tab>
        <Tab>Tab 2 content</Tab>
        <Tab>Tab 3 content</Tab>
      </StatefulTabs>
    </div>
  );
}

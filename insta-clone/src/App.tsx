import "./App.css";
import { Client as Styletron } from "styletron-engine-monolithic";
import { Provider as StyletronProvider } from "styletron-react";
import { LightTheme, BaseProvider } from "baseui";
import Router from "./Router";
import DefaultLayout from "./layouts/DefaultLayout";

const engine = new Styletron();
function App() {
  return (
    <StyletronProvider value={engine}>
      <BaseProvider
        theme={LightTheme}
        zIndex={9999}
        overrides={{
          AppContainer: {
            style: {
              height: "100%",
              width: "100%",
            },
          },
        }}
      >
        <DefaultLayout />
      </BaseProvider>
    </StyletronProvider>
  );
}

export default App;

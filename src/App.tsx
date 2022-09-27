import { Provider } from "jotai";
import { FC } from "react";
import { euromillionsAtom } from "./atoms/grid.atom";
import { MainPage } from "./pages/MainPage";
import { GenericProvider } from "./providers/GenericProvider";
import { getEuromillions } from "./services/euromillions.service";

export const App: FC = () => (
  <Provider>
    <GenericProvider promise={getEuromillions} atom={euromillionsAtom}>
      <MainPage />
    </GenericProvider>
  </Provider>
);

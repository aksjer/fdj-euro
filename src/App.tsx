import { Provider } from "jotai";
import { FC } from "react";
import { euromillionsAtom } from "./atoms/grid.atom";
import { mockEuromillions } from "./db/euromillions.db";
import { MainPage } from "./pages/MainPage";
import { GenericProvider } from "./providers/GenericProvider";
// import { apiUrl } from "./utils/constants.utils";

export const App: FC = () => (
  <Provider>
    <GenericProvider
      // url={`${apiUrl}/apigw/rtg/rest/euromillions`}
      atom={euromillionsAtom}
      mock={mockEuromillions}
    >
      <MainPage />
    </GenericProvider>
  </Provider>
);

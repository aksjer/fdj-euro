import { mockEuromillions } from "../db/euromillions.db";
import { getFakeAxiosResponse } from "../utils/axios.utils";

// export const getEuromillions = () =>
//   axios.get<Euromillions>(`${apiUrl}/apigw/rtg/rest/euromillions`);

export const getEuromillions = () =>
  getFakeAxiosResponse(mockEuromillions, 1000);

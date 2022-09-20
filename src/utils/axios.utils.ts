import { AxiosResponse } from "axios";

export const getFakeAxiosResponse = (
  data: any,
  delay = 500
): Promise<AxiosResponse<any>> =>
  new Promise((r) =>
    setTimeout(() => r({ data } as AxiosResponse<any>), delay)
  );

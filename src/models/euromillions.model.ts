import { DrawConfiguration } from "./draw-configuration.model";
import { Jackpot } from "./jackpot.model";
import { Multiple } from "./multiple/multiple.model";
import { State } from "./state.model";

export interface Euromillions {
  name: string;
  state: State;
  drawConfiguration: DrawConfiguration;
  jackpot: Jackpot;
  multiples: Multiple[];
  subscriptionEnabled: boolean;
}

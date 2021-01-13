import { Client, IClient } from '@civ-clone/core-client/Client';
import Civilization from '@civ-clone/core-civilization/Civilization';
export interface IAIClient extends IClient {
  chooseCivilization(choices: typeof Civilization[]): void;
  chooseLeader(civilization: Civilization): void;
}
export declare class AIClient extends Client implements IAIClient {
  chooseCivilization(choices: typeof Civilization[]): void;
  chooseLeader(civilization: Civilization): void;
}
export default AIClient;

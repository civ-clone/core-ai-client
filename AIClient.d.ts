import { Client, IClient } from '@civ-clone/core-client/Client';
import { LeaderRegistry } from '@civ-clone/core-civilization/LeaderRegistry';
import Civilization from '@civ-clone/core-civilization/Civilization';
import Player from '@civ-clone/core-player/Player';
export interface IAIClient extends IClient {
  chooseCivilization(choices: typeof Civilization[]): void;
  chooseLeader(civilization: Civilization): void;
}
export declare class AIClient extends Client implements IAIClient {
  #private;
  constructor(
    player: Player,
    leaderRegistry?: LeaderRegistry,
    randomNumberGenerator?: () => number
  );
  chooseCivilization(choices: typeof Civilization[]): void;
  chooseLeader(civilization: Civilization): void;
}
export default AIClient;

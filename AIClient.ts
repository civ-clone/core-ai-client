import { Client, IClient } from '@civ-clone/core-client/Client';
import {
  LeaderRegistry,
  instance as leaderRegistryInstance,
} from '@civ-clone/core-civilization/LeaderRegistry';
import Civilization from '@civ-clone/core-civilization/Civilization';
import { IConstructor } from '@civ-clone/core-registry/Registry';
import Player from '@civ-clone/core-player/Player';

export interface IAIClient extends IClient {
  chooseCivilization(choices: typeof Civilization[]): void;
  chooseLeader(civilization: Civilization): void;
}

export class AIClient extends Client implements IAIClient {
  #leaderRegistry: LeaderRegistry;

  constructor(
    player: Player,
    leaderRegistry: LeaderRegistry = leaderRegistryInstance
  ) {
    super(player);

    this.#leaderRegistry = leaderRegistry;
  }

  chooseCivilization(choices: typeof Civilization[]): void {
    const Random = choices[Math.floor(choices.length * Math.random())],
      player = this.player(),
      civilization = new Random();

    player.setCivilization(civilization);

    this.chooseLeader(civilization);
  }

  chooseLeader(civilization: Civilization): void {
    const leaders = this.#leaderRegistry.getByCivilization(
      civilization.constructor as IConstructor<Civilization>
    );

    const RandomLeader = leaders[Math.floor(Math.random() * leaders.length)];

    civilization.setLeader(new RandomLeader());
  }
}

export default AIClient;

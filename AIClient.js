"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AIClient = void 0;
const Client_1 = require("@civ-clone/core-client/Client");
const LeaderRegistry_1 = require("@civ-clone/core-civilization/LeaderRegistry");
class AIClient extends Client_1.Client {
    chooseCivilization(choices) {
        const Random = choices[Math.floor(choices.length * Math.random())], player = this.player(), civilization = new Random();
        player.setCivilization(civilization);
        this.chooseLeader(civilization);
    }
    chooseLeader(civilization) {
        const leaders = LeaderRegistry_1.instance.getByCivilization(civilization.constructor);
        const RandomLeader = leaders[Math.floor(Math.random() * leaders.length)];
        civilization.setLeader(new RandomLeader());
    }
}
exports.AIClient = AIClient;
exports.default = AIClient;
//# sourceMappingURL=AIClient.js.map
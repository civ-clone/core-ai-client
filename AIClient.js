"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _leaderRegistry;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AIClient = void 0;
const Client_1 = require("@civ-clone/core-client/Client");
const LeaderRegistry_1 = require("@civ-clone/core-civilization/LeaderRegistry");
class AIClient extends Client_1.Client {
    constructor(player, leaderRegistry = LeaderRegistry_1.instance) {
        super(player);
        _leaderRegistry.set(this, void 0);
        __classPrivateFieldSet(this, _leaderRegistry, leaderRegistry);
    }
    chooseCivilization(choices) {
        const Random = choices[Math.floor(choices.length * Math.random())], player = this.player(), civilization = new Random();
        player.setCivilization(civilization);
        this.chooseLeader(civilization);
    }
    chooseLeader(civilization) {
        const leaders = __classPrivateFieldGet(this, _leaderRegistry).getByCivilization(civilization.constructor);
        const RandomLeader = leaders[Math.floor(Math.random() * leaders.length)];
        civilization.setLeader(new RandomLeader());
    }
}
exports.AIClient = AIClient;
_leaderRegistry = new WeakMap();
exports.default = AIClient;
//# sourceMappingURL=AIClient.js.map
"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _AIClient_leaderRegistry, _AIClient_randomNumberGenerator;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AIClient = void 0;
const Client_1 = require("@civ-clone/core-client/Client");
const LeaderRegistry_1 = require("@civ-clone/core-civilization/LeaderRegistry");
class AIClient extends Client_1.Client {
    constructor(player, leaderRegistry = LeaderRegistry_1.instance, randomNumberGenerator = () => Math.random()) {
        super(player);
        _AIClient_leaderRegistry.set(this, void 0);
        _AIClient_randomNumberGenerator.set(this, void 0);
        __classPrivateFieldSet(this, _AIClient_leaderRegistry, leaderRegistry, "f");
        __classPrivateFieldSet(this, _AIClient_randomNumberGenerator, randomNumberGenerator, "f");
    }
    chooseCivilization(choices) {
        const Random = choices[Math.floor(choices.length * __classPrivateFieldGet(this, _AIClient_randomNumberGenerator, "f").call(this))], player = this.player(), civilization = new Random();
        player.setCivilization(civilization);
        this.chooseLeader(civilization);
    }
    chooseLeader(civilization) {
        const leaders = __classPrivateFieldGet(this, _AIClient_leaderRegistry, "f").getByCivilization(civilization.constructor);
        const RandomLeader = leaders[Math.floor(__classPrivateFieldGet(this, _AIClient_randomNumberGenerator, "f").call(this) * leaders.length)];
        civilization.setLeader(new RandomLeader());
    }
}
exports.AIClient = AIClient;
_AIClient_leaderRegistry = new WeakMap(), _AIClient_randomNumberGenerator = new WeakMap();
exports.default = AIClient;
//# sourceMappingURL=AIClient.js.map
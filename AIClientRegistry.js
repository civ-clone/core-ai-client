"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AIClientRegistry = void 0;
const ConstructorRegistry_1 = require("@civ-clone/core-registry/ConstructorRegistry");
const AIClient_1 = require("./AIClient");
class AIClientRegistry extends ConstructorRegistry_1.ConstructorRegistry {
    constructor() {
        super(AIClient_1.default);
    }
}
exports.AIClientRegistry = AIClientRegistry;
exports.default = AIClientRegistry;
//# sourceMappingURL=AIClientRegistry.js.map
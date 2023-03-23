import { Client, IClient } from '@civ-clone/core-client/Client';
export interface IAIClient extends IClient {}
export declare class AIClient extends Client implements IAIClient {}
export default AIClient;

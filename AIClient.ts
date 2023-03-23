import { Client, IClient } from '@civ-clone/core-client/Client';

export interface IAIClient extends IClient {}

export class AIClient extends Client implements IAIClient {}

export default AIClient;

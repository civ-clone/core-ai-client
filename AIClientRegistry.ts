import {
  ConstructorRegistry,
  IConstructorRegistry,
} from '@civ-clone/core-registry/ConstructorRegistry';
import AIClient from './AIClient';

export class AIClientRegistry
  extends ConstructorRegistry<AIClient>
  implements IConstructorRegistry<AIClient> {
  constructor() {
    super(AIClient);
  }
}

export default AIClientRegistry;

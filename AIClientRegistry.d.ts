import {
  ConstructorRegistry,
  IConstructorRegistry,
} from '@civ-clone/core-registry/ConstructorRegistry';
import AIClient from './AIClient';
export declare class AIClientRegistry
  extends ConstructorRegistry<AIClient>
  implements IConstructorRegistry<AIClient>
{
  constructor();
}
export declare const instance: AIClientRegistry;
export default AIClientRegistry;

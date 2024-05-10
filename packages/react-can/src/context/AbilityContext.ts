import { createContext } from 'react';
import { UseAbility } from '../types/Ability';

const AbilityContext = createContext<UseAbility>({} as UseAbility);

export default AbilityContext;

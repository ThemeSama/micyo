import { useContext } from 'react';
import AbilityContext from '../context/AbilityContext';
import { UseAbility } from '../types/Ability';

/**
 * Abilities Service - Get, modify, clear or remove abilities
 * @returns UseAbility - Abilities context
 */
const useAbility = (): UseAbility => useContext(AbilityContext);

export default useAbility;

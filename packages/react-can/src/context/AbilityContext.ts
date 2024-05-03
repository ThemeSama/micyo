'use client';
import { createContext } from 'react';
import { UseAbility } from '../types/Ability';

const AbilityContext = createContext<UseAbility | undefined>(undefined);

export default AbilityContext;

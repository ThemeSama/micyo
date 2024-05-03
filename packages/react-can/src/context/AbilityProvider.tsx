'use client';
import { ReactNode, useCallback, useEffect, useState } from 'react';
import { AbilityProviderProps, UseAbility } from '../types/Ability';
import AbilityContext from './AbilityContext';

export const AbilityProvider = ({ list, children }: AbilityProviderProps) => {
  const [abilities, setAbilities] = useState<string[]>([]);

  // set default ability list
  useEffect(() => {
    setAbilities(list);
  }, [list]);

  // add new ability
  const addAbility = useCallback(
    (ability: string) => {
      setAbilities((currentAbilities) =>
        currentAbilities.indexOf(ability) === -1
          ? [...currentAbilities, ability]
          : [...currentAbilities]
      );
    },
    [setAbilities]
  );

  // add new abilities
  const addAbilities = useCallback(
    (abilities: string[]) => {
      setAbilities((currentAbilities) => {
        const newAbilities = [...currentAbilities];

        abilities.forEach((ability) => {
          if (newAbilities.indexOf(ability) === -1) {
            newAbilities.push(ability);
          }
        });

        return [...newAbilities];
      });
    },
    [setAbilities]
  );

  // remove ability
  const removeAbility = useCallback(
    (ability: string) => {
      setAbilities((currentAbilities) =>
        currentAbilities.indexOf(ability) >= 0
          ? [...currentAbilities.splice(currentAbilities.indexOf(ability), 1)]
          : [...currentAbilities]
      );
    },
    [setAbilities]
  );

  // remove abilities
  const removeAbilities = useCallback(
    (abilities: string[]) => {
      setAbilities((currentAbilities) => [
        ...currentAbilities.filter((ability) => abilities.indexOf(ability) === -1)
      ]);
    },
    [setAbilities]
  );

  // clear abilities
  const clearAbilities = useCallback(() => {
    setAbilities([]);
  }, [setAbilities]);

  /** Check has ability */
  const can = useCallback((ability: string) => abilities.indexOf(ability) >= 0, [abilities]);

  const contextValues: UseAbility = {
    abilities,
    setAbilities,
    addAbility,
    addAbilities,
    removeAbility,
    removeAbilities,
    clearAbilities,
    can
  };

  return <AbilityContext.Provider value={contextValues}>{children}</AbilityContext.Provider>;
};

'use client';
import * as React from 'react';
import { useCallback, useEffect, useState, useRef } from 'react';
import { AbilityProviderProps, UseAbility } from '../types/Ability';
import AbilityContext from './AbilityContext';
import useStorage from '../hooks/useStorage';

const MICYO_STORAGE_KEY = 'micyo_abilities';

export const AbilityProvider = ({ list, persistent = true, children }: AbilityProviderProps) => {
  const { setItem, getItem } = useStorage();
  const [abilities, setAbilities] = useState<string[]>([]);
  const isFirstRender = useRef(true);

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
      setAbilities((currentAbilities) => [
        ...currentAbilities.filter((currentAbility) => currentAbility !== ability)
      ]);
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

  // get latest changes from localStorage
  useEffect(() => {
    const abilityList = getItem(MICYO_STORAGE_KEY);

    if (abilityList !== null && abilityList !== '' && isFirstRender.current && persistent) {
      setAbilities(JSON.parse(abilityList || ''));
    } else if (isFirstRender.current || !persistent) {
      setAbilities(list || []);
    }
  }, [setAbilities, getItem, list, persistent]);

  const updateAbilities = useCallback(
    ({ key, newValue, oldValue }: StorageEvent) => {
      if (key === MICYO_STORAGE_KEY && newValue !== null) {
        setAbilities(JSON.parse(newValue));
      } else if (key === MICYO_STORAGE_KEY && newValue === null) {
        setAbilities(JSON.parse(oldValue || ''));
      }
    },
    [setAbilities]
  );

  // listen localStorage changes
  useEffect(() => {
    window.addEventListener('storage', updateAbilities);

    return () => window.removeEventListener('storage', updateAbilities);
  }, []);

  // push abilities update to across tabs
  useEffect(() => {
    if (!isFirstRender.current && persistent) {
      setItem(MICYO_STORAGE_KEY, JSON.stringify(abilities));
    } else {
      isFirstRender.current = false;
    }
  }, [abilities, setItem, persistent]);

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

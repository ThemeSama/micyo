import * as React from 'react';
import useAbility from '../hooks/useAbility';
import { CanProps } from '../types/Ability';

/**
 * Check ability and cannot render content
 */
export const Cannot = ({ i, children }: CanProps) => {
  const { can } = useAbility();
  return !can(i) && <>{children}</>;
};

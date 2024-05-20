import * as React from 'react';
import useAbility from '../hooks/useAbility';
import { CannotProps } from '../types/Ability';

/**
 * Check ability and cannot render content
 */
export const Cannot = ({ i, children }: CannotProps) => {
  const { can } = useAbility();
  return !can(i) && <>{children}</>;
};

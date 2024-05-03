import { ReactNode, ReactElement } from 'react';
import useAbility from '../hooks/useAbility';
import { CanProps } from '../types/Ability';

/**
 * Check ability and cannot render content
 * @param params {CanProps} - Ability checker
 * @param params.i {string} - Ability name
 * @param params.children {ReactElement} - Content
 * @returns {ReactNode} Content
 */
export const Cannot = ({ i, children }: CanProps): ReactNode => {
  const { can } = useAbility();
  return !can(i) && children;
};

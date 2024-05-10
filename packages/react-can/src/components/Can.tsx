import useAbility from '../hooks/useAbility';
import { CanProps } from '../types/Ability';

/**
 * Check ability and render content
 * @param params {CanProps} - Ability checker
 * @param params.i {string} - Ability name
 * @param params.children {ReactElement} - Content
 * @returns {ReactNode} Content
 */
export const Can = ({ i, children }: CanProps) => {
  const { can } = useAbility();
  return can(i) && children;
};

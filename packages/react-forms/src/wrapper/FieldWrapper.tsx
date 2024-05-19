import * as React from 'react';
import { ReactNode } from 'react';
import styled from 'styled-components';
import { gridColumn } from '../helpers/grid';
import { TColSpan } from '../types';

interface IFieldWrapper {
  type?: string;
  colSpan?: number;
  className?: string;
  children: ReactNode;
}

const StyledWrapper = styled.div<{ $colSpan: TColSpan }>`
  ${(props) => gridColumn(props?.$colSpan)}
`;

const FieldWrapper = ({ colSpan, className = '', type, children }: IFieldWrapper) => {
  return (
    <StyledWrapper className={`micyo-${type}-field ${className}`} $colSpan={colSpan}>
      {children}
    </StyledWrapper>
  );
};

export default FieldWrapper;

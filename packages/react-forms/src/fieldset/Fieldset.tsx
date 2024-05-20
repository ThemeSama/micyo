import * as React from 'react';
import { ReactNode } from 'react';
import styled from 'styled-components';
import { gridTemplate } from '../helpers/grid';
import { TColumns } from '../types';
import Legend from '../legend/Legend';

interface IFeedback {
  legend?: string;
  columns?: TColumns;
  children: ReactNode;
}

const StyledFieldset = styled.fieldset<{ $columns: TColumns }>`
  ${(props) => gridTemplate(props?.$columns)}
`;

const Fieldset = ({ legend, columns, children }: IFeedback) => {
  return (
    <StyledFieldset className="micyo-fieldset" $columns={columns}>
      {legend && <Legend>{legend}</Legend>}
      {children}
    </StyledFieldset>
  );
};

export default Fieldset;

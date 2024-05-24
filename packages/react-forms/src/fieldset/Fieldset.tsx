import * as React from 'react';
import { ReactNode } from 'react';
import styled from 'styled-components';
import { gridTemplate } from '../helpers/grid';
import { TColumns } from '../types';
import Legend from '../legend/Legend';

interface IFieldset {
  /** Fieldset label */
  legend?: string;
  /** Fieldset's global column settings */
  columns?: TColumns;
  /** Fieldset context */
  children: ReactNode;
}

const StyledFieldset = styled.fieldset<{ $columns: TColumns }>`
  ${(props) => gridTemplate(props?.$columns)}
`;
/**
 * The Fieldset component is used to group several controls as well as labels within a web form.
 */
const Fieldset = ({ legend, columns, children }: IFieldset) => {
  return (
    <StyledFieldset className="micyo-fieldset" $columns={columns}>
      {legend && <Legend>{legend}</Legend>}
      {children}
    </StyledFieldset>
  );
};

export default Fieldset;

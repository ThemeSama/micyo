import { TColumns } from '../types';

const breakPoints: TColumns = {
  xs: '(max-width: 576px)',
  sm: '(min-width: 576px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 992px)',
  xl: '(min-width: 1200px)',
  xxl: '(min-width: 1400px)'
};

export const gridTemplate = (columns: TColumns): string => {
  if (typeof columns === 'object') {
    let mediaQueries: string = 'display: grid;';
    Object.keys(breakPoints).forEach((key: string) => {
      if (columns[key]) {
        mediaQueries += `@media ${breakPoints[key]} {
            grid-template-columns: repeat(${columns[key]}, minmax(0, 1fr))
          }`;
      }
    });

    return mediaQueries;
  }

  return columns ? `display: grid; grid-template-columns: repeat(${columns}, minmax(0, 1fr))` : '';
};

export const gridColumn = (colSpan: TColumns): string => {
  if (typeof colSpan === 'object') {
    let mediaQueries: string = '';
    Object.keys(breakPoints).forEach((key: string) => {
      if (colSpan[key]) {
        mediaQueries += `@media ${breakPoints[key]} {
            grid-column: span ${colSpan[key]} / span ${colSpan[key]}
          }`;
      }
    });

    return mediaQueries;
  }

  return colSpan ? `grid-column: span ${colSpan} / span ${colSpan};` : '';
};

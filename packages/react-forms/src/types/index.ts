/** Column defination for responsive design */
export type TColumns =
  | number
  | {
      [key: string]: any;
      xs?: number | string;
      sm?: number | string;
      md?: number | string;
      lg?: number | string;
      xl?: number | string;
      xxl?: number | string;
    }
  | undefined;

/** Colspan defination for responsive design */
export type TColSpan = TColumns;

export interface BaseField {
  /** Field ID */
  id?: string;
  /** Field label */
  label?: string;
  /** Field name */
  name: string;
  /** Field extra CSS selector */
  className?: string;
  /** Field responsive setting */
  colSpan?: number;
  /** Field description */
  desc?: string;
}

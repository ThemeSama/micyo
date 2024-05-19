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

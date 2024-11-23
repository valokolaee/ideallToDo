import { ReactNode } from "react";

export interface ISimpleTab {
  id: number;
  name: string;
  disable?: boolean;
  item: JSX.Element | ReactNode | ReactNode[];
}

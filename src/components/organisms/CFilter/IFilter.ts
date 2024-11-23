import { ReactNode } from "react";
import { IRadio } from "../CRadioButton/item";


export interface IFilter {
  apply?: (fdm?: IFilterDataModel) => void;
  reset?: () => void;
  search?: (searchKeyWord: string) => void;
  dataModel?: IFilterDataModel;
  children?: ReactNode | ReactNode[];
}


export interface IFilterDataModel {

  searchKeyWord?: string;
  deadLine?: datePeriod;
  priority?: string;
  type?: Partial<IRadio>;
  done?: Partial<IRadio>;
  archived?: Partial<IRadio>;
}


export type datePeriod = {
  from?: string;
  to?: string;
}
import { TColorSet } from "../../../../configs/color/interfaceColor/IBaseColor";

export interface IHeader extends ITrackerHeader {
  title?: string
  fireSideMenu?: () => void
}
export interface ITrackerHeader { colorSet?: TColorSet; }

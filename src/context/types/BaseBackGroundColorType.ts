import { TColorSet } from "../../configs/color/interfaceColor/IBaseColor";

export type BaseBackGroundColorType = {
  color?: TColorSet;
  setColor: (value: TColorSet | undefined) => void;
};

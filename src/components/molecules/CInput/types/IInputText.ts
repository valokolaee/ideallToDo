import { ViewStyle } from 'react-native';
import { IIconSvg } from '../../../utils/interfacesUI/IIconSvg';
import { IStyle } from '../../../utils/interfacesUI/IStyle';
import { IText } from '../../../atoms/Ctext/IText';
import { ITextStared } from '../../../atoms/CTextStared/ITextStared';
import IDropdown from '../CDropDown/IDropdown';
import { IInput } from '../CTextInput/IInput';

export type IInputTextFunction = {
  _onError: (e: string) => void;
};

export interface IObject {
  [key: string]: any;
}
export interface IInputText extends IStyle<ViewStyle> {
  dropDown?: IDropdown;
  inpType?: 'simpleInpt' | 'numPickInput' | 'dropDown';
  title?: ITextStared;
  input?: IInput;
  placeHolder?: IText;
  startIcon?: IIconSvg;
  endIcon?: IIconSvg;
}

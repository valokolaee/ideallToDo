import { IText } from '../../atoms/Ctext/IText';
import { IEvent } from '../../utils/interfacesUI/IEvent';
import { IIconSvg } from '../../utils/interfacesUI/IIconSvg';

export interface IButton extends IEvent {
  disabled?: boolean;
  iText?: IText;
  style?: any;
  buttonColor?: string;
  iIconSvg?: IIconSvg;
  mode?: 'text' | 'outlined' | 'contained';
  textColor?: string;
  buttonType?: TButton;
  notTouch?: boolean;
}

export type TButton = 'button' | 'icon' | 'textIcon'
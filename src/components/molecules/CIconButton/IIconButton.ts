import { IText } from '../../atoms/Ctext/IText';
import { IEvent } from '../../utils/interfacesUI/IEvent';
import { IIconSvg } from '../../utils/interfacesUI/IIconSvg';

export interface IIconButton extends IEvent {
  disabled?: boolean;
  style?: any;
  buttonColor?: string;
  size?: number
  iIconSvg?: IIconSvg;
}

import { ReturnKeyTypeOptions, TextStyle } from 'react-native';
import { IStyle } from '../../../utils/interfacesUI/IStyle';
import { IEvent } from '../../../utils/interfacesUI/IEvent';
import keyboardType from '../types/keyboardType';


export interface IInput extends IStyle<TextStyle> {
  events?: IEvent;
  secureTextEntry?: boolean | undefined;
  editable?: boolean;
  returnKeyType?: ReturnKeyTypeOptions | undefined;
  multiline?: boolean;
  borderColor?: string;
  value?: string;
  placeHoldr?: { text: string | number; color?: string };
  keyboardType?: keyboardType;
  textAlign?: 'left' | 'center' | 'right' | undefined;
  textAlignVertical?: 'auto' | 'top' | 'bottom' | 'center' | undefined;
  variant?: 'outline' | 'underlined' | 'rounded' | 'filled' | 'unstyled';
  maxLength?: number;
}

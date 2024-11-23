import { IStyle } from '../../utils/interfacesUI/IStyle';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import { IEvent } from '../../utils/interfacesUI/IEvent';

export interface IText extends IStyle<TextStyle> {
  holderStyle?: StyleProp<ViewStyle>;
  textAlign?: 'flex-start' | 'flex-end' | 'center' | undefined
  text?: string | number;
  bold?: boolean;
  disabled?: boolean;
  fontSize?: number;
  color?: string | false;
  capitalize?: boolean
}

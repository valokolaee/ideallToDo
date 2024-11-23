import { ViewStyle } from 'react-native';
import { IEvent } from '../../utils/interfacesUI/IEvent';
import { IStyle } from '../../utils/interfacesUI/IStyle';

export interface ICheckbox extends IStyle<ViewStyle> {
  label?: string;
  isChecked?: boolean;
  size?: number
}

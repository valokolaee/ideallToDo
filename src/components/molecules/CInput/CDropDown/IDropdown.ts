import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import { IEvent } from '../../../utils/interfacesUI/IEvent';
import { IStyle } from '../../../utils/interfacesUI/IStyle';
import { IText } from '../../../atoms/Ctext/IText';

export default interface IDropdown extends IStyle<ViewStyle> {
  title?: IText;
  event?: IEvent;
  data: IDropdownData

  search?: boolean;
  defaultButtonText?: string;
  defaultValue?: any;
  defaultValueByIndex?: number;

  allStyles?: {
    buttonStyle?: StyleProp<ViewStyle>;
    buttonTextStyle?: StyleProp<TextStyle>;
    rowStyle?: StyleProp<ViewStyle>;
    rowTextStyle?: StyleProp<TextStyle>;
    dropdownStyle?: StyleProp<ViewStyle>;
    selectedRowStyle?: StyleProp<ViewStyle>;
    searchInputStyle?: StyleProp<ViewStyle>;
    selectedRowTextStyle?: StyleProp<TextStyle>;
  };
}
export interface IDropdownData {
  listPropName?: string[] | string;
  list: any[];
};
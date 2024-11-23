import { ReactNode } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { IHeader } from '../../organisms/CHeader/component/IHeader';
import { IDoubleButtons } from '../../organisms/CDoubleButtons';
import { IButton } from '../../molecules/CButton/IButton';

export interface IBaseView {
  btns?: {
    revers?: boolean;
    seprator?: boolean;
    doubleBtn?: IDoubleButtons;
    singleBtn?: IButton;
  }



  ref?: any;
  style?: StyleProp<ViewStyle>;
  children?: ReactNode | ReactNode[];
}

import { ViewStyle } from 'react-native';
import { IEvent } from '../../utils/interfacesUI/IEvent';
import { IStyle } from '../../utils/interfacesUI/IStyle';

export interface IImage extends IStyle<ViewStyle> {

  url?: string;
}

import { Node } from '@babel/core';
import { TouchableOpacity, View, ViewStyle } from 'react-native';
import { IStyle } from '../../components/utils/interfacesUI/IStyle';
import { useAppSelector } from '../../redux/hooks';
import styler from '../../utilities/styler';

export default ({ children, event, style, touchable, revers, disabled, vertical }: IDirectedView) => {

  const _langRtl = useAppSelector((s) => s.langSlice.rtl)
  const _direction = vertical ? undefined : { flexDirection: _langRtl ? 'row-reverse' : 'row', alignItems: 'center' }
  return (<>{touchable ?
    <TouchableOpacity style={[styler(_direction as ViewStyle), style,]} onPress={event?.onPress} onLongPress={event?.onLongPress} disabled={disabled}>
      {children}
    </TouchableOpacity> :
    <View style={[styler(_direction as ViewStyle), style,]} onTouchEnd={event?.onPress}>
      {children}
    </View>
  }</>);
};
export interface IDirectedView extends IStyle<ViewStyle> {
  children?: Node[] | Node | any;
  revers?: boolean,
  touchable?: boolean
  disabled?: boolean;
  vertical?: boolean;

}
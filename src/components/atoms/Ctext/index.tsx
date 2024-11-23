import React, { FC, memo, useImperativeHandle } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ColorSystem from '../../../configs/color/ColorSystem';
import TextHelper from '../../../utilities/TextHelper';
import { EnumFontSize } from '../../utils/enums/EnumFontSize';
import { IText } from './IText';
import DirectedView from '../../../translation/directedView';

export const CText: FC<IText> = React.forwardRef(
  ({ text, event, style, disabled, bold, color, fontSize, holderStyle, capitalize, textAlign = 'flex-start' }, ref) => {
    useImperativeHandle(ref, () => {
      return {};
    });

    return (
      <DirectedView touchable={!!event} style={[defaultStyle.main, { justifyContent: textAlign }, holderStyle]} event={{ onPress: disabled ? undefined : event?.onPress! }}>

        <Text
          // onPress={disabled ? undefined : event?.onPress!}
          style={[
            // { borderWidth: 1 },
            defaultStyle.txtStyle,
            bold && { fontWeight: 'bold' },
            disabled && { color: ColorSystem.gray!(10) },
            { fontSize: fontSize || EnumFontSize.h5, color: color || ColorSystem.DefaulText },
            // { textAlign: textAlign || 'left' },
            style,
          ]}>
          {capitalize ? TextHelper.capitalize(text!?.toString()) : text?.toString()}
        </Text>
      </DirectedView>
    );
  },
);
export default memo(CText);

const defaultStyle = StyleSheet.create({
  main: {
    // height: 'auto',
    alignItems: 'center'
  },
  txtStyle: {
    color: ColorSystem.gray!(70),
  },
});

import React, { memo } from 'react';
import { Platform, StyleProp, StyleSheet, TouchableOpacity, View, ViewProps, ViewStyle } from 'react-native';
import { Button } from 'react-native-paper';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import styler from '../../../utilities/styler';
import CIconGenerator from '../../atoms/CIconGenerator';
import styleValues, { defaultPadding } from '../../utils/enums/styleValues';
import { IButton } from './IButton';
import { EnumFontSize } from '../../utils/enums/EnumFontSize';
import CText from '../../atoms/Ctext';
import ColorSystem from '../../../configs/color/ColorSystem';
import DirectedView from '../../../translation/directedView';

export default memo(React.forwardRef(
  ({ iText, mode, style, iIconSvg, disabled, onPress, buttonColor, textColor, notTouch }: IButton, ref) => {

    const _color = disabled ? ColorSystem.Disable : (buttonColor || ColorSystem.Primary)
    const size = styleValues.p04


    const _styleCaller = (): { style?: StyleProp<ViewStyle>, txtColor?: string, bacColor?: string } => {
      switch (mode) {
        case 'contained':
          return {
            style: [defStyle.contained, styler({ backgroundColor: _color })],
            bacColor: _color,
            txtColor: textColor || ColorSystem.White
          }
        case 'outlined':
          return {
            style: [defStyle.outlined, styler({ borderColor: _color })],
            txtColor: _color
          }
        case 'text':
        default:
          return { txtColor: textColor || _color }
      }
    }

    return (
      <DirectedView
        touchable={!notTouch}
        event={{ onPress }}
        style={[
          defStyle.main,
          styler({ flexDirection: iIconSvg?.position !== 'end' ? 'row-reverse' : 'row' }),
          _styleCaller().style,
          style
        ]}
      >
        <CText
          text={iText?.text} color={_styleCaller().txtColor} fontSize={size}
          holderStyle={[styler({ flex: 1 }), iText?.holderStyle]}
          style={iText?.style}
          textAlign='center'
        />

        {iIconSvg?.icon?.name && <CIconGenerator
          iconName={iIconSvg!?.icon!?.name(_styleCaller().txtColor)}
          size={size * 1.3}
          style={iIconSvg.style}
        />}

      </DirectedView>
    );
  },
))
const defStyle = StyleSheet.create({
  main: {
    justifyContent: 'center',
    paddingVertical: defaultPadding,
    alignItems: 'center',
    // width: '100%',
    borderRadius: styleValues.r20,
    paddingHorizontal: defaultPadding
  },
  textMode: {},
  outlined: { borderWidth: 1, },
  contained: {}


})

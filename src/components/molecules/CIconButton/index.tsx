import React, { memo } from 'react';
import { StyleSheet } from 'react-native';
import ColorSystem from '../../../configs/color/ColorSystem';
import DirectedView from '../../../translation/directedView';
import styler from '../../../utilities/styler';
import CIconGenerator from '../../atoms/CIconGenerator';
import { EnumFontSize } from '../../utils/enums/EnumFontSize';
import styleValues, { defaultPadding } from '../../utils/enums/styleValues';
import { IIconButton } from './IIconButton';

export default memo(React.forwardRef(
  ({ style, iIconSvg, disabled, onPress, buttonColor, size }: IIconButton, ref) => {

    const _color = disabled ? ColorSystem.Disable : (buttonColor || ColorSystem.Primary)
    const _size = size || EnumFontSize.h3

    return (
      <DirectedView
        touchable
        event={{ onPress }}
        style={[
          defStyle.main,
          styler({ flexDirection: iIconSvg?.position !== 'end' ? 'row-reverse' : 'row' }),
          style
        ]}
      >
        {iIconSvg?.icon?.name && <CIconGenerator
          iconName={iIconSvg!?.icon!?.name(_color)}
          size={_size * 1.3}
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
    // paddingHorizontal: defaultPadding
  },
  textMode: {},
  outlined: { borderWidth: 1, },
  contained: {}


})

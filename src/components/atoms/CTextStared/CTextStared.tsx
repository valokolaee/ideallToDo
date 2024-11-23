import React, { FC, memo, useImperativeHandle } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ColorSystem from '../../../configs/color/ColorSystem';
import { CText } from './../Ctext/index';
import { ITextStared } from './ITextStared';
import DirectedView from '../../../translation/directedView';

export const CTextStared: FC<ITextStared> = React.forwardRef(
  ({ text, isNotRquierd }, ref) => {
    useImperativeHandle(ref, () => {
      return {};
    });

    return (
      <DirectedView >
        <CText {...text} />
        {!isNotRquierd && <Text style={defaultStyle.star}>*</Text>}
      </DirectedView>
    );
  },
);
export default memo(CTextStared);

const defaultStyle = StyleSheet.create({
  star: { color: ColorSystem.Error },
});

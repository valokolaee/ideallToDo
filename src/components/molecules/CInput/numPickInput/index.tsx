import React, { memo } from 'react';
import { StyleSheet } from 'react-native';
import ColorSystem from '../../../../configs/color/ColorSystem';
import CText from '../../../atoms/Ctext';
import styleValues from '../../../utils/enums/styleValues';

export default memo(({ value }: { value?: number | string | undefined }) => <CText style={[defaultStyle.main]} text={value?.toString()} />);

const defaultStyle = StyleSheet.create({
  main: {
    backgroundColor: ColorSystem.gray!(5),
    borderRadius: styleValues.r05,
    paddingHorizontal: styleValues.p01,
    paddingVertical: styleValues.p01,
    // flex: 1,
    padding: 0,
    textAlign: 'center',
  },
});

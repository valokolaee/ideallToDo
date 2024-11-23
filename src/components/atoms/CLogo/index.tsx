import React, { memo } from 'react';
import { StyleSheet } from 'react-native';

import DirectedView from '../../../translation/directedView';
import { ILogo } from './ILogo';
import { CText } from '../Ctext';
import { SvgXml } from 'react-native-svg';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Xml from '../../utils/svgs/Xml';
import ColorSystem from '../../../configs/color/ColorSystem';

export default memo(({ size = 20, style, colors }: ILogo) => {


  return (
    <DirectedView style={[defStyle.main, style]}>
      <SvgXml width={wp(size) * 2.2} height={wp(size)} xml={Xml.fullLogoWithColor(ColorSystem.White!)} />
    </DirectedView>
  );
});


const defStyle = StyleSheet.create({
  main: { justifyContent: 'center' },
});

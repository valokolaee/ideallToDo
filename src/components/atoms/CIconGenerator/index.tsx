import React, { FC, memo } from 'react';
import { RFPercentage } from "react-native-responsive-fontsize";
import { SvgXml } from 'react-native-svg';
import resizer from '../../utils/enums/resizer';
import { IICon } from './IICon';
import { View } from 'react-native';
import DirectedView from '../../../translation/directedView';

export const CIconGenerator: FC<IICon> = ({ iconName, size = 30, style, event }) => {

  return (
    <DirectedView style={[style, { justifyContent: 'center' }]} event={event} touchable={!!event}>
      <SvgXml
        width={resizer(RFPercentage(size / 10!))}
        height={resizer(RFPercentage(size / 10!))}
        xml={typeof iconName === 'string' ? iconName : iconName()}
      />
    </DirectedView>
  );
};

export default memo(CIconGenerator);



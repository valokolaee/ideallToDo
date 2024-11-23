import React from 'react';
import { StyleSheet, View } from 'react-native';
import CButton from '../../../molecules/CButton';
import CGap from '../../../atoms/CGap';
import ColorSystem from '../../../../configs/color/ColorSystem';
import styleValues from '../../../utils/enums/styleValues';
import { IFilter } from '../IFilter';
import DirectedView from '../../../../translation/directedView';

export default ({ apply, reset }: IFilter) => {

  return (
    <DirectedView>
      <CButton
        notTouch
        {...{

          onPress: apply,
          iText: { text: 'apply' },
          style: defStyle.btn,
          color: ColorSystem.Primary,
          fill: 'fill',
        }}
        iText={{ text: 'apply' }}
      />
      <CGap thick={styleValues.p02} />
      <CButton
        notTouch
        {...{
          onPress: reset,
          style: [defStyle.btn, { backgroundColor: ColorSystem.gray!(5) }],
          fill: 'dim',
          color: ColorSystem.Border,
        }}
        iText={{ text: 'reset' }}
      />
    </DirectedView>
  );
};

const defStyle = StyleSheet.create({
  // main: { flexDirection: 'row' },
  btn: { flex: 1 },
});

import { Fragment } from 'react';
import { View, StyleSheet } from 'react-native';
import ColorSystem from '../../../../configs/color/ColorSystem';
import CText from '../../../atoms/Ctext';
import styleValues from '../../../utils/enums/styleValues';
import { ISimpleTab } from '../ISimpleTab';
import styler from '../../../../utilities/styler';
import DirectedView from '../../../../translation/directedView';

export default ({ list, select, selectedIndex }: { list: ISimpleTab[]; select: (index: number) => void; selectedIndex: number }) => {
  return (
    <DirectedView style={defStyle.main}>
      {list.map((item, index) => (
        <CText
          text={item.name}
          style={[defStyle.item,
          list[selectedIndex] === item && { color: ColorSystem.Primary, fontWeight: 'bold', }]}
          holderStyle={styler({ flex: 1, })}
          event={{ onPress() { select(index) } }}
          textAlign='center'
        />
      ))}
    </DirectedView>
  );
};
const defStyle = StyleSheet.create({
  main: {
    borderBottomColor: ColorSystem.gray!(10)
  },
  item: { textAlign: 'center', textAlignVertical: 'center', padding: styleValues.p02 },
});

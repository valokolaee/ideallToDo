import React, { useState, useImperativeHandle, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { ISimpleTab } from './ISimpleTab';
import TabNames from './tabNames';
import Tabs from './tabs';

export default React.forwardRef(({ list, indexReporter, upsideDown, preIndex }: { list: ISimpleTab[], preIndex?: number; upsideDown?: boolean, indexReporter?: (index: number) => void }, ref) => {
  useImperativeHandle(ref, () => { return { movForward, jumpTo }; });
  const [selectedIndex, setSelectedIndex] = useState(preIndex || 0);

  useEffect(() => { indexReporter && indexReporter!(selectedIndex) }, [selectedIndex])
  const movForward = () => {
    var next = selectedIndex + 1;
    next < list?.length && setSelectedIndex(selectedIndex + 1);
  };

  const jumpTo = (tabIndex: number) => { setSelectedIndex(tabIndex); };
  list = list.filter((i) => !i.disable)

  return (
    <View style={[defStyle.main, upsideDown && { flexDirection: 'column-reverse' }]}>
      <TabNames
        list={list}
        selectedIndex={selectedIndex}
        select={setSelectedIndex}
      />
      <Tabs list={list} selected={selectedIndex} />
    </View>
  );
});
const defStyle = StyleSheet.create({
  main: {
    flex: 1,
  },
});

import React, { memo } from 'react';
import { FlatList, ListRenderItem, StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import TextHelper from '../../../utilities/TextHelper';
import CSeprator from '../CSeprator';
import CText from '../Ctext';

import mrvLogs from '../../../utilities/mrvLogs';
import Item from './item';
import { IList } from './IList';

const viewabilityConfig = {
  // waitForInteraction: true,
  itemVisiblePercentThreshold: 95,
};

const CList = ({ list, initialNumToRender, horizontal, wrap, itemHeight, customItem, onScrollEndDrag, onRefresh, noSeparator: noSeprator, refreshing, ListEmptyComponent, numColumns }: IList) => {

  const item: ListRenderItem<any> = ({ item, index }) => {
    return (
      <View key={item?.id} style={{ height: itemHeight || undefined }}>
        <Item >{customItem(item, index)}</Item>
      </View>
    );
  };



  const _contentContainerStyle = () => {

    if (numColumns! > 1) {
      return { alignItems: 'center' }
    } else {
      if (wrap) {
        return defStyle.wrapped
      } else {
        return undefined
      }
    }
  }


  return (

    <FlatList
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={typeof ListEmptyComponent === 'string' ? <CText text={ListEmptyComponent} /> : () => ListEmptyComponent}
      onRefresh={onRefresh}
      refreshing={refreshing}
      data={list}
      renderItem={item}
      onScrollEndDrag={onScrollEndDrag}
      getItemLayout={
        TextHelper.empty(itemHeight)
          ? undefined
          : (data, index) => ({
            length: itemHeight!,
            offset: itemHeight! * index,
            index,
          })
      }
      ItemSeparatorComponent={noSeprator ? undefined : separator}
      viewabilityConfig={viewabilityConfig}
      initialNumToRender={initialNumToRender}
      numColumns={numColumns}
      contentContainerStyle={_contentContainerStyle() as StyleProp<ViewStyle>}

      horizontal={horizontal}
    />


  );
};

const separator = () => <CSeprator />;
// export default memo(Clist)
export default CList

const defStyle = StyleSheet.create({
  wrapped: {
    flexDirection: 'row', flexWrap: 'wrap'
  }
})
import { Image, StyleSheet, View } from 'react-native';
import { IImage } from './IImage';
import { memo } from 'react';

export default memo(({ url, style }: IImage) => {

  return (
    <View style={[defStyle.main, style]}>
      <Image style={[defStyle.img, {}]} resizeMode="contain" source={url ? { uri: url } : require('../../../assets/Images/food.jpg')} />
    </View>
  );
});

const defStyle = StyleSheet.create({
  main: {

  },
  img: {
    height: '100%',
    width: '100%',
  },
});

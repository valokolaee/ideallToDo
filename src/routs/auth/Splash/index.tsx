import { FC, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import CLogo from '../../../components/atoms/CLogo';
import ColorSystem from '../../../configs/color/ColorSystem';
import { authRoutsEnum } from '../../../navigation/authRouter/authRoutsEnum';
import { ISplashProps } from './ISplashProps';



const Splash: FC<ISplashProps> = ({ navigation }) => {

  useEffect(() => {
    setTimeout(() => {
      const navTo = authRoutsEnum.MainRouteWrapper
      navigation.replace(navTo)
    }, 3000);
  }, []);


  return (
    <View style={defStyle.container}>
      <CLogo />
    </View>
  );
};

export default Splash;

const defStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorSystem.Primary,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    paddingHorizontal: 0
  },
});



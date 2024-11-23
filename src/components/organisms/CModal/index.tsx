import React, { useImperativeHandle, useState } from 'react';
import { Modal, StyleSheet, TouchableOpacity, View } from 'react-native';
import {
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import ColorSystem from '../../../configs/color/ColorSystem';
import styleValues, { defaultPadding } from '../../utils/enums/styleValues';
import { IModal } from './IModal';
import { CText } from '../../atoms/Ctext';
import { EnumFontSize } from '../../utils/enums/EnumFontSize';

export default React.forwardRef(({ children, name, screenMode, style, onHide, onShow }: IModal, ref,) => {
  useImperativeHandle(ref, () => { return { setShowModal, hide, show }; });

  const [showModal, setShowModal] = useState(false);

  const hide = () => { setShowModal(false); onHide && onHide() };
  const show = () => { setShowModal(true); onShow && onShow() };


  return (
    <Modal
      onRequestClose={hide}
      animationType="fade"
      transparent
      visible={showModal}
    >
      {showModal && (
        <View style={[defStyl.body,]}>
          <TouchableOpacity onPress={hide}
            style={[defStyl.backDrop]} />
          <View style={[defStyl.children, styleDetecter(screenMode), style,]}>
            {name && <CText text={name} bold textAlign='center' fontSize={EnumFontSize.h2} holderStyle={defStyl.title} />}
            {children}</View>
        </View>
      )}
    </Modal>
  );
},
)

const defStyl = StyleSheet.create({
  default: {
    flexDirection: 'column',
    backgroundColor: ColorSystem.White,
    alignSelf: 'center',
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    padding: defaultPadding
  },
  backDrop: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: ColorSystem.gray!(10)
  },
  children: {
    flex: 15,
    backgroundColor: ColorSystem.White,
    position: 'absolute',
    marginHorizontal: styleValues.p05,
    width: '85%',

  },
  normal: {
    borderRadius: styleValues.p02,
  },
  bottom: { width: '100%', position: 'absolute', bottom: 0, maxHeight: hp(50) },
  fulScreen: {
    width: '100%',
    height: '100%',
    margin: 0,
  },
  alert: {
    flex: undefined,
    marginVertical: styleValues.p20,
  },
});

function styleDetecter(params?: 'fullScreen' | 'bottom' | 'alert') {
  switch (params) {
    case 'bottom':
      return defStyl.bottom;
    case 'fullScreen':
      return defStyl.fulScreen;

    case 'alert':
      return defStyl.alert;
    default:
      return defStyl.normal;
  }
}

import React, { useEffect, useImperativeHandle, useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import ColorSystem from '../../../configs/color/ColorSystem';
import langService from '../../../translation/lang/lS';
import CGap from '../../atoms/CGap';
import CIconGenerator from '../../atoms/CIconGenerator';
import CText from '../../atoms/Ctext';
import { EnumFontSize } from '../../utils/enums/EnumFontSize';
import styleValues, { defaultMargin, defaultPadding } from '../../utils/enums/styleValues';
import Xml from '../../utils/svgs/Xml';
import CModal from '../CModal';
import { IConfirmModal } from './IconfirmModal';
import DirectedView from '../../../translation/directedView';
import styler from '../../../utilities/styler';

export default React.forwardRef(({ onConfirm, onDeny, icon, strings }: IConfirmModal, ref) => {

  const refModal = useRef<any>();
  useImperativeHandle(ref, () => { return { showModal }; });



  const showModal = () => { refModal.current.setShowModal(true); };
  const hideModal = () => { refModal.current.setShowModal(false); };
  const _onDeny = () => { hideModal(); onDeny && onDeny() }
  const _onConfirm = () => { hideModal(), onConfirm && onConfirm() }
  return (
    <>
      <CModal ref={refModal} screenMode="alert" style={defStyl.modal} noHeader onHide={_onDeny}>
        <View style={defStyl.main}>
          <CIconGenerator iconName={icon || Xml.warning} size={70} />
          <CText text={strings?.title} style={defStyl.title} />
          <CText text={strings?.massage} holderStyle={styler({ marginVertical: defaultMargin * 2 })} />
          <DirectedView style={defStyl.yesNoView}>
            <CText
              text={strings?.yesMassage || langService().Yes}
              style={[defStyl.yesNoBtn, defStyl.yes]}
              event={{ onPress: _onConfirm }}
            />
            <CGap thick={10} />
            <CText
              text={strings?.noMassage || langService().No}
              style={[defStyl.yesNoBtn, defStyl.no]}
              event={{ onPress: _onDeny }}
            />
          </DirectedView>
        </View>
      </CModal>
    </>
  );
});

const defStyl = StyleSheet.create({
  modal: {
    // marginVertical: isTablet() ? undefined : (Platform.OS === 'ios' ? '75%' : '40'),
    // width: '90%'


  },
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: defaultPadding * 3
  },
  title: {
    fontWeight: 'bold',
    fontSize: EnumFontSize.h3,
    // marginVertical: styleValues.paddin05,
  },
  yesNoView: {
    marginTop: styleValues.p05,
    // flexDirection: 'row',
    width: '70%',
    justifyContent: 'center',
  },
  yesNoBtn: { paddingVertical: styleValues.p03, paddingHorizontal: styleValues.p10, borderRadius: styleValues.r05, textAlign: 'center' },
  yes: { backgroundColor: ColorSystem.Error, color: ColorSystem.White },
  no: { backgroundColor: ColorSystem.gray!(10), color: ColorSystem.gray!(60) },
});

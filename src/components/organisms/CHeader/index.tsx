import React from 'react';
import { StyleSheet } from 'react-native';
import ColorSystem from '../../../configs/color/ColorSystem';
import { useAppSelector } from '../../../redux/hooks';
import DirectedView from '../../../translation/directedView';
import styler from '../../../utilities/styler';
import CGap from '../../atoms/CGap';
import CIconGenerator from '../../atoms/CIconGenerator';
import { CText } from '../../atoms/Ctext';
import useMyNavigation from '../../hooks/useMyNavigation';
import CIconButton from '../../molecules/CIconButton';
import styleValues, { defaultPadding } from '../../utils/enums/styleValues';
import Xml from '../../utils/svgs/Xml';
import { IHeader } from './component/IHeader';



export default ({ title, fireSideMenu }: IHeader) => {
  const nav = useMyNavigation()

  const _langDir = useAppSelector((s) => s.langSlice.rtl)

  const _goBack = () => { nav.goBack() }
  const _popToTop = () => { nav.popToTop() }

  const _iconColo = nav.canGoBack() ? undefined : ColorSystem.Disable

  return (
    <DirectedView style={[defStyle.main,]}>
      <CIconButton iIconSvg={{ icon: { name: Xml.minus } }} onPress={fireSideMenu} />
      <CGap thick={20} />
      <CIconGenerator iconName={_langDir ? Xml.goBackRight(_iconColo) : Xml.goBackLeft(_iconColo)} event={{ onPress: _goBack, }} />
      <CText text={title} holderStyle={styler({ flex: 1 })} textAlign='center' />
      <CIconGenerator iconName={Xml.home(_iconColo)} event={{ onPress: _popToTop, }} />
    </DirectedView>
  );
}

const defStyle = StyleSheet.create({
  main: {
    borderBottomWidth: 0.5,
    // justifyContent: 'space-between',
    paddingVertical: styleValues.p01,
    paddingHorizontal: defaultPadding,
    // borderWidth: 1
  },


});

import React, { FC, memo, useImperativeHandle, useRef, useState } from 'react';
import { Platform, StyleSheet, TouchableOpacity, View } from 'react-native';
import ColorSystem from '../../../configs/color/ColorSystem';
import CIconGenerator from '../../atoms/CIconGenerator';
import CTextStared from '../../atoms/CTextStared/CTextStared';
import { IText } from '../../atoms/Ctext/IText';

import { EnumFontSize } from '../../utils/enums/EnumFontSize';
import styleValues from '../../utils/enums/styleValues';
import Xml from '../../utils/svgs/Xml';
import CDropdown from './CDropDown';
import CTextInput from './CTextInput';
import { IInputText } from './types/IInputText';
import NumPickInput from './numPickInput';
import DirectedView from '../../../translation/directedView';

export const CInputText: FC<IInputText> = React.forwardRef(({ dropDown, startIcon, endIcon, title, input, inpType, style }, ref) => {
  useImperativeHandle(ref, () => {
    return { _onNotify, focus };
  });


  const refTextInput = useRef<any>();

  const [value, setValue] = useState<string>('');
  const [notif, notifSetter] = useState<IText | null>(null);
  const [notifColor, notifColorSetter] = useState<string | null>();


  const focus = () => {
    refTextInput.current.focus()
  }
  const _onNotify = (text: string | null, type: 'warning' | 'error' | null) => {
    var color = type !== 'warning' ? ColorSystem.Error : ColorSystem.Warning;
    notifColorSetter(color);

    notifSetter({
      text: text!,
      style: { color: color, textAlign: 'auto', fontSize: EnumFontSize.h6 },
    });
  };



  const inputCaller = () => {
    switch (inpType) {
      case 'numPickInput':
        return <NumPickInput {...input} />;
      case 'dropDown':
        return <CDropdown {...dropDown!} />;
      case 'simpleInpt':
      default:
        return <CTextInput {...input} />

    }
  };




  return (
    <TouchableOpacity
      onPress={() => {
        input?.events?.onPress && input?.events?.onPress();
      }}
      disabled={!!!input?.events?.onPress}
      style={[defStyl.main, style,]}
    >


      {title && <CTextStared {...title} />}
      <DirectedView style={[defStyl.inputContainer]}>


        {inputCaller()}



      </DirectedView>


    </TouchableOpacity>
  );
});
// }
export default memo(CInputText);
const defStyl = StyleSheet.create({
  main: {},
  inp: {
    color: ColorSystem.Black,
    textAlign: 'center',
    // borderWidth: 1,
    height: '100%',
    // flex: 1,
  },
  inputContainer: {
    // height: '100%',
    paddingVertical: Platform.OS === 'ios' ? styleValues.p03 : undefined,
    width: '100%',
    borderColor: ColorSystem.gray!(20),
    alignItems: 'center',
    borderRadius: styleValues.p02,
    backgroundColor: ColorSystem.gray!(5),
    justifyContent: 'center',
  },
  icons: {
    marginHorizontal: styleValues.p02,
  },
  title: {
    marginTop: styleValues.p04,
    marginBottom: styleValues.p01,
  },

});

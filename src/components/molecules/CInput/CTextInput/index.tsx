import React, { FC, memo, useImperativeHandle, useRef, useState } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import ColorSystem from '../../../../configs/color/ColorSystem';
import TextHelper from '../../../../utilities/TextHelper';
import { IText } from '../../../atoms/Ctext/IText';

import { TextInput } from 'react-native-paper';
import { EnumFontSize } from '../../../utils/enums/EnumFontSize';
import styleValues from '../../../utils/enums/styleValues';
import { IInput } from './IInput';

export const CTextInput: FC<IInput> = React.forwardRef((input, ref) => {
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

  function isMobileNumber(e: string) {
    return e.substring(0, 2) === '09' || e.substring(0, 2) === '۰۹';
  }

  function _textCorrecter(e: string) {
    if (input?.keyboardType === 'number-pad' || input?.keyboardType === 'numeric' || input?.keyboardType === 'phone-pad' || input?.keyboardType === 'mobile') {
      e = TextHelper.numOnly(e);

      if (input.keyboardType === 'mobile') {
        !isMobileNumber(e) ? _onNotify('فرمت شماره موبایل نادرست است.', 'error') : _onNotify(null, null);
      } else {
        isMobileNumber(e) ? _onNotify('فرمت شماره نادرست', 'error') : _onNotify(null, null);
      }
    }

    return e;
  }

  const keyboardType = () => {
    switch (input?.keyboardType) {
      case 'mobile':
        return 'phone-pad';
      default:
        return input?.keyboardType;
    }
  };

  const inputCaller = () => (
    <TextInput
      ref={refTextInput}
      returnKeyType={input?.returnKeyType}
      multiline={input?.multiline}
      editable={input?.editable}
      value={value}
      keyboardType={keyboardType()}
      secureTextEntry={input?.secureTextEntry}
      onChangeText={(e) => {
        input?.events?.onChangeText && input?.events?.onChangeText(_textCorrecter(e));
        setValue(_textCorrecter(e));
        notifSetter(null);
      }}

      onSubmitEditing={input?.events?.onSubmitEditing}
      style={[

        defStyl.inp,
        input?.style,
      ]}
      // maxLength={input?.maxLength ? input.maxLength : input?.keyboardType === 'mobile' || 'phone-pad' ? 11 : 5000}
      maxLength={maxLengthSetter()}
      placeholder={input?.placeHoldr?.text?.toString()}
      placeholderTextColor={input?.placeHoldr?.color ? input?.placeHoldr?.color : ColorSystem.gray!(50)}
      textAlignVertical={input?.textAlignVertical}
      textAlign={input?.textAlign}
    />
  );



  function maxLengthSetter() {
    var x = 0
    if (input?.maxLength) {
      return input.maxLength
    } else {
      if (input?.keyboardType === 'mobile' || input?.keyboardType === 'phone-pad') {
        return 11
      } else {
        return undefined
      }
    }

  }

  return (
    <View style={[defStyl.main,]}    >

      {inputCaller()}

      {/* {(value && !input?.editable) && (
        <CIconGenerator
          style={defStyl.icons}
          // iconName={Xml.clearInputText()}
          size={3}
          events={{
            onPress() {
              setValue('');
              input?.events?.onChangeText && input?.events?.onChangeText('');
            },
          }}
        />
      )} */}
    </View>


  );
});
// }
export default memo(CTextInput);
const defStyl = StyleSheet.create({
  main: { flexDirection: 'row', height: '100%', },
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
    flexDirection: 'row',
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

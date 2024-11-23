import React, { FC, memo, useEffect, useState } from 'react';
import { Keyboard, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import styler from '../../utilities/styler';
import CText from '../atoms/Ctext';
import styleValues, { defaultPadding } from '../utils/enums/styleValues';
import { IBaseView } from '../utils/interfacesUI/IBaseView';
import DoubleButtons from './CDoubleButtons';
import CButton from '../molecules/CButton';
import CSeprator from '../atoms/CSeprator';


const BaseView: FC<IBaseView> = React.forwardRef(
  ({ children, style, btns }, ref) => {
    const doubleBtn = btns?.doubleBtn!
    const singleBtn = btns?.singleBtn!
    const [_show, set_show] = useState(false)
    useEffect(() => {
      setTimeout(() => {

        set_show(true)
      }, 10);
    }, [])
    return (


      <View style={[defStyl.main, style,]}>
        <View style={styler({
          flex: 1
        })}>
          {children}
        </View>
        <View style={styler({ flexDirection: btns?.revers ? 'column-reverse' : undefined })} >
          {doubleBtn && <DoubleButtons {...doubleBtn} />}
          {btns?.seprator && <>
            <CText />
            <CSeprator thickNess={1} />
          </>}
          {(doubleBtn && singleBtn) && <CText />}
          {singleBtn && <CButton
            {...singleBtn}
            mode='outlined'
          />}
        </View>
      </View>

    );
  },
);
export default memo(BaseView);

const defStyl = StyleSheet.create({
  main: {
    flex: 1,
    paddingHorizontal: defaultPadding,
    paddingTop: styleValues.p02,

  },
});

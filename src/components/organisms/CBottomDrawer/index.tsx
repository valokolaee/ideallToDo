import { forwardRef, memo, useImperativeHandle, useRef, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import styler from '../../../utilities/styler';
import CText from '../../atoms/Ctext';
import { EnumFontSize } from '../../utils/enums/EnumFontSize';
import styleValues, { defaultPadding } from '../../utils/enums/styleValues';
import DoubleButtons from '../CDoubleButtons';
import { ICBottomDrawer } from './ICBottomDrawer';
import testStyles from '../../utils/enums/testStyles';
import BaseView from '../BaseView';
import CButton from '../../molecules/CButton';


export default memo(forwardRef(({ title, baseView, children, style, onOpen, onClose, height }: ICBottomDrawer, ref) => {
    useImperativeHandle(ref, () => { return { show, hide }; });
    const refRBSheet = useRef<any>();

    // const doubleBtn = baseView?.doubleBtn!
    // const singleBtn = baseView?.singleBtn!
    const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

    const show = () => {
        setIsBottomSheetOpen(true);
        refRBSheet.current.open()

    };

    const hide = () => {
        setIsBottomSheetOpen(false);
        refRBSheet.current.close();
    };


    return (

        <RBSheet
            animationType='fade'
            height={height || hp(70)}
            ref={refRBSheet}
            closeOnDragDown
            closeOnPressBack
            closeOnPressMask
            onClose={onClose}
            onOpen={onOpen}
            customStyles={{ container: [defStyles.body, style], }}

        >
            {isBottomSheetOpen &&
                <SafeAreaView style={[{ flex: 1 }]}>
                    {/* <BaseView> */}

                    {title && <CText {...title} fontSize={EnumFontSize.h2} holderStyle={styler({ paddingHorizontal: defaultPadding })} bold />}
                    <ScrollView contentContainerStyle={[{ flex: 1, },]}>
                        {children}
                    </ScrollView>
                    {/* </BaseView> */}

                    {/* {(doubleBtn && singleBtn) && <View>
                        {doubleBtn && <DoubleButtons {...doubleBtn} />}
                        {(doubleBtn && singleBtn) && <CText />}
                        {singleBtn && <CButton {...singleBtn} style={styler({ alignSelf: 'center', width: styleValues.centeredItemsWidth })} />}
                    </View>} */}

                </SafeAreaView>}

        </RBSheet>


    )

}))

const defStyles = StyleSheet.create({

    body: {

        borderTopEndRadius: styleValues.r25,
        borderTopStartRadius: styleValues.r25,
    }
});
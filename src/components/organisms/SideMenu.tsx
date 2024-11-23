import { ReactNode, forwardRef, memo, useImperativeHandle, useState } from 'react'
import { SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native'
import MenuDrawer from 'react-native-side-drawer'
import ColorSystem from '../../configs/color/ColorSystem'
import { useAppSelector } from '../../redux/hooks'
import LangChanger from '../../translation/langChanger'
import { defaultPadding } from '../utils/enums/styleValues'



export default memo(forwardRef(({ children, drawerContent, donNotCloseOnAnyClick }: ISideMenu, ref) => {
    useImperativeHandle(ref, () => { return { _openUp } })
    const [_open, set_open] = useState(false)

    const _langDir = useAppSelector((s) => s.langSlice.rtl)
    const _openUp = () => { set_open(!_open) }

    const _close = () => { set_open(false) }


    const _drawerContent = () => {
        return (
            <TouchableOpacity
                onPress={_close}
                style={[defStyle.animatedBox, { alignItems: _langDir ? 'flex-end' : 'flex-start' }]}
            >
                <View style={defStyle.body} onTouchEnd={donNotCloseOnAnyClick ? undefined : _close} >
                    {drawerContent}
                </View>
            </TouchableOpacity>
        );
    };
    return (
        <SafeAreaView style={defStyle.main}>
            <MenuDrawer
                open={_open}
                position={_langDir ? 'right' : 'left'}
                drawerContent={_drawerContent()}
                drawerPercentage={100}
                animationTime={250}
                overlay={true}
                opacity={0.4}
            >
                {children}
            </MenuDrawer>
        </SafeAreaView>
    )
}))
const defStyle = StyleSheet.create({
    main: { flex: 1 },
    animatedBox: {
    },
    body: {
        width: '80%',
        height: '90%',
        backgroundColor: ColorSystem.White,
        paddingHorizontal: defaultPadding * 5,
        paddingTop: defaultPadding * 10,
    }
})

export interface ISideMenu {
    children?: ReactNode | ReactNode[];
    drawerContent?: ReactNode | ReactNode[];
    donNotCloseOnAnyClick?: boolean


}
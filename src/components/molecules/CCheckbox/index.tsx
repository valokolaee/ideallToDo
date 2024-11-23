import { memo, useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import ColorSystem from "../../../configs/color/ColorSystem";
import styler from "../../../utilities/styler";
import CGap from "../../atoms/CGap";
import CIconGenerator from "../../atoms/CIconGenerator";
import Ctext from "../../atoms/Ctext";
import styleValues, { defaultMargin, defaultPadding } from "../../utils/enums/styleValues";
import Xml from "../../utils/svgs/Xml";
import { ICheckbox } from "./ICheckbox";
import { EnumFontSize } from "../../utils/enums/EnumFontSize";
import DirectedView from "../../../translation/directedView";

const CCheckbox = ({ isChecked, label, event, size, style }: ICheckbox) => {
    const [_checked, set_checked] = useState<boolean>(isChecked!)
    const _size = size || EnumFontSize.h3

    const _onTouched = () => {

        // event?.onPress!()
        event?.onCheck!(_checked)
        set_checked(!_checked)
    }
    return (

        <DirectedView style={[defStyle.main, style]} event={{ onPress: _onTouched }} touchable>
            <View style={[defStyle.check, styler({ width: _size, height: _size, })]}>
                {isChecked && <CIconGenerator iconName={Xml.tik} size={_size} />}
            </View>
            {label && <>
                <CGap thick={defaultMargin} />
                <Ctext text={label} fontSize={_size / 1.5} />
            </>
            }
        </DirectedView>


    )
}
export default memo(CCheckbox)

const defStyle = StyleSheet.create({
    main: { alignItems: 'center' },
    check: { borderWidth: 2, borderColor: ColorSystem.Primary, borderRadius: styleValues.r15, alignItems: 'center' }
})
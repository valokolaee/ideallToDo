import { StyleSheet, TouchableOpacity, View, ViewStyle } from "react-native";
import CIconGenerator from "../../atoms/CIconGenerator";
import Xml from "../../utils/svgs/Xml";
import { iconName } from "../../atoms/CIconGenerator/IICon";
import CText from "../../atoms/Ctext";
import { EnumFontSize } from "../../utils/enums/EnumFontSize";
import styleValues from "../../utils/enums/styleValues";
import styler from "../../../utilities/styler";
import { IEvent } from "../../utils/interfacesUI/IEvent";
import { IText } from "../../atoms/Ctext/IText";
import ColorSystem from "../../../configs/color/ColorSystem";
import { memo } from "react";
import { IStyle } from "../../utils/interfacesUI/IStyle";

export interface IIconText extends IStyle<ViewStyle> {
    icon: iconName;
    label: IText;
    rtl?: boolean;
    // event?: IEvent;
    disabled?: boolean;
    scale?: number

}

export default memo(({ icon, label, rtl, event, disabled, scale = 1, style }: IIconText) =>
(<TouchableOpacity
    disabled={disabled}
    onPress={event?.onPress}
    onLongPress={event?.onLongPress}
    style={[styler({ flexDirection: rtl ? "row-reverse" : 'row', alignItems: 'center' }), style]} >
    <CIconGenerator iconName={icon} size={15 * scale} />
    <CText
        text={label.text}
        fontSize={label.fontSize || EnumFontSize.h8 * scale}
        holderStyle={defStyle.txt}
        color={label.color || ColorSystem.Black}
    />
</TouchableOpacity>))
const defStyle = StyleSheet.create({

    txt: {
        margin: styleValues.p01,
    }

});

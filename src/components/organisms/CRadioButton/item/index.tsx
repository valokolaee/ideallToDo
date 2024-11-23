import { memo } from "react";
import { StyleSheet } from "react-native";
import ColorSystem from "../../../../configs/color/ColorSystem";
import DirectedView from "../../../../translation/directedView";
import lS from "../../../../translation/lang/lS";
import JsonHelper from "../../../../utilities/JsonHelper";
import styler from "../../../../utilities/styler";
import { CText } from "../../../atoms/Ctext";
import styleValues, { defaultMargin, defaultPadding } from "../../../utils/enums/styleValues";
import { ISelect } from "../../../utils/interfacesUI/ISelect";

export default memo(({ info, select, selected, disabled }: ISelect<IRadio>) => {
    const { value, type } = info!

    const _selectHelper = () => { select!(info) }
    return (
        <DirectedView touchable event={{ onPress: _selectHelper }} style={defStyle.main} disabled={disabled}>
            <DirectedView style={[defStyle.radio, selected && { borderWidth: 0, backgroundColor: disabled ? ColorSystem.Border : ColorSystem.Link }]} />
            <CText text={JsonHelper.getObjectValueByString(lS(), value)}
                holderStyle={styler({ marginEnd: defaultMargin, marginStart: defaultMargin / 2 })} />
        </DirectedView >)
})
const defStyle = StyleSheet.create({
    main: { marginEnd: defaultMargin, marginVertical: defaultMargin },
    radio: {
        borderWidth: 1, borderColor: ColorSystem.Border, borderRadius: styleValues.r50, padding: defaultPadding,
    }
})

export interface IRadio {
    // selected?: boolean,
    // select?: (r: IRadio) => void;
    type?: string;
    value: string | number;
    _id?: string | number;
}
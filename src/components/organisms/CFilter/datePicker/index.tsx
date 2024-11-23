import { View } from "react-native"
import DirectedView from "../../../../translation/directedView"
import lS from "../../../../translation/lang/lS"
import styler from "../../../../utilities/styler"
import CGap from "../../../atoms/CGap"
import CIconGenerator from "../../../atoms/CIconGenerator"
import { CText } from "../../../atoms/Ctext"
import { ISelect } from "../../../utils/interfacesUI/ISelect"
import Xml from "../../../utils/svgs/Xml"
import CDatePicker from "../../CDatePicker"
import { datePeriod } from "../IFilter"
import mrvLogs from "../../../../utilities/mrvLogs"

export default (sel: ISelect<datePeriod>) => {


    const _onChange = (from: boolean) => (date?: string) => {
        if (from) {
            sel.select!({ ...sel.selectedItem, from: date })
        } else {
            sel.select!({ ...sel.selectedItem, to: date })
        }
    }


    return (
        <View >
            <CText text={`${lS().DeadLine}:`} />
            <CGap vertical thick={5} />
            <DirectedView style={[styler({ justifyContent: 'space-between' })]} >

                <CDatePicker onChange={_onChange(true)} date={sel.selectedItem?.from} />

                <CDatePicker onChange={_onChange(false)} title={lS().to} date={sel.selectedItem?.to} />

                {/* {sel.clearSelection && <CIconGenerator iconName={Xml.clear} event={{ onPress: sel.clearSelection }} />} */}

            </DirectedView>
        </View>
    )
}


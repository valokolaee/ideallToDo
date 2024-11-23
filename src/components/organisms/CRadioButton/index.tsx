import { memo } from "react";
import { StyleSheet, View } from "react-native";
import DirectedView from "../../../translation/directedView";
import { CText } from "../../atoms/Ctext";
import { defaultMargin, defaultPadding } from "../../utils/enums/styleValues";
import IRadioGroup from "./IRadioGroup";
import Item from "./item";
import CIconGenerator from "../../atoms/CIconGenerator";
import Xml from "../../utils/svgs/Xml";

export default memo(({ ListRadio, title, selectedItem, horizontal, disabled, select, clearSelection }: IRadioGroup) => {

    return (
        <View style={[defStyle.main]}>
            {title && <CText text={title} />}
            <DirectedView style={[defStyle.group, horizontal && { flexWrap: 'wrap', }]} vertical={!horizontal}>
                {ListRadio.map((item) =>
                    <Item info={item} select={select}
                        selected={
                            item.value.toString() === selectedItem?.value?.toString()
                            // || item?.type?.toString() === selectedItem?.type?.toString()
                        }
                        disabled={disabled} />)}
                {clearSelection && <CIconGenerator iconName={Xml.clear} event={{ onPress: clearSelection }} />}
            </DirectedView>
        </View>
    )
})
const defStyle = StyleSheet.create({
    main: {

        // padding: defaultPadding,
    },
    group: {
        marginTop: defaultMargin,
    },
})


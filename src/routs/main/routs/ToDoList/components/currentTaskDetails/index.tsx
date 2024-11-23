import { memo } from "react";
import { StyleSheet, View } from "react-native";
import CGap from "../../../../../../components/atoms/CGap";
import { CText } from "../../../../../../components/atoms/Ctext";
import { EnumFontSize } from "../../../../../../components/utils/enums/EnumFontSize";
import styleValues, { defaultMargin } from "../../../../../../components/utils/enums/styleValues";
import ColorSystem from "../../../../../../configs/color/ColorSystem";
import ITask from "../../../../../../dataBase/interfaces/ITask";
import langService from "../../../../../../translation/lang/lS";
import styler from "../../../../../../utilities/styler";
import TaskActions from "../taskActions";

// TODO edit
// TODO delete
// TODO set to done





export default memo((task: ITask) => {
    const { description } = task


    return (
        <View style={styler({ flex: 1, })}>
            <View style={styler({ flex: 1 })}>
                <CText text={`${langService().Description}:\n${description || '---'}`}
                    textAlign="flex-start" holderStyle={defStyle.desc} />



                <CGap vertical />
            </View>

            <TaskActions task={task} size={EnumFontSize.h2} />
        </View>
    )
}
)

const defStyle = StyleSheet.create({
    main: {},
    desc: {
        // marginStart: styleValues.p05, marginEnd: styleValues.p01
    },
    progressBar: {
        flexDirection: 'row',
        overflow: 'hidden',
        marginTop: defaultMargin,
        // padding: defaultMargin,
    },
    doneNotDone: {
        padding: styleValues.p01 / 5,
        textAlign: 'center',
        color: ColorSystem.White
    },
    done: {
        borderTopStartRadius: defaultMargin,
        borderBottomStartRadius: defaultMargin,
        backgroundColor: ColorSystem.Success,
    },
    notDone: {

        borderTopEndRadius: defaultMargin,
        borderBottomEndRadius: defaultMargin,
        backgroundColor: ColorSystem.Border,

    },

})
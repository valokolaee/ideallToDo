import { memo, useState } from "react";
import { StyleSheet, View } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import CList from "../../../../../../components/atoms/CList";
import { CText } from "../../../../../../components/atoms/Ctext";
import useMyNavigation from "../../../../../../components/hooks/useMyNavigation";
import styleValues from "../../../../../../components/utils/enums/styleValues";
import ColorSystem from "../../../../../../configs/color/ColorSystem";
import ITask from "../../../../../../dataBase/interfaces/ITask";
import { mainRoutsEnum } from "../../../../../../navigation/mainRouter/mainRoutsEnum";
import langService from "../../../../../../translation/lang/lS";
import getByList from "./getByList";
import Item from "./item";

export default memo((task?: ITask) => {
    const nav = useMyNavigation()

    const [_selectedTask, set_selectedTask] = useState<ITask | undefined>(undefined)

    var _tasks: ITask[] = getByList(task!!)

    const _goToTaskDetails = (item: ITask) => {
        nav.push(mainRoutsEnum.ToDoList, { task: item });
        set_selectedTask(item!)
    }

    return (
        <View style={[defStyle.main]}>

            <View style={[defStyle.inCommon, defStyle.main,]}>
                <CList
                    list={_tasks}
                    ListEmptyComponent={
                        <View style={{ height: hp(50), justifyContent: 'center' }}>
                            <CText text={langService().Massages.There_are_no_Tasks} textAlign="center" />
                            <CText text={langService().Massages.Hit_Add_to_add} textAlign="center" />
                        </View>}

                    customItem={(item: ITask) => (
                        <Item
                            {...item}
                            selected={_selectedTask === item}
                            actions={{ onPress() { _goToTaskDetails(item) }, }}
                        />
                    )}
                    noSeparator
                />

            </View>
        </View>
    )
})


const fabPad = styleValues.p03
const defStyle = StyleSheet.create({
    main: {
        // padding: styleValues.p02,
        flex: 1
    },
    inCommon: { justifyContent: 'center', },
    top: { flex: 1 },
    btm: { flex: 1 },
    add: {
        backgroundColor: ColorSystem.Link,
        // padding: styleValues.p05,
        borderRadius: 500,
        position: 'absolute',
        width: styleValues.p15,
        height: styleValues.p15,
        bottom: fabPad,
        right: fabPad,
    },

})



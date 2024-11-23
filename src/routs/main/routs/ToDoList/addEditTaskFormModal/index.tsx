import { forwardRef, memo, useImperativeHandle, useRef, useState } from "react";


import Form from "./addEditTaskForm";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

import { Alert } from "react-native";
import ITask from "../../../../../dataBase/interfaces/ITask";
import TaskQueries from "../../../../../dataBase/realm/models/Task/Queries";
import lS from "../../../../../translation/lang/lS";
import CBottomDrawer from "../../../../../components/organisms/CBottomDrawer";
import styler from "../../../../../utilities/styler";
import ColorSystem from "../../../../../configs/color/ColorSystem";
import { CText } from "../../../../../components/atoms/Ctext";
import { defaultPadding } from "../../../../../components/utils/enums/styleValues";
import { EnumFontSize } from "../../../../../components/utils/enums/EnumFontSize";





export default memo(forwardRef(({ task, editMode }: { task?: ITask, editMode?: boolean }, ref) => {
    useImperativeHandle(ref, () => { return { show } })
    const _taskQuery = TaskQueries()
    const refCBottomDrawer = useRef<any>(ref)
    const [_show, set_show] = useState<boolean>(false)

    const This_task_is_done = lS().Massages.This_task_is_done
    const To_add_subtasks_you_need_to_undo_it = lS().Massages.To_add_subtasks_you_need_to_undo_it
    const Undo_this_task = lS().Massages.Undo_this_task
    const Cancel = lS().Cancel

    const _showAddTask = () => {
        if (task?.done) {
            Alert.alert(

                This_task_is_done,
                To_add_subtasks_you_need_to_undo_it,
                [{
                    isPreferred: true,
                    onPress(value) {
                        _taskQuery.update!(task, { done: false, doneDate: '' })
                        refCBottomDrawer.current.show()
                    },
                    text: Undo_this_task
                },
                { text: Cancel }
                ],
                { cancelable: false }

            );

            return
        }
        refCBottomDrawer.current.show()
    }

    const show = () => { refCBottomDrawer.current.show() }

    const _close = () => {
        set_show(false)
        refCBottomDrawer.current.hide()
    }

    const _reset = () => {

        set_show(true)
    }
    return (
        <>
            <CBottomDrawer ref={refCBottomDrawer} onOpen={_reset} height={hp(90)} style={styler({ paddingHorizontal: defaultPadding })}>
                <>
                    {_show && <Form onDone={_close} task={task} editMode={editMode} />}
                </>
            </CBottomDrawer>

            {!editMode && <CText event={{ onPress: _showAddTask }} text={lS().Add} bold color={ColorSystem.Link} fontSize={EnumFontSize.h3} textAlign="flex-end" />}
        </>
    )
}))


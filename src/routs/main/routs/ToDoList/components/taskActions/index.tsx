import { memo, useRef } from "react";
import CGap from "../../../../../../components/atoms/CGap";
import CCheckbox from "../../../../../../components/molecules/CCheckbox";
import CIconButton from "../../../../../../components/molecules/CIconButton";
import CConfirmModal from "../../../../../../components/organisms/CConfirmModal";
import Xml from "../../../../../../components/utils/svgs/Xml";
import ColorSystem from "../../../../../../configs/color/ColorSystem";
import ITask from "../../../../../../dataBase/interfaces/ITask";
import TaskQueries from "../../../../../../dataBase/realm/models/Task/Queries";
import DirectedView from "../../../../../../translation/directedView";
import lS, { default as langService } from "../../../../../../translation/lang/lS";
import Toast from "../../../../../../utilities/Toast";
import AddEditTaskFormModal from "../../addEditTaskFormModal";


export default memo(({ task, size, }: ITaskActions) => {
    const refAddEditTaskForm = useRef<any>()
    const refConfirmModal = useRef<any>()

    const _taskQuery = TaskQueries()

    const This_task_has_subtasks = langService().Massages.This_task_has_subtasks

    const _doneTask = () => {
        const _hasTasks = _taskQuery.getAll!({
            getByList: [{ value: task.uuid, name: 'parentTaskId' }, { value: !true, name: 'done' }]
        }).length > 0

        if (_hasTasks) {
            Toast(This_task_has_subtasks)
            return
        }

        _taskQuery.update!(task, { done: !!!task.done, doneDate: new Date().toString() })
    }
    const _deleteTask = () => {
        _taskQuery.delete!(task);

    }
    const _deleteTaskHelper = () => { refConfirmModal.current.showModal() }




    const _showEditModal = () => { refAddEditTaskForm.current.show() }



    return (
        <DirectedView revers >
            <CCheckbox size={size} event={{ onCheck: _doneTask }} label={langService().Done} isChecked={task.done} />
            <CGap thick={10} />
            <CIconButton size={size} onPress={_showEditModal} iIconSvg={{ icon: { name: Xml.edit } }} buttonColor={ColorSystem.Warning} />
            <CGap thick={10} />
            <CIconButton size={size} onPress={_deleteTaskHelper} iIconSvg={{ icon: { name: Xml.delete } }} buttonColor={ColorSystem.Error} />
            <AddEditTaskFormModal ref={refAddEditTaskForm} editMode task={task} />
            <CConfirmModal
                ref={refConfirmModal}
                onConfirm={_deleteTask}
                strings={{ title: `${lS().Title}: "${task.title}"`, massage: lS().Massages.Delete_this }}
            />
        </DirectedView>
    )
}
)


export interface ITaskActions {
    task: ITask;
    size?: number;


}



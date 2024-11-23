import { CText } from "../../../../components/atoms/Ctext"
import BaseActivity from "../../../../components/organisms/BaseActivity"
import BaseView from "../../../../components/organisms/BaseView"
import ITask from "../../../../dataBase/interfaces/ITask"
import DirectedView from "../../../../translation/directedView"
import lS from "../../../../translation/lang/lS"
import JsonHelper from "../../../../utilities/JsonHelper"
import styler from "../../../../utilities/styler"
import { IBaseProps } from "../../../IBaseProps"
import AddEditTaskFormModal from "./addEditTaskFormModal"
import SubTaskList from "./components/subTaskList"
import TaskActions from "./components/taskActions"


export default ({ navigation, route }: IBaseProps) => {
    const _task: ITask = JsonHelper.deepClone(route?.params?.task)


    return (
        <BaseActivity route={route}
            title={_task?.title}
        >
            <BaseView>
                {_task?.description && <CText text={`${lS().Description} ${_task.description}`} />}
                <SubTaskList {..._task} />

                <DirectedView style={styler({ justifyContent: 'space-between' })}>

                    {_task && <TaskActions task={_task} />}
                    <AddEditTaskFormModal />
                </DirectedView>
            </BaseView>
        </BaseActivity >
    )
}


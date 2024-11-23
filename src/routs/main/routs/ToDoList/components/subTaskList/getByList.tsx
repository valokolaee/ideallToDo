import ITask from "../../../../../../dataBase/interfaces/ITask"
import { IGetBy } from "../../../../../../dataBase/realm/models/basics/IAction"
import TaskQueries from "../../../../../../dataBase/realm/models/Task/Queries"

export default (task: ITask) => {
    const _TaskQueries = TaskQueries()
    const _getByList: IGetBy[] = []
    if (task) { _getByList.push({ value: task?.uuid, name: 'parentTaskId' }) }
    var _tasks: ITask[] = _TaskQueries.getAll!({ byQuery: true, getByList: _getByList })

    return _tasks
}
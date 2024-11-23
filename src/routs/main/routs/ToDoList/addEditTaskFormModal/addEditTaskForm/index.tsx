import { forwardRef, memo, useState } from "react";
import { View } from "react-native";
import { TextInput } from "react-native-paper";
import uid from 'react-native-uuid';
import CDescription from "../../../../../../components/atoms/CDescription";
import { CText } from "../../../../../../components/atoms/Ctext";
import BaseView from "../../../../../../components/organisms/BaseView";
import CDatePicker from "../../../../../../components/organisms/CDatePicker";
import { defaultMargin, defaultPadding } from "../../../../../../components/utils/enums/styleValues";
import CommonStyles from "../../../../../../configs/CommonStyles";
import ITask from "../../../../../../dataBase/interfaces/ITask";
import TaskQueries from "../../../../../../dataBase/realm/models/Task/Queries";
import lS from "../../../../../../translation/lang/lS";
import styler from "../../../../../../utilities/styler";



export default memo(forwardRef(({ task, editMode, onDone }: { task?: ITask; editMode?: boolean; onDone?: () => void }, ref) => {
    const _taskQueries = TaskQueries()

    const [_task, set_task] = useState<ITask | undefined>(editMode ? task : { done: false })
    const { description, title, deadLine, parentTaskId, uuid, } = _task || {}


    const _createOrUpdate = () => {
        // mrvLogs(_task, '_task')
        if (!!!title) { return }
        editMode ? _editTask() : _createTask()
        onDone && onDone()
    }
    // const uud = uuidv4()
    const _createTask = () => {
        // if (parentTaskId) { ancestorList?.push(parentTaskId!) }
        _taskQueries.create!({ ..._task!, parentTaskId: task?.uuid, uuid: uid.v4().toString() });
        onDone && onDone!()
    }

    const _editTask = () => { _taskQueries.update!(task!, _task!) }


    const _titleChange = (v: string) => { set_task({ ..._task, title: v }) }
    const _descChange = (v: string) => { set_task({ ..._task, description: v }) }
    const _deadLineChange = (date?: string) => { set_task({ ..._task, deadLine: new Date(date!?.toString()) }) }



    return (
        <BaseView
            btns={{
                singleBtn: {
                    iText: { text: editMode ? lS().Edit : lS().Save },
                    onPress: _createOrUpdate
                },
            }}
            style={{ paddingHorizontal: 0 }}
        >
            <View style={{ flex: 1, }} >
                <CText text={lS().Title} />
                <TextInput onChangeText={_titleChange} value={title} mode="outlined" autoFocus />


                <CDescription onChangeText={_descChange} desc={description} />
                <CDatePicker onChange={_deadLineChange} date={deadLine?.toDateString()} title={lS().DeadLine}
                    style={[CommonStyles.card, styler({ padding: defaultPadding, marginTop: defaultMargin })]}
                />
            </View>
        </BaseView>


    )
}))
import { memo } from "react";
import { CText } from "../../../../../../../components/atoms/Ctext";
import { EnumFontSize } from "../../../../../../../components/utils/enums/EnumFontSize";
import ITask from "../../../../../../../dataBase/interfaces/ITask";
import DirectedView from "../../../../../../../translation/directedView";
import DateTimeHelper from "../../../../../../../utilities/DateTimeHelper";
import TaskActions from "../../taskActions";


import CGap from "../../../../../../../components/atoms/CGap";
import Txt from "./Txt";
import CommonStyles from "../../../../../../../configs/CommonStyles";

export default memo((task: Partial<ITask>) => {

    const { title, deadLine, actions, selected, } = task!


    return (<>
        <DirectedView touchable event={{ onPress: actions?.onPress }} style={selected ? [CommonStyles.card] : undefined}>
            <Txt text={title} bold />
            {deadLine &&
                <DirectedView>
                    <CText text={DateTimeHelper._formatDate(deadLine)} fontSize={EnumFontSize.h7} textAlign="flex-end" />
                </DirectedView>
            }
            <CGap thick={20} />
            <TaskActions task={task} />
        </DirectedView>
    </>
    )
})


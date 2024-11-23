import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import TaskTypeRadio from '../../../routs/main/routs/ToDoList/components/addEditTaskFormModal/addEditTaskForm/TaskTypeRadio';
import CGap from '../../atoms/CGap';
import { defaultPadding } from '../../utils/enums/styleValues';
import CRadioButton from '../CRadioButton';
import { IRadio } from '../CRadioButton/item';
import Btns from './btns';
import DatePicker from './datePicker';
import { datePeriod, IFilter, IFilterDataModel } from './IFilter';
import mrvLogs from '../../../utilities/mrvLogs';





export default ({ apply, dataModel, reset }: IFilter) => {

  const [_fdm, set_fdm] = useState<IFilterDataModel | undefined>(dataModel)

  const _apply = () => { apply!(_fdm) }

  const _reset = () => {
    apply!(undefined)
    set_fdm(undefined)
    reset!()
  }


  const _onTaskTypeRadioChange = (v?: Partial<IRadio>) => { set_fdm({ ..._fdm, type: v! }) }
  const _onTaskTypeRadioClear = (v?: Partial<IRadio>) => { set_fdm({ ..._fdm, type: undefined }) }


  const _onDoneChange = (v?: Partial<IRadio>) => { set_fdm({ ..._fdm, done: v }) }
  const _onDoneClear = () => { set_fdm({ ..._fdm, done: undefined }) }


  const _onArchiveChange = (v?: Partial<IRadio>) => { set_fdm({ ..._fdm, archived: v }) }
  const _onArchiveClear = () => { set_fdm({ ..._fdm, archived: undefined }) }


  const _onDeadLineChange = (v?: datePeriod | undefined) => { set_fdm({ ..._fdm, deadLine: v }) }



  return (
    <SafeAreaView style={defStyle.main}>
      <ScrollView>
        <TaskTypeRadio selection={{ select: _onTaskTypeRadioChange, selectedItem: _fdm?.type!, clearSelection: _onTaskTypeRadioClear }} />

        <CGap vertical thick={10} />

        <CRadioButton
          ListRadio={[{ value: 'Done' }, { value: 'UnDone', }]}
          // title={lS().Done}
          selectedItem={_fdm?.done}
          horizontal
          select={_onDoneChange}
          clearSelection={_onDoneClear}
        />

        <CGap vertical thick={10} />

        <CRadioButton
          ListRadio={[{ value: 'Archive', }, { value: 'UnArchive', }]}
          // title={lS().Done}
          selectedItem={_fdm?.archived}
          horizontal
          select={_onArchiveChange}
          clearSelection={_onArchiveClear}
        />

        <CGap vertical thick={10} />

        <DatePicker
          {...{
            select: _onDeadLineChange,
            selectedItem: _fdm?.deadLine,
            clearSelection: _onDeadLineChange
          }}
        />

      </ScrollView>

      <Btns reset={_reset} apply={_apply} />

      <CGap vertical />
    </SafeAreaView>
  );
};

const defStyle = StyleSheet.create({
  main: {
    // padding: defaultPadding,
    flex: 1,
  },
  title: {
    textAlign: 'left',
    paddingVertical: defaultPadding,
  },


});

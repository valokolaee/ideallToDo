import React, { FC, memo, useImperativeHandle, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import ColorSystem from '../../../../configs/color/ColorSystem';
import CIconGenerator from '../../../atoms/CIconGenerator';
import CText from '../../../atoms/Ctext';
import { IText } from '../../../atoms/Ctext/IText';
import { EnumFontSize } from '../../../utils/enums/EnumFontSize';
import styleValues from '../../../utils/enums/styleValues';
import IDropdown from './IDropdown';
import Xml from '../../../utils/svgs/Xml';
import SelectDropdown from '../../../organisms/dropdown';

const CDropdown: FC<IDropdown> = React.forwardRef(({ defaultValue, defaultValueByIndex, title, data, event, defaultButtonText, style, search, allStyles }, ref) => {
  useImperativeHandle(ref, () => {
    return { _onNotify };
  });

  const [isOpen, set_isOpen] = useState(false);
  const [anySelected, set_anySelected] = useState(defaultValue || defaultValueByIndex);
  const [notifColor, notifColorSetter] = useState<string | null>();
  const [notif, notifSetter] = useState<IText | null>(null);

  const _onNotify = (text: string | null, type: 'warning' | 'error' | null) => {
    var color = type !== 'warning' ? ColorSystem.Error : ColorSystem.Warning;
    notifColorSetter(color);

    text
      ? notifSetter({
        text: text,
        style: { color: color, textAlign: 'left', fontSize: EnumFontSize.h6 },
      })
      : notifSetter(null);
  };

  const listGenerator = () => {
    var resList: string[] = [];
    data.listPropName
      ? data.list.forEach((element) => {
        resList.push(modelItemsGenerator(element));
      })
      : (resList = data.list);
    return resList;
  };

  function modelItemsGenerator(element: any) {
    return typeof data.listPropName === 'string' ? element[data.listPropName] : combinedValues(element);
  }

  function combinedValues(element: any) {
    var txt = '';
    for (let index = 0; index < data.listPropName!?.length; index++) {
      txt = txt + ' ' + element[data?.listPropName![index]];
    }
    return txt;
  }

  return (
    <View style={[DropDownStyles.ModalDropdownContainer, style]}>
      {title && <CText {...title} />}
      <SelectDropdown
        defaultValue={defaultValueByIndex}
        defaultValueByIndex={defaultValueByIndex}
        defaultButtonText={defaultButtonText}
        buttonStyle={[DropDownStyles.buttonStyle, { borderBottomColor: notif ? notifColor : ColorSystem.gray!(30) }, allStyles?.buttonStyle]}
        buttonTextStyle={[
          // DropDownStyles.buttonTextStyle, allStyles?.buttonTextStyle,
          // { color: !anySelected ? ColorSystem.Primary : ColorSystem.gray!(60) }
        ]}
        rowStyle={[DropDownStyles.rowStyle, allStyles?.rowStyle]}
        rowTextStyle={[DropDownStyles.rowTextStyle, allStyles?.rowTextStyle]}
        dropdownStyle={[DropDownStyles.dropdownStyle, allStyles?.dropdownStyle]}
        selectedRowStyle={[DropDownStyles.selectedRowStyle, allStyles?.selectedRowStyle]}
        searchInputStyle={[DropDownStyles.searchInputStyle, allStyles?.searchInputStyle]}
        selectedRowTextStyle={[DropDownStyles.selectedRowTextStyle, allStyles?.selectedRowTextStyle]}
        search={search}
        data={listGenerator()}
        onSelect={(value: string, index: number) => {
          event?.onSelect && event.onSelect(data.list[index], index, value);
          set_anySelected(true);
          notifSetter(null);
        }}
        onBlur={() => set_isOpen(false)}
        onFocus={() => set_isOpen(true)}
        renderDropdownIcon={() => {
          // return <CIconGenerator iconName={isOpen ? Xml.upOneArrow(ColorSystem.gray!(50)) : Xml.downArrow(ColorSystem.gray!(50))} size={3} />;
        }}
      />
    </View>
  );
});

const DropDownStyles = StyleSheet.create({
  ModalDropdownContainer: { width: '100%', flexDirection: 'column', justifyContent: 'flex-end' },
  buttonStyle: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    // borderWidth: 1
    // padding: styleValues.paddin02,
    // backgroundColor: ColorSystem.gray!(5),
    // borderBottomColor: ColorSystem.gray!(30),
  },
  buttonTextStyle: {
    fontSize: EnumFontSize.h3,
    // height: '100%',
  },
  rowStyle: { borderBottomColor: ColorSystem.White, },
  rowTextStyle: {},
  dropdownStyle: {},
  searchInputStyle: {},
  selectedRowStyle: {},
  selectedRowTextStyle: { color: ColorSystem.Primary, fontSize: EnumFontSize.h3, textAlignVertical: 'bottom' },
});

export default memo(CDropdown);

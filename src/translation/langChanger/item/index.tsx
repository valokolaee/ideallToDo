import { StyleSheet } from 'react-native';
import { CText } from '../../../components/atoms/Ctext';
import { EnumFontSize } from '../../../components/utils/enums/EnumFontSize';
import { defaultPadding } from '../../../components/utils/enums/styleValues';
import ColorSystem from '../../../configs/color/ColorSystem';
import { useAppSelector } from '../../../redux/hooks';
import { ILang } from './ILang';

export default ({ lang, onSelect }: { lang: ILang; onSelect: (lang: ILang) => void }) => {
  const { name, rtl, value, icon, id } = lang || {}
  const _lang = useAppSelector((s) => s.langSlice)
  const isSel = _lang.id === id

  const _onSelect = () => {
    onSelect(lang)

  }

  return (
    <CText
      text={name}
      style={[defStyle.item,
        // isSel && { backgroundColor: ColorSystem.gray!(10) },
      ]}
      holderStyle={[isSel && { backgroundColor: ColorSystem.gray!(10) },]}
      event={{ onPress: _onSelect }}
      textAlign='center'
    />
  )
};
const defStyle = StyleSheet.create({
  item: {
    textAlign: 'center',
    textAlignVertical: 'center',
    padding: defaultPadding * 2,
    fontSize: EnumFontSize.h2,
    fontWeight: 'bold',
  },
});

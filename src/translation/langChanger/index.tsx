import { useEffect, useRef } from 'react';
import { View } from 'react-native';
import CGap from '../../components/atoms/CGap';
import CIconGenerator from '../../components/atoms/CIconGenerator';
import CList from '../../components/atoms/CList';
import { CText } from '../../components/atoms/Ctext';
import CModal from '../../components/organisms/CModal';
import Xml from '../../components/utils/svgs/Xml';
import { setLanguage } from '../../redux/actions';
import { useAppSelector } from '../../redux/hooks';
import DirectedView from '../directedView';
import Item from './item';
import { ILang } from './item/ILang';
import Langs, { Farsi } from './item/Langs';

export default ({ whitLabel }: { whitLabel?: boolean }) => {
  const modalRef = useRef<any>();
  const _lang_value = useAppSelector((s) => s.langSlice.value)
  const _lang_name = useAppSelector((s) => s.langSlice.name)

  const _openUp = () => {
    modalRef.current.setShowModal(true);

  }

  const _close = () => {
    modalRef.current.setShowModal(false);

  }

  const _setLang = (lang: ILang) => {
    setLanguage(lang)
    _close()
  }


  useEffect(() => { if (!!!_lang_value) { setLanguage(Farsi) } }, [])


  return (
    <View >
      <DirectedView
        touchable
        event={{ onPress: _openUp }}

      // style={{ borderWidth: 1, }}
      >

        <CIconGenerator
          iconName={Xml.translate()}
        />

        {whitLabel &&
          <>
            <CGap thick={20} />
            <CText text={_lang_name} />
          </>
        }
      </DirectedView>
      <CModal ref={modalRef}>
        <View >
          <CList
            list={Langs}
            customItem={(item: ILang, index) => <Item lang={item} onSelect={_setLang} />}
          />
        </View>
      </CModal>
    </View>
  );
};
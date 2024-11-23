import { useAppSelector } from '../../redux/hooks';
import Arabic from './data/Arabic';
import English from './data/English';
import Farsi from './data/Farsi';

export default () => {
  const lang = useAppSelector((s) => s.langSlice.value)

  switch (lang) {
    case 'ar':
      return Arabic;

    case 'en':
      return English;

    case 'fa':
    default:
      return Farsi;
  }
};

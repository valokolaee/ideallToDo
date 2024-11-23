import Arabic from './data/Arabic';
import English from './data/English';
export default {
  en: {
    translation: JSON.parse(JSON.stringify(English)),
  },
  ar: {
    translation: JSON.parse(JSON.stringify(Arabic)),
  },
  fa: {
    translation: JSON.parse(JSON.stringify(Arabic)),
  },
};

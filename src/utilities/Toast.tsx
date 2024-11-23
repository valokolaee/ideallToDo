import { Toast } from '@ant-design/react-native';

export default (s: string | number) => Toast.info(s?.toString());



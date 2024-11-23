import Ping from 'react-native-ping';

export default async () => {
  try {
    const ms = await Ping.start('www.google.com', { timeout: 1000 });
    return true;
  } catch (error) {
    return false;
  }
};

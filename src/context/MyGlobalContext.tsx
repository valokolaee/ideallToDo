import { createContext } from 'react';
import { GlobalContentType } from './GlobalContentType';

const MyGlobalContext = createContext<GlobalContentType>({

  baseBackGroundColor: { color: undefined, setColor(value) { } },
  currentLocation: { currentLocation: undefined, setCurrentLocation(value) { }, },

  Route: { route: undefined, setRoute(value) { }, }
});
export default MyGlobalContext;

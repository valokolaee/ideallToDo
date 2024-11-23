import { FC, useState } from 'react';
import { TColorSet } from '../configs/color/interfaceColor/IBaseColor';
import IGeolocationResponse from '../interfaces/IGeolocationResponse';
import { GlobalContentType } from './GlobalContentType';
import MyGlobalContext from './MyGlobalContext';

const MyGlobalContextProvider: FC<{ children: JSX.Element | JSX.Element[] }> = ({ children }) => {


  const [color, setColor] = useState<TColorSet>();
  function setColorHandler(value: TColorSet | undefined) {
    setColor(value);
  }


  const [rout, setRout] = useState<string>();
  function setRoutHandler(value: string | undefined) {
    setRout(value);
  }

  const [_currentLocation, set_currentLocation] = useState<IGeolocationResponse>();
  function set_currentLocationHandler(value: IGeolocationResponse | undefined) {
    set_currentLocation(value);
  }


  // const [geolocationResponse, setGeolocationResponse] = useState<IGeolocationResponse | undefined>();
  // function setGeolocationResponseHandler(value: IGeolocationResponse | undefined) {
  //   setGeolocationResponse(value);
  // }





  const contextValue: GlobalContentType = {
    currentLocation: { currentLocation: _currentLocation, setCurrentLocation: set_currentLocationHandler },
    // currentLocation: { currentLocation: geolocationResponse, setCurrentLocation: setGeolocationResponseHandler },

    baseBackGroundColor: { color: color, setColor: setColorHandler },
    Route: { route: rout, setRoute: setRoutHandler }

  };
  return <MyGlobalContext.Provider value={contextValue}>{children}</MyGlobalContext.Provider>;
};

export default MyGlobalContextProvider;

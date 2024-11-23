import IGeolocationResponse from "../../interfaces/IGeolocationResponse";

export type CurrentLocation = {
  currentLocation?: IGeolocationResponse;
  setCurrentLocation: (value: IGeolocationResponse | undefined) => void;
};

import { colorSet } from "../configs/color/interfaceColor/IBaseColor";
import Trip from "../dataBase/realm/models/Trip";
import { TTripStatus } from "./TTripStatus";

export default interface IOngoingTripeStatusInfo {
    status?: TTripStatus;
    routName?: string;
    step?: number;

}
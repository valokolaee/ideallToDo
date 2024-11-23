import { CompositeNavigationProp } from "@react-navigation/native";
import { StatusInfo } from "../../interfaces/IOngoingTripe";

export default interface INavInfo {
    nav: CompositeNavigationProp<any, any>;
    status?: StatusInfo

}9
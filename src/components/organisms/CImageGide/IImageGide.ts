import { IImageInfo } from "react-native-image-zoom-viewer/built/image-viewer.type";
import { IModal } from "../CModal/IModal";
import MetaPicture from "../../../dataBase/realm/models/basics/MetaPicture";

export default interface IImageGide {
    imageUrls: IImageInfo[];

    index?: number;

}
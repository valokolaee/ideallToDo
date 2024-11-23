import { ISelect } from "../../components/utils/interfacesUI/ISelect"

export interface IActionUI<T> extends ISelect<T> {
    data?: Partial<T>;
    onPress?: () => void;


}
import Task from "../realm/models/Task";
import { IActionUI } from "./IActionUI";

export default interface ITask extends Partial<Task> {
    selected?: boolean;
    actions?: IActionUI<Task>

}
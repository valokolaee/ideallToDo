
export interface ISelect<T> {
    disabled?: boolean;
    info?: T,
    select?: (value?: T) => void;
    clearSelection?: () => void;
    delete?: (value?: T) => void;
    edit?: (value?: T) => void;
    selected?: boolean;
    selectedItem?: Partial<T>;

}
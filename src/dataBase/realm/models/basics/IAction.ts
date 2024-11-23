export default interface IAction<T> {

    executions: (realm: Realm) => {
        getAll?: (conditions?: Partial<IGetAll> | undefined) => any
        getOne?: (conditions?: Partial<T>, byQuery?: boolean) => any
        create?: (object: Partial<T>) => any;
        update?: (oldObject: Partial<T>, newObject: Partial<T>) => void;
        delete?: (object: Partial<T>) => void;
        deleteList?: (conditions?: Partial<IGetAll> | undefined) => void;

    }
}


export interface IGetAll {
    byQuery?: boolean;
    sort?: TAscendOrDescend
    getBy?: IGetBy
    getByList?: IGetBy[]
    others?: any;
}

export type IGetBy = { name?: string, value: any };
export type TAscendOrDescend = {
    sortBy?: string;
    ascending?: boolean;
}
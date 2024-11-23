import { useQuery, useRealm } from "@realm/react";
import Model from ".";
import mrvLogs from "../../../../utilities/mrvLogs";
import IAction from "../basics/IAction";


const Queries: IAction<Model> = {
    executions(realm) {
        return {
            getAll(conditions) {

                const getByList = conditions?.getByList;
                const getBy = conditions?.getBy;
                const byQuery = conditions?.byQuery;

                const value = getBy?.value
                const name = getBy?.name

                var res = byQuery ? useQuery(Model) : realm.objects(Model)

                res = res.filtered(`deleted  != $0`, true).sorted('deadLine', false)
                if (getBy) res = res.filtered(`${name}  == $0`, value)

                if (getByList) { getByList.forEach(element => { res = res.filtered(`${element.name}  == $0`, element.value) }); }

                // res.sorted('deadLine', true);
                return res
            },
            create(object) {
                // mrvLogs(object, '_task in form')

                const _one = this.getOne!(object)

                if (_one) { return }
                object = { ...object, createDate: new Date() }

                realm.write(() => { if (!object) { return } return realm.create(Model, object); });

            },
            getOne(object, byQuery) {
                const all = this.getAll!({ byQuery })
                const _one = all.find((i: Model) => i.uuid === object?.uuid)
                // const _one = all.find((i: Model) => TextHelper.capitalize(i.title!) === TextHelper.capitalize(object?.title!))

                return _one
            },

            delete(object) {
                this.update!(object, {
                    deleted: true
                })
            },
            deleteList(conditions) {
                const list: Model[] = this.getAll!(conditions)
                list.forEach(element => {
                    this.delete!(element)

                });

            },
            update(oldObject, newObject) {
                // mrvLogs(newObject, 'newObject')
                if (realm.isClosed) { return }

                let _obj: Partial<Model> =
                    // oldObject
                    this.getOne!(oldObject);
                // let _obj = oldObject
                if (!_obj) { return }

                // mrvLogs(_obj, 'oldObject')
                // return
                newObject = { ...oldObject, ...newObject }

                realm.write(() => {

                    _obj.title = newObject?.title!
                    _obj.description = newObject?.description!
                    _obj.deadLine = newObject?.deadLine!
                    _obj.type = newObject?.type!
                    _obj.deleted = newObject?.deleted!

                    _obj.done = newObject?.done!
                    _obj.doneDate = newObject?.doneDate!
                    _obj.archived = newObject?.archived!
                    _obj.count = newObject?.count!
                    _obj.unit = newObject?.unit!
                    _obj.phoneNumber = newObject?.phoneNumber!
                });

            },
        }

    }

}


const TaskQueries = () => {
    const realm = useRealm();
    const Q = Queries.executions!(realm)
    return Q
}

export default TaskQueries
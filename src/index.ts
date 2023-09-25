import { ValueType, } from './types/index';
import { RandomUUIDOptions, randomUUID, } from 'crypto';


// eslint-disable-next-line @typescript-eslint/no-unused-vars
class bsCache<T> {
    private _elements: T[] = [];

    public Push(value: ValueType) {
        const uuid = randomUUID(12 as RandomUUIDOptions);
        return this._elements.push(Object({ uuid: value, "Pointer": uuid }));
    }
    public Delete(key: ValueType) {
        if (this.Exist(key)) {
            if (this._elements.indexOf((key as T)) !== -1) return this._elements.splice(this._elements.indexOf(key as T), 1);
        } else return false;
    }
    public Edit() { } // Push reemplaza la verga esta

    public Clear() {
        return this._elements = [];
    }
    public forEach() {
        return 0;
    }
    public Find(key: ValueType) {
        return this._elements.find(v => { v === key; }) ? this._elements.find(v => { v === key; }) : false;
    }
    public Exist(key: ValueType): boolean {
        return this._elements.find(v => { v === key; }) ? true : false;
    }
    /*   public Where(predicate: PredicateType): T[] {
          return this._elements.filter(predicate)
      } */
}
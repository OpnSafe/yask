import { ResolvableType, PredicateType, StructureType } from '../types';
/**
 * @class
 */
export default class Cache {
    private _elements;
    /**
     * @typedef {object} StructureType
     * @property {string} Pointer - Pointer id generated with uid
     * @property {string} Reference - Reference to find the pointer
     * @property {ResolvableType} value - pointer value
     */
    /**
     * @typedef {(string | number | boolean | object | object[] | string[] | number[])} ResolvableType
     */
    /**
     * @callback PredicateType<T>
     * @param {ResolvableType=} value
     * @param {number=} index
     * @param {StructureType[]} [array=]
     */
    /**
     * @public
     * @param {ResolvableType} value - Value to push in to cache
     * @param {string} reference - Reference to find the pointer
     * @description Push value to cache
     * @returns {number}
     */
    Add(value: ResolvableType, reference: string): number;
    /**
     * @public
     * @param {string} Reference - Reference to find the pointer
     * @description Remove cache table
     * @returns {this}
     */
    Delete(Reference: string): this;
    /**
     * @public
     * @param {ResolvableType} value - new value
     * @param {PredicateType<ResolvableType>} predicate
     * @description Edit cached value
     */
    Edit(value: ResolvableType, predicate: PredicateType<StructureType>): void;
    /**
     * @public
     * @description clear cache
     * @returns {number}
     */
    Clear(): number;
    /**
     * @public
     * @param {PredicateType<ResolvableType>} predicate
     * @returns {void}
     */
    ForEach(predicate: PredicateType<StructureType>): void;
    /**
     * @public
     * @param {PredicateType<ResolvableType>} predicate
     * @description Search for a value in the cache
     * @returns {ResolvableType}
     */
    Find(predicate: PredicateType<StructureType>): ResolvableType;
    /**
     * @public
     * @param {PredicateType<ResolvableType>} predicate
     * @description Check element exists in to cache by predicate
     * @returns {boolean}
     */
    Exist(predicate: PredicateType<StructureType>): boolean;
    /**
     * @public
     * @description Get all cache
     * @returns {StructureType[]}
     */
    All(): StructureType[];
    /**
     * @public
     * @description Get size cache
     * @returns {number}
     */
    Size(): number;
    /**
     * @public
     * @param predicate
     * @description Check a condition for all tables in the cache
     * @returns {boolean}
     */
    Check(predicate: PredicateType<StructureType>): boolean;
}

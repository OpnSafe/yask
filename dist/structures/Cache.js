"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const uid_1 = require("uid");
const Error_1 = __importDefault(require("./Error"));
/**
 * @class
 */
class Cache {
    _elements = [];
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
    Add(value, reference) {
        const _pointerid = (0, uid_1.uid)(12);
        this.ForEach((x, i) => {
            if (typeof x === "undefined" || typeof i === "undefined")
                return;
            if (x.Reference === reference)
                throw new Error_1.default(1);
            if (x.value == value)
                delete this._elements[i];
        });
        return this._elements.push({ Pointer: _pointerid, Reference: reference, value: value });
    }
    /**
     * @public
     * @param {string} Reference - Reference to find the pointer
     * @description Remove cache table
     * @returns {this}
     */
    Delete(Reference) {
        const exists = this.Exist((x) => x?.Reference === Reference);
        if (!exists)
            throw new Error_1.default(2);
        const element = this._elements.findIndex((x) => x["Reference"] === Reference);
        delete this._elements[element];
        return this;
    }
    /**
     * @public
     * @param {ResolvableType} value - new value
     * @param {PredicateType<ResolvableType>} predicate
     * @description Edit cached value
     */
    Edit(value, predicate) {
        const exists = this.Exist(predicate);
        if (!exists)
            throw new Error_1.default(2);
        const element = this._elements.findIndex(predicate);
        if (typeof (this._elements[element].value) !== typeof (value))
            throw new Error_1.default(0);
        this._elements[element].value = value;
    }
    /**
     * @public
     * @description clear cache
     * @returns {number}
     */
    Clear() {
        return this._elements.length = 0;
    }
    /**
     * @public
     * @param {PredicateType<ResolvableType>} predicate
     * @returns {void}
     */
    ForEach(predicate) {
        return this._elements.forEach(predicate);
    }
    /**
     * @public
     * @param {PredicateType<ResolvableType>} predicate
     * @description Search for a value in the cache
     * @returns {ResolvableType}
     */
    Find(predicate) {
        const element = this._elements.find(predicate);
        if (!element)
            throw new Error_1.default(2);
        return element.value;
    }
    /**
     * @public
     * @param {PredicateType<ResolvableType>} predicate
     * @description Check element exists in to cache by predicate
     * @returns {boolean}
     */
    Exist(predicate) {
        return typeof this._elements.find(predicate) !== "undefined" ? true : false;
    }
    /**
     * @public
     * @description Get all cache
     * @returns {StructureType[]}
     */
    All() {
        return this._elements;
    }
    /**
     * @public
     * @description Get size cache
     * @returns {number}
     */
    Size() {
        return this._elements.length;
    }
    /**
     * @public
     * @param predicate
     * @description Check a condition for all tables in the cache
     * @returns {boolean}
     */
    Check(predicate) {
        return this._elements.every(predicate);
    }
}
exports.default = Cache;
//# sourceMappingURL=Cache.js.map
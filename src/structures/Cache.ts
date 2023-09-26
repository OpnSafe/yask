import { uid } from 'uid';
import { ResolvableType, PredicateType, StructureType } from '../types';
import CacheError from './Error';

/**
 * @class
 */
export default class Cache {
	private _elements: StructureType[] = [];

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
	public Add(value: ResolvableType, reference: string): number {
		const _pointerid = uid(12);

		this.ForEach((x, i) => {
			if (typeof x === "undefined" || typeof i === "undefined") return;

			if (x.Reference === reference)
				throw new CacheError(1); 

			if (x.value == value)
				delete this._elements[i];
		})

		return this._elements.push({ Pointer: _pointerid, Reference: reference, value: value });
	}

	/**
	 * @public
	 * @param {string} Reference - Reference to find the pointer
	 * @description Remove cache table
	 * @returns {this}
	 */
	public Delete(Reference: string): this {
		const exists = this.Exist((x) => x?.Reference === Reference);

		if (!exists)
			throw new CacheError(2);

		const element = this._elements.findIndex((x: any) => x["Reference"] === Reference);

		delete this._elements[element];

		return this;
	}

	/**
	 * @public
	 * @param {ResolvableType} value - new value
	 * @param {PredicateType<ResolvableType>} predicate 
	 * @description Edit cached value
	 */
	public Edit(value: ResolvableType, predicate: PredicateType<StructureType>): void {
		const exists = this.Exist(predicate);

		if (!exists)
			throw new CacheError(2);
		
		const element = this._elements.findIndex(predicate);

		if (typeof(this._elements[element].value) !== typeof(value))
			throw new CacheError(0);

		this._elements[element].value = value;
	}

	/**
	 * @public
	 * @description clear cache
	 * @returns {number}
	 */
	public Clear(): number {
		return this._elements.length = 0;
	}

	/**
	 * @public
	 * @param {PredicateType<ResolvableType>} predicate 
	 * @returns {void}
	 */
	public ForEach(predicate: PredicateType<StructureType>): void {
		return this._elements.forEach(predicate);
	}

	/**
	 * @public
	 * @param {PredicateType<ResolvableType>} predicate 
	 * @description Search for a value in the cache
	 * @returns {ResolvableType}
	 */
	public Find(predicate: PredicateType<StructureType>): ResolvableType {
		const element = this._elements.find(predicate);

		if (!element)
			throw new CacheError(2);

		return element.value;
	}

	/**
	 * @public
	 * @param {PredicateType<ResolvableType>} predicate 
	 * @description Check element exists in to cache by predicate
	 * @returns {boolean}
	 */
	public Exist(predicate: PredicateType<StructureType>): boolean {
		return typeof this._elements.find(predicate) !== "undefined" ? true : false;
	}

	/**
	 * @public
	 * @description Get all cache
	 * @returns {StructureType[]}
	 */
	public All(): StructureType[] {
		return this._elements;
	}

	/**
	 * @public
	 * @description Get size cache
	 * @returns {number}
	 */
	public Size(): number {
		return this._elements.length;
	}

	/**
	 * @public
	 * @param predicate 
	 * @description Check a condition for all tables in the cache
	 * @returns {boolean}
	 */
	public Check(predicate: PredicateType<StructureType>): boolean {
		return this._elements.every(predicate)
	}
}
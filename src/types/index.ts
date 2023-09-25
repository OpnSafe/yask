export type StructureType = { Pointer: string, Reference: string, value: ResolvableType };

export type ResolvableType = string | number | boolean | object | object[] | string[] | number[];

export type PredicateType<T> = (value?: T, index?: number, array?: T[]) => unknown | void;
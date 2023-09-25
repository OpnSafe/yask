# yask ~ Your Accessible Storage Knowledge

> Documentation: [yask Docs](https://OpnSafe.github.io/yask/index.html)

![License](https://img.shields.io/badge/License-MIT-blue.svg)

![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Node](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Yarn](https://img.shields.io/badge/yarn-2D8EB9?style=for-the-badge&logo=yarn&logoColor=white)
![Pnpm](https://img.shields.io/badge/pnpm-F9AC00?style=for-the-badge&logo=pnpm&logoColor=white)
![NPM](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)

# Information

- 💻 Efficient and fast cache.
- 🦋 Simple and easy to use.

# Important!
> This package is in the test and debug phase, its use is recommended as long as you know what you are using, for people with no knowledge about caches its use is not recommended in this phase.

# :wrench: Installation

```
npm i yask --save
pnpm add yask --save
yarn add yask --save
```

# Why use YASK

## :pushpin: Structure

Proximamente!

> A simple structure but functional from any side you look at it.

## :zap: Flexibility & Scalability

> This cache is flexible, non-scalable and is specifically developed for large data management and can be used in any context.

## :package:  Cache

> Its operation is based on an array that manages data within it, using methods as simple as Push, Delete, ForEach and more.

### :clipboard: Important Notes:
> Read the ![documentation](https://printfdead.github.io/yask) please!

> The errors and/or warnings shown in this documentation are errors/warns that can occur when running `yask`, they are only informative, a solution can be reached by reading the description of each error/warn.

# Methods
> `Start cache`
```ts
// Create the cache/ directory and create a file with any name and put the following
import { Cache } from 'yask';

export default new Cache();

// In another file you can import and use the cache without problem
import MyCache from 'path/to/cache/file'

MyCache.Push("Awesome yask cache", "Pointer Reference");
```
#### Note:
- **Cache:** It is not necessary to create folders or files, you can use them within the same file, it is recommended only if you want to move it throughout the project.
---
> `Push`
```ts
/**
 * @public
 * @param {ResolvableType} value - Value to push in to cache
 * @param {string} reference - Reference to find the pointer
 * @description Push value to cache
 * @returns {number}
 */

MyCache.Push("This value can be of several types", "Pointer Reference");
```
#### Note:
- **Pointer Reference:** The reference of the pointer is necessary when searching for it, both in Predicates and in other methods, when doing push it is specified to create the pointer with its reference.
---
> `Delete`
```ts
/**
 * @public
 * @param {string} Reference - Reference to find the pointer
 * @description Remove cache table
 * @returns {this}
 */

MyCache.Delete("Pointer Reference");
```
---
> `Edit`
```ts
/**
 * @public
 * @param {ResolvableType} value - new value
 * @param {PredicateType<ResolvableType>} predicate 
 * @description Edit cached value
 */

MyCache.Edit("New value", (x) => x?.Reference === "Pointer Reference");
```
#### Note:
- **New value:** It is necessary that the new value to be set coincides with the value to be edited.
---
> `Clear`
```ts
/**
 * @public
 * @description clear cache
 * @returns {number}
 */

MyCache.Clear();
```
---
> `ForEach`
```ts
/**
 * @public
 * @param {PredicateType<ResolvableType>} predicate 
 * @returns {void}
 */

MyCache.ForEach((x) => {
    if (x?.Reference === "Pointer Reference")
        x?.value = "Hello World!";
});
```
---
> `Find`
```ts
/**
 * @public
 * @param {PredicateType<ResolvableType>} predicate 
 * @description Search for a value in the cache
 * @returns {ResolvableType}
 */

MyCache.Find((x) => x?.value === "Hello World!");
```
---
> `Exist`
```ts
/**
 * @public
 * @param {PredicateType<ResolvableType>} predicate 
 * @description Check element exists in to cache by predicate
 * @returns {boolean}
 */

MyCache.Exist((x) => x?.value === "Hello World!");
```
---
> `All`
```ts
/**
 * @public
 * @description Get all cache
 * @returns {StructureType[]}
 */

MyCache.All();
```
---
> `Size`
```ts
/**
 * @public
 * @description Get size cache
 * @returns {number}
 */

MyCache.Size();
```
---
> `Check`
```ts
/**
 * @public
 * @param predicate 
 * @description Check a condition for all tables in the cache
 * @returns {boolean}
 */

MyCache.Check((x) => x?.value != "Hello World!")
```
#### Note:
- **Use:** The 'Check()' method is used to see if the 'predicate' is true in all tables in the cache.

### :exclamation: Possible Errors:
- **(yask-01) The type of the value does not correspond to the new value.** This error is because when you edit a value the types of both values (new, old) are not the same.
- **(yask-02) Two pointers cannot have the same reference.** This error occurs because two pointers contain the same reference.
- **(yask-03) This pointer does not exist.** This is because the pointer, value or reference was not found or not exist.
- **(yask-99) Unknown error.** This error is unknown, it may be an unhandled error.

## See more
[![Discord](https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white)](https://discord.gg/ZdMqhEWhUN)
[![Documentation](https://img.shields.io/badge/Documentation-00386F?style=for-the-badge&logo=gitbook&logoColor=white)](https://OpnSafe.github.io/yask)
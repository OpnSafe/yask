import { test, expect, describe } from '@jest/globals';
import { Cache } from '../index';
import { StructureType, ResolvableType } from '../types';

describe("Test database", () =>
{
	test("Test all functions", async () =>
	{
		const MyCache = new Cache();

        expect(MyCache.Add("Hello World!", "Test1"))
        expect(MyCache.Add("Hi World!", "Test2"))
        
        MyCache.ForEach((x) => {
            console.log("pointer => " + x?.Pointer + "\n" + "value => " + x?.value);
        });

        MyCache.Edit("Bye World!", (x) => x?.value === "Hello World!" && x?.Reference === "Test1");

        console.log(MyCache.All());
    });
});
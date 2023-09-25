"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const index_1 = require("../index");
(0, globals_1.describe)("Test database", () => {
    (0, globals_1.test)("Test all functions", async () => {
        const MyCache = new index_1.Cache();
        (0, globals_1.expect)(MyCache.Push("Hello World!", "Test1"));
        (0, globals_1.expect)(MyCache.Push("Hi World!", "Test2"));
        MyCache.ForEach((x) => {
            console.log("pointer => " + x?.Pointer + "\n" + "value => " + x?.value);
        });
        MyCache.Edit("Bye World!", (x) => x?.value === "Hello World!" && x?.Reference === "Test1");
        console.log(MyCache.All());
    });
});
//# sourceMappingURL=index.test.js.map
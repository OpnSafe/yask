"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CacheError extends Error {
    constructor(id) {
        super();
        this.message = this.search(id);
    }
    search(id) {
        switch (id) {
            case 0: return "(yask-01) The type of the value does not correspond to the new value.";
            case 1: return "(yask-02) Two pointers cannot have the same reference.";
            case 2: return "(yask-03) This pointer does not exist.";
            default: return "(yask-99) Unknown error.";
        }
    }
}
exports.default = CacheError;
//# sourceMappingURL=Error.js.map
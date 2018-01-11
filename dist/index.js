(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./angular-aurelia-adapter"], factory);
    }
})(function (exports) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(require("./angular-aurelia-adapter"));
    exports.configure = function (aurelia) {
        aurelia.globalResources("angular-aurelia-adapter");
    };
});

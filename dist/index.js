"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./angular-aurelia-adapter"));
exports.configure = function (aurelia) {
    aurelia.globalResources("angular-aurelia-adapter/angularjs-adapter");
};

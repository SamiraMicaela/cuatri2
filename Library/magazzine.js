"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Magazzine = void 0;
var item_1 = require("./item");
var Magazzine = /** @class */ (function (_super) {
    __extends(Magazzine, _super);
    function Magazzine(title, editor, year, id) {
        var _this = _super.call(this, title, year, id) || this;
        _this.editor = editor;
        return _this;
    }
    Magazzine.prototype.getEditor = function () {
        return this.editor;
    };
    ;
    Magazzine.prototype.setEditor = function () { };
    return Magazzine;
}(item_1.Item));
exports.Magazzine = Magazzine;

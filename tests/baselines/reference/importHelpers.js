//// [tests/cases/compiler/importHelpers.ts] ////

//// [external.ts]
export class A { }
export class B extends A { }

declare var dec: any;

@dec
class C {
    method(@dec x: number) {
    }
}

//// [script.ts]
class A { }
class B extends A { }

declare var dec: any;

@dec
class C {
    method(@dec x: number) {
    }
}

//// [tslib.d.ts]
export declare function __extends(d: Function, b: Function): void;
export declare function __assign(t: any, ...sources: any[]): any;
export declare function __decorate(decorators: Function[], target: any, key?: string | symbol, desc?: any): any;
export declare function __param(paramIndex: number, decorator: Function): Function;
export declare function __metadata(metadataKey: any, metadataValue: any): Function;
export declare function __awaiter(thisArg: any, _arguments: any, P: Function, generator: Function): any;


//// [external.js]
"use strict";
var tslib_1 = require("tslib");
var A = (function () {
    function A() {
    }
    return A;
}());
exports.A = A;
var B = (function (_super) {
    tslib_1.__extends(B, _super);
    function B() {
        _super.apply(this, arguments);
    }
    return B;
}(A));
exports.B = B;
var C = (function () {
    function C() {
    }
    C.prototype.method = function (x) {
    };
    return C;
}());
tslib_1.__decorate([
    tslib_1.__param(0, dec),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", void 0)
], C.prototype, "method", null);
C = tslib_1.__decorate([
    dec,
    tslib_1.__metadata("design:paramtypes", [])
], C);
//// [script.js]
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var A = (function () {
    function A() {
    }
    return A;
}());
var B = (function (_super) {
    __extends(B, _super);
    function B() {
        _super.apply(this, arguments);
    }
    return B;
}(A));
var C = (function () {
    function C() {
    }
    C.prototype.method = function (x) {
    };
    return C;
}());
__decorate([
    __param(0, dec),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], C.prototype, "method", null);
C = __decorate([
    dec,
    __metadata("design:paramtypes", [])
], C);
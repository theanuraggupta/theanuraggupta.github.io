(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/util/construction/construction.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/util/construction/construction.component.ts ***!
  \*************************************************************/
/*! exports provided: ConstructionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConstructionComponent", function() { return ConstructionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ConstructionComponent = /** @class */ (function () {
    function ConstructionComponent() {
    }
    ConstructionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-construction',
            template: "<h2>Page construction in progress!!!</h2>"
        })
    ], ConstructionComponent);
    return ConstructionComponent;
}());



/***/ }),

/***/ "./src/app/util/util.module.ts":
/*!*************************************!*\
  !*** ./src/app/util/util.module.ts ***!
  \*************************************/
/*! exports provided: UtilModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilModule", function() { return UtilModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _construction_construction_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./construction/construction.component */ "./src/app/util/construction/construction.component.ts");



var UtilModule = /** @class */ (function () {
    function UtilModule() {
    }
    UtilModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_construction_construction_component__WEBPACK_IMPORTED_MODULE_2__["ConstructionComponent"]],
            imports: [],
            exports: [_construction_construction_component__WEBPACK_IMPORTED_MODULE_2__["ConstructionComponent"]]
        })
    ], UtilModule);
    return UtilModule;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map
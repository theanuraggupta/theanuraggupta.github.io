(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["posts-posts-module"],{

/***/ "./src/app/posts/posts-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/posts/posts-routing.module.ts ***!
  \***********************************************/
/*! exports provided: PostsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsRoutingModule", function() { return PostsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _posts_posts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./posts/posts.component */ "./src/app/posts/posts/posts.component.ts");




var routes = [
    { path: '', component: _posts_posts_component__WEBPACK_IMPORTED_MODULE_3__["PostsComponent"] }
];
var PostsRoutingModule = /** @class */ (function () {
    function PostsRoutingModule() {
    }
    PostsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], PostsRoutingModule);
    return PostsRoutingModule;
}());



/***/ }),

/***/ "./src/app/posts/posts.module.ts":
/*!***************************************!*\
  !*** ./src/app/posts/posts.module.ts ***!
  \***************************************/
/*! exports provided: PostsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsModule", function() { return PostsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _posts_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./posts-routing.module */ "./src/app/posts/posts-routing.module.ts");
/* harmony import */ var _posts_posts_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./posts/posts.component */ "./src/app/posts/posts/posts.component.ts");
/* harmony import */ var _util_util_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/util.module */ "./src/app/util/util.module.ts");
/* harmony import */ var _util_construction_construction_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/construction/construction.component */ "./src/app/util/construction/construction.component.ts");







var PostsModule = /** @class */ (function () {
    function PostsModule() {
    }
    PostsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_posts_posts_component__WEBPACK_IMPORTED_MODULE_4__["PostsComponent"], _util_construction_construction_component__WEBPACK_IMPORTED_MODULE_6__["ConstructionComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _util_util_module__WEBPACK_IMPORTED_MODULE_5__["UtilModule"],
                _posts_routing_module__WEBPACK_IMPORTED_MODULE_3__["PostsRoutingModule"]
            ]
        })
    ], PostsModule);
    return PostsModule;
}());



/***/ }),

/***/ "./src/app/posts/posts/posts.component.html":
/*!**************************************************!*\
  !*** ./src/app/posts/posts/posts.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <app-construction></app-construction>\r\n</div>"

/***/ }),

/***/ "./src/app/posts/posts/posts.component.ts":
/*!************************************************!*\
  !*** ./src/app/posts/posts/posts.component.ts ***!
  \************************************************/
/*! exports provided: PostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsComponent", function() { return PostsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PostsComponent = /** @class */ (function () {
    function PostsComponent() {
    }
    PostsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-posts',
            template: __webpack_require__(/*! ./posts.component.html */ "./src/app/posts/posts/posts.component.html")
        })
    ], PostsComponent);
    return PostsComponent;
}());



/***/ }),

/***/ "./src/app/util/construction/construction.component.html":
/*!***************************************************************!*\
  !*** ./src/app/util/construction/construction.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>\r\n  Page construction in progress!!!\r\n</h2>"

/***/ }),

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
            template: __webpack_require__(/*! ./construction.component.html */ "./src/app/util/construction/construction.component.html")
        })
    ], ConstructionComponent);
    return ConstructionComponent;
}());



/***/ }),

/***/ "./src/app/util/util-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/util/util-routing.module.ts ***!
  \*********************************************/
/*! exports provided: UtilRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilRoutingModule", function() { return UtilRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _construction_construction_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./construction/construction.component */ "./src/app/util/construction/construction.component.ts");




var routes = [
    { path: '', component: _construction_construction_component__WEBPACK_IMPORTED_MODULE_3__["ConstructionComponent"] }
];
var UtilRoutingModule = /** @class */ (function () {
    function UtilRoutingModule() {
    }
    UtilRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], UtilRoutingModule);
    return UtilRoutingModule;
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _util_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util-routing.module */ "./src/app/util/util-routing.module.ts");




var UtilModule = /** @class */ (function () {
    function UtilModule() {
    }
    UtilModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _util_routing_module__WEBPACK_IMPORTED_MODULE_3__["UtilRoutingModule"]
            ]
        })
    ], UtilModule);
    return UtilModule;
}());



/***/ })

}]);
//# sourceMappingURL=posts-posts-module.js.map
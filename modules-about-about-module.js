(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-about-about-module"],{

/***/ "./src/app/modules/about/about-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/about/about-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: AboutRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutRoutingModule", function() { return AboutRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about.component */ "./src/app/modules/about/about.component.ts");




var routes = [
    {
        path: '', component: _about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"]
    }
];
var AboutRoutingModule = /** @class */ (function () {
    function AboutRoutingModule() {
    }
    AboutRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AboutRoutingModule);
    return AboutRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/about/about.component.html":
/*!****************************************************!*\
  !*** ./src/app/modules/about/about.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"about animated fadeIn vertical-center\">\r\n    <div class=\"row top-buffer-120\">\r\n        <!-- <div class=\"col-md-6\">\r\n        \r\n        </div> -->\r\n        <div class=\"col-md-6\">\r\n        <h4><em>Hello there,</em> my name is</h4>\r\n        <h2 class=\"highlight\">Anurag Gupta</h2>\r\n        <p>I’m a 30 year old enthusiastic UI developer with <span class=\"abouthighlight\">7 years of IT experience.</span>&nbsp;Specialising in web architecture and front end development with the help of cutting edge web technologies.</p>\r\n        <p>Over the years I have found a new love for anything digital and making technology easy to use and accessible to everyone (feels good to do good).</p>\r\n        <p>Feel free to <a class=\"abouthighlight\" href=\"mailto:anuraggupta.hits@gmail.com?Subject=Hello%20Anurag\">contact</a> me here.</p>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/about/about.component.ts":
/*!**************************************************!*\
  !*** ./src/app/modules/about/about.component.ts ***!
  \**************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/modules/about/about.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/modules/about/about.module.ts":
/*!***********************************************!*\
  !*** ./src/app/modules/about/about.module.ts ***!
  \***********************************************/
/*! exports provided: AboutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutModule", function() { return AboutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _about_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about-routing.module */ "./src/app/modules/about/about-routing.module.ts");
/* harmony import */ var _about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about.component */ "./src/app/modules/about/about.component.ts");




var AboutModule = /** @class */ (function () {
    function AboutModule() {
    }
    AboutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_about_routing_module__WEBPACK_IMPORTED_MODULE_2__["AboutRoutingModule"]],
            declarations: [_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"]]
        })
    ], AboutModule);
    return AboutModule;
}());



/***/ })

}]);
//# sourceMappingURL=modules-about-about-module.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-posts-posts-module"],{

/***/ "./src/app/modules/posts/posts-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/posts/posts-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: PostsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsRoutingModule", function() { return PostsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _posts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./posts.component */ "./src/app/modules/posts/posts.component.ts");




var routes = [
    { path: '', component: _posts_component__WEBPACK_IMPORTED_MODULE_3__["PostsComponent"] }
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

/***/ "./src/app/modules/posts/posts.component.html":
/*!****************************************************!*\
  !*** ./src/app/modules/posts/posts.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row top-buffer-60 animated fadeIn\">\r\n  <!-- <app-construction></app-construction> -->\r\n  <div class=\"accordion\" id=\"accordionExample\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\" id=\"headingOne\">\r\n        <h5 class=\"mb-0\">\r\n          <button class=\"btn btn-link\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\r\n            Collapsible Group Item #1\r\n          </button>\r\n        </h5>\r\n      </div>\r\n  \r\n      <div id=\"collapseOne\" class=\"collapse show\" aria-labelledby=\"headingOne\" data-parent=\"#accordionExample\">\r\n        <div class=\"card-body animated fadeIn\">\r\n          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"card\">\r\n      <div class=\"card-header\" id=\"headingTwo\">\r\n        <h5 class=\"mb-0\">\r\n          <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseTwo\" aria-expanded=\"false\" aria-controls=\"collapseTwo\">\r\n            Collapsible Group Item #2\r\n          </button>\r\n        </h5>\r\n      </div>\r\n      <div id=\"collapseTwo\" class=\"collapse\" aria-labelledby=\"headingTwo\" data-parent=\"#accordionExample\">\r\n        <div class=\"card-body animated fadeIn\">\r\n          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/posts/posts.component.ts":
/*!**************************************************!*\
  !*** ./src/app/modules/posts/posts.component.ts ***!
  \**************************************************/
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
            template: __webpack_require__(/*! ./posts.component.html */ "./src/app/modules/posts/posts.component.html")
        })
    ], PostsComponent);
    return PostsComponent;
}());



/***/ }),

/***/ "./src/app/modules/posts/posts.module.ts":
/*!***********************************************!*\
  !*** ./src/app/modules/posts/posts.module.ts ***!
  \***********************************************/
/*! exports provided: PostsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsModule", function() { return PostsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _posts_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./posts-routing.module */ "./src/app/modules/posts/posts-routing.module.ts");
/* harmony import */ var _posts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./posts.component */ "./src/app/modules/posts/posts.component.ts");
/* harmony import */ var _util_util_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../util/util.module */ "./src/app/util/util.module.ts");





var PostsModule = /** @class */ (function () {
    function PostsModule() {
    }
    PostsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _posts_component__WEBPACK_IMPORTED_MODULE_3__["PostsComponent"]
            ],
            imports: [
                _posts_routing_module__WEBPACK_IMPORTED_MODULE_2__["PostsRoutingModule"],
                _util_util_module__WEBPACK_IMPORTED_MODULE_4__["UtilModule"]
            ]
        })
    ], PostsModule);
    return PostsModule;
}());



/***/ })

}]);
//# sourceMappingURL=modules-posts-posts-module.js.map
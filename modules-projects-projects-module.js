(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-projects-projects-module"],{

/***/ "./src/app/modules/projects/projects-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/projects/projects-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: ProjectsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsRoutingModule", function() { return ProjectsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _projects_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects.component */ "./src/app/modules/projects/projects.component.ts");




var routes = [
    {
        path: '', component: _projects_component__WEBPACK_IMPORTED_MODULE_3__["ProjectsComponent"]
    }
];
var ProjectsRoutingModule = /** @class */ (function () {
    function ProjectsRoutingModule() {
    }
    ProjectsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ProjectsRoutingModule);
    return ProjectsRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/projects/projects.component.html":
/*!**********************************************************!*\
  !*** ./src/app/modules/projects/projects.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <app-construction></app-construction>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/projects/projects.component.ts":
/*!********************************************************!*\
  !*** ./src/app/modules/projects/projects.component.ts ***!
  \********************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent() {
    }
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! ./projects.component.html */ "./src/app/modules/projects/projects.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/modules/projects/projects.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/projects/projects.module.ts ***!
  \*****************************************************/
/*! exports provided: ProjectsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsModule", function() { return ProjectsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _projects_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects-routing.module */ "./src/app/modules/projects/projects-routing.module.ts");
/* harmony import */ var _projects_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects.component */ "./src/app/modules/projects/projects.component.ts");
/* harmony import */ var _util_util_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../util/util.module */ "./src/app/util/util.module.ts");





var ProjectsModule = /** @class */ (function () {
    function ProjectsModule() {
    }
    ProjectsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _projects_component__WEBPACK_IMPORTED_MODULE_3__["ProjectsComponent"]
            ],
            imports: [
                _projects_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProjectsRoutingModule"],
                _util_util_module__WEBPACK_IMPORTED_MODULE_4__["UtilModule"]
            ]
        })
    ], ProjectsModule);
    return ProjectsModule;
}());



/***/ })

}]);
//# sourceMappingURL=modules-projects-projects-module.js.map
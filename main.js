(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./modules/about/about.module": [
		"./src/app/modules/about/about.module.ts",
		"modules-about-about-module"
	],
	"./modules/posts/posts.module": [
		"./src/app/modules/posts/posts.module.ts",
		"common",
		"modules-posts-posts-module"
	],
	"./modules/projects/projects.module": [
		"./src/app/modules/projects/projects.module.ts",
		"common",
		"modules-projects-projects-module"
	],
	"./util/util.module": [
		"./src/app/util/util.module.ts",
		"common"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");




var routes = [
    {
        path: '', redirectTo: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], pathMatch: 'full'
    },
    {
        path: 'about', loadChildren: './modules/about/about.module#AboutModule'
    },
    {
        path: 'posts', loadChildren: './modules/posts/posts.module#PostsModule'
    },
    {
        path: 'projects', loadChildren: './modules/projects/projects.module#ProjectsModule'
    },
    {
        path: 'construction', loadChildren: './util/util.module#UtilModule'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"wrapper\">\r\n    <div class=\"animated slideOutRight loader d-none d-sm-none d-md-block\"></div>\r\n    <header></header>\r\n    <!-- CONTENT -->\r\n    <div class=\"container\">\r\n        <router-outlet>\r\n        </router-outlet>\r\n    </div>\r\n    <!-- CONTENT -->\r\n    <!-- FOOTER -->\r\n    <nav class=\"navbar fixed-bottom navbar-expand-lg navbar-dark animated fadeInUp\">\r\n        <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo01\">\r\n            <ul class=\"navbar-nav\">\r\n                <!-- <li class=\"nav-item hidden-sm\">\r\n                    <a class=\"nav-link\" href=\"mailto:anuraggupta.hits@gmail.com?Subject=Hello%20Anurag\">Contact</a>\r\n                </li> -->\r\n                <!-- <li class=\"nav-item hidden-sm\">\r\n                    <a class=\"nav-link\" target=\"_blank\" href=\"https://www.instagram.com/anurag_______gupta/\"><i class=\"fa fa-instagram\"></i>Instagram</a>\r\n                </li> -->\r\n                <li class=\"nav-item hidden-sm\">\r\n                    <a class=\"nav-link\" target=\"_blank\" href=\"https://www.linkedin.com/in/theanuraggupta/\"><i class=\"fa fa-linkedin-square\"></i>LinkedIn</a>\r\n                </li>\r\n                <li class=\"nav-item active\">\r\n                    <a class=\"nav-link\" target=\"_blank\" href=\"https://github.com/theanuraggupta\"><i class=\"fa fa-github\" aria-hidden=\"true\"></i>Github</a>\r\n                </li>\r\n                <!-- <li class=\"nav-item active hidden-lg\">\r\n                    <a class=\"nav-link\" routerLink=\"/posts\" routerLinkActive=\"active\"><i class=\"fa fa-blogger\"></i>Posts</a>\r\n                </li> -->\r\n                <li class=\"nav-item active hidden-lg\">\r\n                    <a class=\"nav-link\" routerLink=\"/about\" routerLinkActive=\"active\"><i class=\"fa fa-info-circle\"></i>About</a>\r\n                </li>\r\n                <li class=\"nav-item active hidden-lg\">\r\n                    <a class=\"nav-link\" href=\"mailto:anuraggupta.hits@gmail.com?Subject=Hello%20Anurag\"><i class=\"fa fa-envelope-open\"></i>Contact</a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </nav>\r\n    <!--FOOTER  -->\r\n</div>\r\n  \r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_7__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].production })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top navbar-expand-lg animated fadeInDown navbar-dark\">\r\n  <a class=\"navbar-brand\" routerLink=\"/\">ANURAG GUPTA</a>\r\n  <!-- <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo01\" aria-controls=\"navbarTogglerDemo01\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button> -->\r\n  <div class=\"collapse navbar-collapse hidden-sm\" id=\"navbarTogglerDemo01\">\r\n    <ul class=\"navbar-nav ml-auto\">\r\n      <li class=\"nav-item active\">\r\n        <!--  class=\"nav-item active dropdown-toggle position-relative\" data-toggle=\"dropdown\" -->\r\n        <!-- <a class=\"nav-link\" href=\"https://github.com/theanuraggupta\" target=\"_blank\">\r\n          <i class=\"fa fa-github\" aria-hidden=\"true\"></i>\r\n          <span>Github</span>\r\n        </a> -->\r\n        <!-- <div class=\"dropdown-menu\">\r\n          <a class=\"dropdown-item\" target=\"_blank\" (click)=\"$event.stopPropagation()\" href=\"https://github.com/theanuraggupta\">Github</a>\r\n          <a class=\"dropdown-item\" routerLink=\"/projects\" (click)=\"$event.stopPropagation()\">In Site</a>\r\n        </div> -->\r\n      </li>\r\n      <!-- <li class=\"nav-item active\">\r\n        <a class=\"nav-link\" routerLink=\"/posts\" routerLinkActive=\"active\">\r\n          <i class=\"fa fa-twitch\" aria-hidden=\"true\"></i>\r\n          <span>Posts</span>\r\n        </a>\r\n      </li> -->\r\n      <li class=\"nav-item active\">\r\n        <a class=\"nav-link\" routerLink=\"/about\" routerLinkActive=\"active\">\r\n          <i class=\"fa fa-info-circle\"></i>\r\n          <span>About</span>\r\n        </a>\r\n      </li>\r\n      <li class=\"nav-item active\">\r\n        <a class=\"nav-link\" href=\"mailto:anuraggupta.hitsgupta@gmail.com?Subject=Hello%20Anurag\">\r\n          <i class=\"fa fa-envelope-open\"></i>\r\n          <span>Contact</span>\r\n        </a>\r\n      </li>\r\n      <!-- <li class=\"dropdown\">\r\n        <button class=\"btn btn-xs btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          Themes\r\n        </button>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\r\n          <a class=\"dropdown-item\" href=\"#\">Action</a>\r\n          <a class=\"dropdown-item\" href=\"#\">Another action</a>\r\n          <a class=\"dropdown-item\" href=\"#\">Something else here</a>\r\n        </div>\r\n      </li> -->\r\n    </ul>\r\n  </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container homepage animated fadeIn vertical-center\">\r\n    <div class=\"row justify-content-center align-items-center\">\r\n      <div class=\"col-md\">\r\n        <h1 class=\"left\">\r\n          <span class=\"highlight\">Hello,</span>\r\n          I'm a user interface\r\n          <br>\r\n          developer based in Bengaluru, India.\r\n        </h1>\r\n        <h3>Currently working full time at Innominds, previously at the Infosys.</h3>\r\n        <a target=\"_blank\" href=\"https://github.com/theanuraggupta\">\r\n          <button class=\"btn btn-primary\" type=\"button\">\r\n            Explore Github\r\n          </button>\r\n        </a>\r\n        <a href=\"mailto:anuraggupta.hits@gmail.com?Subject=Hello%20Anurag\">\r\n          <button class=\"btn btn-secondary\" type=\"button\">\r\n            Contact Me\r\n          </button>\r\n        </a>\r\n      </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html")
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Workspace\New folder\Portfolio-in-development\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map